import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { NextSeo } from 'next-seo';
import { repositoryName } from '@/lib/prismic';
import '../styles/globals.css';
import type { LinkProps } from 'next/link';
import type { FC } from 'react';
import type { AppProps } from 'next/app';

const internalLinkComponent = (props: LinkProps) => <Link {...props} />;

const App: FC<
  AppProps<{
    title: string;
    description: string;
  }>
> = ({ Component, pageProps }) => (
  <>
    <NextSeo
      title={pageProps.title}
      description={pageProps.description}
      titleTemplate="%s | Open Visualization"
      canonical={new URL(process.env.NEXT_PUBLIC_SITE_URL ?? '').href}
      openGraph={{
        type: 'website',
        locale: 'en_IE',
        title: pageProps.title,
        description: pageProps.description,
        images: [
          {
            url: new URL('/cover.png', process.env.NEXT_PUBLIC_SITE_URL ?? '')
              .href,
            width: 1200,
            height: 630,
            alt: 'Open Visualization',
          },
        ],
      }}
      twitter={{
        cardType: 'summary_large_image',
      }}
    />
    <PrismicProvider internalLinkComponent={internalLinkComponent}>
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  </>
);

export default App;
