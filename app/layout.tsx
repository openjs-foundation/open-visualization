import type { FC, ReactNode } from 'react';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '../lib/prismic';
import '../styles/globals.css';

type RootLayoutProps = {
  children: ReactNode;
};

const internalLinkComponent = (props: LinkProps) => <Link {...props} />;

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <head />
    <body>
      <PrismicProvider internalLinkComponent={internalLinkComponent}>
        <PrismicPreview repositoryName={repositoryName}>
          {children}
        </PrismicPreview>
      </PrismicProvider>
    </body>
  </html>
);

export default RootLayout;
