import type { Metadata } from 'next';

type MetadataGenerator = (
  title: string,
  description: string,
  path?: string,
  image?: string
) => Metadata;

const applicationName = 'Open Visualization';
const authors: Metadata['authors'] = [
  {
    name: 'OpenJS Foundation',
    url: 'https://openjsf.org/',
  },
  {
    name: 'Hayden Bleasel',
    url: 'https://haydenbleasel.com/',
  },
];
const publisher = 'OpenJS Foundation';
const xHandle = '@openjsf';

export const createMetadata: MetadataGenerator = (
  title,
  description,
  path,
  image
): Metadata => {
  if (!process.env.NEXT_PUBLIC_SITE_URL) {
    throw new Error('NEXT_PUBLIC_SITE_URL is not defined');
  }

  const parsedTitle = `${title} | ${applicationName}`;
  const images = [];

  if (image) {
    images.push({
      url: image,
      width: 1200,
      height: 630,
      alt: title,
    });
  }

  const metadata: Metadata = {
    title: parsedTitle,
    description,
    applicationName,
    authors,
    creator: authors[0].name,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
    formatDetection: {
      telephone: false,
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: 'default',
      title: parsedTitle,
    },
    openGraph: {
      title: parsedTitle,
      description,
      type: 'website',
      images,
      siteName: applicationName,
      locale: 'en_US',
      url: new URL(path ?? '/', process.env.NEXT_PUBLIC_SITE_URL).toString(),
    },
    publisher,
    x: {
      card: 'summary_large_image',
      creator: xHandle,
    },
    viewport: {
      minimumScale: 1,
      initialScale: 1,
      width: 'device-width',
      viewportFit: 'cover',
    },
  };

  return metadata;
};
