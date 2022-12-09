'use client';
import type { FC } from 'react';
import type { GetStaticProps } from 'next';
import { createClient } from '@/lib/prismic';
import type { HomeDocument } from '@/types.generated';
import Navigation from '@/components/navigation';

type HomeProps = {
  data: HomeDocument['data'];
};

const Home: FC<HomeProps> = ({ data }) => (
  <div>
    <Navigation />
    <Hero title={data.hero_title} description={data.hero_description} />
  </div>
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
