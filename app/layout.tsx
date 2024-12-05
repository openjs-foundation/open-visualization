import { PrismicPreview } from '@prismicio/next';
import { Analytics } from '@vercel/analytics/react';
import NavigationBar from '@/components/navigation/navigation-bar';
import Providers from '@/components/providers';
import { createClient, repositoryName } from '@/lib/prismic';
import type { FC, ReactElement, ReactNode } from 'react';
import '../styles/globals.css';
import Footer from '@/components/footer';

type LayoutProps = {
  readonly children: ReactNode;
};

const Layout: FC<LayoutProps> = async ({ children }): Promise<ReactElement> => {
  const client = createClient();
  const { data: settings } = await client.getSingle('settings');
  const { data } = await client.getSingle('home');

  return (
    <html lang="en">
      <body className="bg-white pt-16 dark:bg-gray-900">
        <Providers>
          <PrismicPreview repositoryName={repositoryName}>
            <NavigationBar
              items={settings.navigation}
              projects={data.projects}
            />
            {children}
            <Footer
              navigation={settings.navigation}
              description={data.hero_description}
              projects={data.projects}
              community={data.community_outlinks}
            />
          </PrismicPreview>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
};

export default Layout;
