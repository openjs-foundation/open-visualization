import { PrismicPreview } from '@prismicio/next';
import { Analytics } from '@vercel/analytics/react';
import { repositoryName } from '@/lib/prismic';
import '../styles/globals.css';
import Providers from '@/components/providers';
import type { FC, ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <html lang="en">
    <body className="bg-white pt-16 dark:bg-gray-900">
      <Providers>
        <PrismicPreview repositoryName={repositoryName}>
          {children}
        </PrismicPreview>
      </Providers>
      <Analytics />
    </body>
  </html>
);

export default Layout;
