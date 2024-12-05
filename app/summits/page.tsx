import { createClient } from '@/lib/prismic';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { HomeDocumentData } from '@/prismicio-types';
import type { FilledLinkToWebField } from '@prismicio/types';

type SummitsProps = {
  readonly title: HomeDocumentData['section_title'];
  readonly description: HomeDocumentData['section_description'];
  readonly items: HomeDocumentData['summits'];
};

const SummitCard = ({
  summit_name,
  summit_dates,
  summit_description,
  playlist_link,
  agenda_link,
  summit_image,
  participants_image,
  additional_participants_number,
}) => (
  <div className="group flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-102 hover:shadow-lg">
    <div className="relative aspect-video w-full">
      <Image
        src={summit_image.url}
        alt={summit_name ?? ''}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
        priority={false}
      />
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {summit_name}
        </h3>
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center">
            <CalendarIcon className="w-4 h-4 mr-1" />
            {summit_dates
              ?.split(',')
              .map((part, index) =>
                index === 0 ? part : index === 1 ? ` → ${part}` : `, ${part}`
              )}
          </span>
        </div>
      </div>

      <p className="text-base text-gray-600 dark:text-gray-300 mb-6 flex-grow">
        {summit_description}
      </p>

      <div className="flex items-center mb-6">
        <div className="flex items-center">
          <Image
            src={participants_image.url}
            alt=""
            width={participants_image.dimensions?.width}
            height={44}
            className="object-cover"
          />
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
            {additional_participants_number}
          </span>
        </div>
      </div>

      <div className="flex gap-4">
        <Link
          href={(playlist_link as FilledLinkToWebField).url}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Playlist Of Talks
          <ArrowIcon />
        </Link>
        <Link
          href={(agenda_link as FilledLinkToWebField).url}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Full Agenda
          <ArrowIcon />
        </Link>
      </div>
    </div>
  </div>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

const Summits: React.FC<SummitsProps> = ({ title, description, items }) => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3 sm:text-4xl">
            {title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((summit, index) => (
            <SummitCard key={index} {...summit} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SummitsPage = async () => {
  const client = createClient();
  const { data } = await client.getSingle('home');

  return (
    <Summits
      title={data.section_title}
      description={data.section_description}
      items={data.summits}
    />
  );
};

export default SummitsPage;
