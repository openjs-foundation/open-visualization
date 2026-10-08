import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { createClient } from '@/lib/prismic';
import summitContent from '@/content/summits.json';

export const metadata: Metadata = {
  title: 'Summits | Open Visualization',
  description:
    'Explore the Open Visualization Collaborator Summits, their communities, speakers, and agendas.',
};

export const revalidate = 3600;

export default async function SummitsPage() {
  // Keep every archived summit available even when CMS content is unavailable.
  const home = await createClient()
    .getSingle('home')
    .catch(() => null);

  return (
    <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Summits
        </h1>
        <p className="text-lg text-muted-foreground">
          The Open Visualization Collaborator Summits bring together
          contributors, developers, and researchers to share their work and
          shape the future of open-source visualization. Explore our gatherings
          around the world.
        </p>
      </div>
      <div className="space-y-12">
        {summitContent.summits.map((summit, index) => {
          const cmsSummit = home?.data.summits.find((item) =>
            item.summit_name?.includes(summit.title.slice(-4))
          );
          const image = summit.image;
          return (
            <article
              key={summit.url}
              className="overflow-hidden rounded-xl border bg-card shadow-sm"
            >
              <Link
                href={summit.url}
                prefetch={false}
                className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                <div className="relative aspect-[2/1] w-full bg-muted">
                  <Image
                    src={image}
                    alt={summit.imageAlt}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                    {summit.title}
                  </h2>
                  {summit.status && (
                    <span className="inline-block rounded-full bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200 px-3 py-1 text-sm font-medium mb-3">
                      {summit.status}
                    </span>
                  )}
                  <p className="text-sm text-muted-foreground mb-2">
                    {summit.date} · {summit.location}
                  </p>
                  <p className="text-muted-foreground mb-5">
                    {cmsSummit?.summit_description || summit.description}
                  </p>
                  <span className="font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">
                    Explore summit →
                  </span>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </main>
  );
}
