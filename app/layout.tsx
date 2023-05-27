import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
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
      <PrismicProvider internalLinkComponent={internalLinkComponent}>
        <PrismicPreview repositoryName={repositoryName}>
          {children}
        </PrismicPreview>
      </PrismicProvider>
    </body>
  </html>
);

export default Layout;
