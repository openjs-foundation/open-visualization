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
import type { HomeDocumentData } from '@/prismicio-types';

const sqlRoomsProject = {
  project_title: 'SQLRooms',
  project_description:
    'An open source React toolkit for human and agent collaborative analytics apps powered by DuckDB.',
  project_link: {
    link_type: 'Web',
    url: 'https://sqlrooms.org',
  },
  project_image: {
    url: 'https://sqlrooms.org/media/overview/collage.webp',
    alt: 'SQLRooms overview collage',
  },
} as HomeDocumentData['projects'][number];

const appendProjectIfMissing = (
  projects: HomeDocumentData['projects'],
  project: HomeDocumentData['projects'][number]
): HomeDocumentData['projects'] => {
  const exists = projects.some(
    ({ project_title }) =>
      project_title?.toLowerCase() === project.project_title?.toLowerCase()
  );

  return exists ? projects : [...projects, project];
};

export const generateMetadata = async (): Promise<Metadata> => {
  const { data } = await createClient().getSingle('home');

  return createMetadata(data.title ?? '', data.description ?? '');
};

const Home = async (): Promise<ReactElement> => {
  const client = createClient();
  const { data } = await client.getSingle('home');
  const projects = appendProjectIfMissing(data.projects, sqlRoomsProject);
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
        items={projects}
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
