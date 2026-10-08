import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import summitContent from '@/content/summits.json';

export const metadata: Metadata = {
  title: 'Chicago 2027 Summit | Open Visualization',
  description:
    'The Open Visualization Collaborator Summit is being planned for Chicago in September 2027. Dates, venue, and program details are coming soon.',
};

export default function ChicagoSummitPage() {
  const summit = summitContent.summits.find(
    (item) => item.title === 'Chicago 2027'
  )!;

  return (
    <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Link
        href="/summits"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        ← All summits
      </Link>
      <section className="relative overflow-hidden rounded-xl bg-slate-950 text-white mt-8">
        <Image
          src={summit.image}
          alt={summit.imageAlt}
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/20" />
        <div className="relative px-6 py-20 sm:px-12 sm:py-28 max-w-3xl">
          <span className="inline-block rounded-full border border-cyan-300/50 bg-cyan-950/60 px-3 py-1 text-sm text-cyan-100 mb-6">
            In planning · 2027
          </span>
          <p className="text-lg text-slate-200 mb-3">
            Open Visualization Collaborator Summit
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">Chicago 2027</h1>
          <p className="text-xl text-slate-200">
            A new gathering of the open visualization community. More details
            coming soon.
          </p>
        </div>
      </section>
      <section className="py-12 max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">
          Planning the next summit
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          We’re planning to bring contributors, developers, and researchers
          together in Chicago to share their work and collaborate on the future
          of open-source visualization.
        </p>
        <dl className="grid sm:grid-cols-3 gap-6 mb-10">
          {[
            ['Location', 'Chicago, Illinois, USA'],
            [
              'Timing',
              'September 2027 — tentative; exact dates to be confirmed',
            ],
            ['Venue', 'To be announced'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border p-6">
              <dt className="font-semibold mb-2">{label}</dt>
              <dd className="text-muted-foreground">{value}</dd>
            </div>
          ))}
        </dl>
        <h2 className="text-2xl font-semibold mb-4">Program & registration</h2>
        <p className="text-lg text-muted-foreground">
          The agenda, speakers, and registration information will be announced
          as plans are finalized. Check back here for updates.
        </p>
      </section>
    </main>
  );
}
