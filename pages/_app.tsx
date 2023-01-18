import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import type { FC } from 'react';
import type { AppProps } from 'next/app';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/lib/prismic';
import '../styles/globals.css';
import { NextSeo } from 'next-seo';

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
    />
    <PrismicProvider internalLinkComponent={internalLinkComponent}>
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  </>
);

export default App;
