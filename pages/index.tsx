'use client';
import type { FC } from 'react';
import type { GetStaticProps } from 'next';
import { createClient } from '@/lib/prismic';
import type { HomeDocument } from '@/types.generated';
import Hero from '@/components/hero';
import Logos from '@/components/logos';
import About from '@/components/about';
import Outlinks from '@/components/outlinks';
import Projects from '@/components/projects';
import Community from '@/components/community';
import Footer from '@/components/footer';
import Navigation from '@/components/navigation';

type HomeProps = {
  data: HomeDocument['data'];
};

const Home: FC<HomeProps> = ({ data }) => (
  <>
    <Navigation items={data.about_outlinks} />
    <Hero
      title={data.hero_title}
      description={data.hero_description}
      actions={data.hero_actions}
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
    <Outlinks items={data.about_outlinks} />
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
      description={data.hero_description}
      projects={data.projects}
      community={data.community_outlinks}
    />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await createClient().getSingle('home');

  return {
    props: {
      data,
    },
  };
};

export default Home;
