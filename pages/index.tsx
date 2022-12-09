'use client';
import type { FC } from 'react';
import type { GetStaticProps } from 'next';
import { createClient } from '@/lib/prismic';
import type { HomeDocument } from '@/types.generated';
import Hero from '@/components/hero';
import Logos from '@/components/logos';
import Navigation from '@/components/navigation';

type HomeProps = {
  data: HomeDocument['data'];
};

const Home: FC<HomeProps> = ({ data }) => (
  <>
    <Navigation />
    <Hero
      title={data.hero_title}
      description={data.hero_description}
      actions={data.hero_actions}
    />
    <Logos logos={data.collaborators} />
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
