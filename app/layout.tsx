import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { NextSeo } from 'next-seo';
import { repositoryName } from '@/lib/prismic';
import '../styles/globals.css';
import type { LinkProps } from 'next/link';
import type { FC, ReactNode } from 'react';

const internalLinkComponent = (props: LinkProps) => <Link {...props} />;

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <html lang="en">
    <body className="bg-white pt-16 dark:bg-gray-900">
      <NextSeo
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
          {children}
        </PrismicPreview>
      </PrismicProvider>
    </body>
  </html>
);

export default Layout;
