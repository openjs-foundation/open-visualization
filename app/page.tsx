import { createMetadata } from '@/lib/metadata';
import { createClient } from '@/lib/prismic';

import About from '@/components/about';
import Callout from '@/components/callout';
import Community from '@/components/community';
import Hero from '@/components/hero';
import Logos from '@/components/logos';
import Projects from '@/components/projects';

// vis.gl additions
// import VisGLHero from '@/components/visgl/pages/index';

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
  // const { data: settings } = await client.getSingle('settings');

  return (
    <>
      <Hero
        title={
          //data.hero_title
          // Temporary change until we can change it in Prismic
          'Open Source tools for powerful visualization for the web'
        }
        description={
          //data.hero_description
          // Temporary change until we can change it in Prismic
          `A suite of open source tools for high performance data visualization and computation for the web.
          The Open Visualization Collaboration Space “OpenVis” is a forum within the OpenJS Foundation to neutrally govern the most comprehensive and widely adopted visualization libraries based on JavaScript and WebGL.
          `
        }
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
      {/* <MyApp><VisGLHero /></MyApp> */}
      {/* <MyApp>
        <ShowcasePage />
      </MyApp> */}
      <Logos logos={data.collaborators} />
    </>
  );
};

export default Home;
