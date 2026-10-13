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
          The draft agenda below will develop as plans are finalized. Session
          times, presenters, and registration details will be confirmed closer
          to the summit.
        </p>
      </section>
      <section id="agenda" aria-labelledby="agenda-title" className="pb-12">
        <h2 id="agenda-title" className="text-3xl font-semibold mb-4">
          Draft agenda
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mb-8">
          A starting point for the summit program. Times and participation are
          tentative; the remaining sessions are to be announced.
        </p>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <li className="sm:col-span-2 lg:col-span-3 rounded-xl border bg-card p-6 sm:p-8">
            <p className="text-sm text-muted-foreground mb-2">
              Opening session · Time TBD
            </p>
            <h3 className="text-2xl font-semibold mb-3">State of the Union</h3>
            <p className="text-muted-foreground mb-4">
              Updates from across the vis.gl ecosystem and priorities for the
              year ahead.
            </p>
            <p className="font-medium">
              Presenters: vis.gl Technical Steering Committee
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Chris Gervang · Ib Green · Felix Palmer · Xiaoji Chen
            </p>
          </li>
          {Array.from({ length: 6 }, (_, index) => (
            <li
              key={index}
              className="rounded-xl border border-dashed bg-muted/30 p-6 min-h-48"
            >
              <p className="text-sm text-muted-foreground mb-2">
                Session {index + 2} · Time TBD
              </p>
              <h3 className="text-xl font-semibold mb-3">TBD</h3>
              <p className="text-muted-foreground">
                Topic and presenters to be announced.
              </p>
            </li>
          ))}
          <li className="sm:col-span-2 lg:col-span-3 rounded-xl border bg-card p-6 sm:p-8">
            <p className="text-sm text-muted-foreground mb-2">
              Closing session · Time TBD
            </p>
            <h3 className="text-2xl font-semibold mb-3">Community panel</h3>
            <p className="text-muted-foreground mb-4">
              An open discussion about the future of the ecosystem, community
              priorities, and opportunities to collaborate.
            </p>
            <p className="font-medium">
              Discussion leaders: vis.gl Technical Steering Committee
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Chris Gervang · Ib Green · Felix Palmer · Xiaoji Chen
            </p>
          </li>
        </ol>
      </section>
    </main>
  );
}
