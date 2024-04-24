import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';
import type { HomeDocumentData } from '@/prismicio-types';
import type { FilledLinkToWebField } from '@prismicio/types';
import type { FC } from 'react';

type SummitsProps = {
  readonly title: HomeDocumentData['section_title'];
  readonly description: HomeDocumentData['section_description'];
  readonly items: HomeDocumentData['summits'];
};

const Summits: FC<SummitsProps> = ({ title, items, description }) => (
  <div className="overflow-hidden" id="summits">
    <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:gap-4">
        <h2 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 w-full md:w-1/2">
          {description}
        </p>
      </div>
      <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {items.map(
          (
            {
              summit_name,
              summit_dates,
              summit_description,
              playlist_link,
              agenda_link,
              summit_image,
              participants_image,
              additional_participants_number,
            },
            index
          ) => (
            <li
              key={index}
              className="col-span-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow dark:divide-gray-700 dark:bg-gray-900"
            >
              <Image
                src={summit_image.url ?? ''}
                alt=""
                width={summit_image.dimensions?.width}
                height={summit_image.dimensions?.height}
                className="aspect-[5/3] object-cover"
              />

              <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="flex-1 max-w-full">
                  <div className="flex flex-col mb-2">
                    <div className="mb-2">
                      {summit_dates!.split(',')[0]} →{' '}
                      {summit_dates!.split(',')[1]},{' '}
                      {summit_dates!.split(',')[2]}
                    </div>
                    <h3 className="truncate mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                      {summit_name}
                    </h3>
                    <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                      {summit_description}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={participants_image.url ?? ''}
                      alt=""
                      width={participants_image.dimensions?.width}
                      height={44}
                      className="object-cover"
                    />
                    <span className="ml-2">
                      {additional_participants_number}
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <p className="mt-8 mr-6">
                      <Link
                        href={(playlist_link as FilledLinkToWebField).url}
                        className={clsx(
                          'inline-flex items-center gap-2 rounded-lg px-4 py-1.5 text-base font-semibold leading-7 ring-1 transition-colors',
                          'text-white bg-primary-blue dark:text-white dark:ring-white/10'
                        )}
                      >
                        Playlist Of Talks
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </p>
                    <p className="mt-8">
                      <Link
                        href={(agenda_link as FilledLinkToWebField).url}
                        className={clsx(
                          'inline-flex items-center gap-2 rounded-lg px-4 py-1.5 text-base font-semibold leading-7 ring-1 transition-colors',
                          'text-gray-900 ring-gray-900/10 hover:ring-gray-900/20 dark:text-white dark:ring-white/10'
                        )}
                      >
                        Full Agenda
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  </div>
);

export default Summits;
