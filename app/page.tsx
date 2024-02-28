import { createClient } from '@/lib/prismic';
import Hero from '@/components/hero';
import Logos from '@/components/logos';
import About from '@/components/about';
import Projects from '@/components/projects';
import Community from '@/components/community';
import Footer from '@/components/footer';
import Navigation from '@/components/navigation';
import Callout from '@/components/callout';
import Summits from '@/components/summits';
import { createMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { ReactElement } from 'react';

export const generateMetadata = async (): Promise<Metadata> => {
  const { data } = await createClient().getSingle('home');

  return createMetadata(data.title ?? '', data.description ?? '');
};

export const revalidate = 0;

const Home = async (): Promise<ReactElement> => {
  const client = createClient();
  const { data } = await client.getSingle('home');
  const { data: settings } = await client.getSingle('settings');

  return (
    <>
      <Navigation items={settings.navigation} />
      <Hero
        title={data.hero_title}
        description={data.hero_description}
        actions={data.hero_actions}
        focusAreas={data.focus_areas}
      />
      {data.callout_active ? (
        <Callout
          caption={data.callout_caption}
          title={data.callout_title}
          description={data.callout_description}
          ctaLabel={data.callout_cta_label}
          ctaLink={data.callout_cta_link}
          image={data.callout_image}
        />
      ) : null}
      <Summits
        title={data.section_title}
        description={data.section_description}
        items={data.summits}
      />
      <About
        title={data.about_title}
        description={data.about_description}
        content={data.about_content}
        /*
         * ctaLabel={data.about_cta_label}
         * ctaLink={data.about_cta_link}
         */
        image={data.about_image}
      />
      <Projects
        title={data.projects_title}
        description={data.projects_description}
        items={data.projects}
      />
      <Community
        title={data.community_title}
        description={data.community_description}
        items={data.community_outlinks}
      />
      <Logos logos={data.collaborators} />
      <Footer
        navigation={settings.navigation}
        description={data.hero_description}
        projects={data.projects}
        community={data.community_outlinks}
      />
    </>
  );
};

export default Home;
