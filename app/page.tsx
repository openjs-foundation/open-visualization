import { createMetadata } from '@/lib/metadata';
import { createClient } from '@/lib/prismic';

import Callout from '@/components/callout';
import Community from '@/components/community';
import Hero from '@/components/hero';
import Logos from '@/components/logos';
import ProjectsPreview from '@/components/projects-preview';

export const fetchCache = 'force-no-store';
export const revalidate = 0;

// vis.gl additions
// import VisGLHero from '@/components/visgl/pages/index';

import type { Metadata } from 'next';
import type { ReactElement } from 'react';

export const generateMetadata = async (): Promise<Metadata> => {
  const { data } = await createClient().getSingle('home');

  return createMetadata(data.title ?? '', data.description ?? '');
};

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
          'Open Source tools for big data visualization on the web'
        }
        description={
          //data.hero_description
          // Temporary change until we can change it in Prismic
          `The Open Visualization Collaboration Space “OpenVis” is a forum within the OpenJS Foundation to neutrally govern a growing suite of widely adopted visualization libraries targeting TypeScript, JavaScript, WebGPU, WebGL and WebAssembly.
          `
        }
        actions={data.hero_actions}
        focusAreas={
          []
          //  data.focus_areas
        }
      />

      <ProjectsPreview
        title="Projects"
        description="A suite of open source tools for high performance data visualization and computation for the web."
        items={data.projects}
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
