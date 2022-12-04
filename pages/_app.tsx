import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import type { FC } from 'react';
import type { AppProps } from 'next/app';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/lib/prismic';
import '../styles/globals.css';

const internalLinkComponent = (props: LinkProps) => <Link {...props} />;

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <PrismicProvider internalLinkComponent={internalLinkComponent}>
    <PrismicPreview repositoryName={repositoryName}>
      <Component {...pageProps} />
    </PrismicPreview>
  </PrismicProvider>
);

export default App;
