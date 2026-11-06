import { createMetadata } from '@/lib/metadata';
import { createClient } from '@/lib/prismic';

import Callout from '@/components/callout';
import Community from '@/components/community';
import Hero from '@/components/hero';
import Logos from '@/components/logos';
import summitContent from '@/content/summits.json';
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
  const chicago = summitContent.summits.find(
    (summit) => summit.title === 'Chicago 2027'
  )!;

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
      <Callout
        caption={chicago.date}
        title="Open Visualization Collaborator Summit 2027 — Chicago"
        description={[
          { type: 'paragraph', text: chicago.description, spans: [] },
          {
            type: 'paragraph',
            text: 'Exact dates and venue are to be confirmed. Explore the draft agenda and check back for updates.',
            spans: [],
          },
        ]}
        ctaLabel="Explore Chicago 2027"
        ctaLink={{ link_type: 'Web', url: chicago.url }}
        image={{
          url: chicago.image,
          alt: chicago.imageAlt,
          dimensions: { width: 1200, height: 485 },
        }}
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
