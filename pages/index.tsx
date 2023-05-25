'use client';

import { createClient } from '@/lib/prismic';
import Hero from '@/components/hero';
import Logos from '@/components/logos';
import About from '@/components/about';
import Projects from '@/components/projects';
import Community from '@/components/community';
import Footer from '@/components/footer';
import Navigation from '@/components/navigation';
import type { HomeDocumentData, SettingsDocumentData } from '@/prismicio-types';
import type { GetStaticProps } from 'next';
import type { FC } from 'react';

type HomeProps = {
  data: HomeDocumentData;
  settings: SettingsDocumentData;
};

const Home: FC<HomeProps> = ({ data, settings }) => (
  <>
    <Navigation items={settings.navigation} />
    <Hero
      title={data.hero_title}
      description={data.hero_description}
      actions={data.hero_actions}
      focusAreas={data.focus_areas}
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

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await createClient().getSingle('home');
  const { data: settings } = await createClient().getSingle('settings');

  return {
    props: {
      title: data.title,
      description: data.description,
      data,
      settings,
    },
  };
};

export default Home;
