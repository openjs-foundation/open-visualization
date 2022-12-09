import type { FC } from 'react';
import Link from 'next/link';
import type { FilledLinkToWebField } from '@prismicio/types';
import clsx from 'clsx';
import { Book, Heart, Paperclip, Users } from 'lucide-react';
import type { HomeDocument } from '@/types.generated';

type OutlinksProps = {
  items: HomeDocument['data']['about_outlinks'];
};

const icons = [Book, Paperclip, Users, Heart];

const Outlinks: FC<OutlinksProps> = ({ items }) => (
  <div className="bg-white dark:bg-gray-900 py-20 sm:py-24 lg:py-32">
    <div className="mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">A better way to send money.</h2>
      <dl className="grid grid-cols-1 gap-16 md:grid md:grid-cols-2 lg:grid-cols-4">
        {items.map(
          (
            {
              about_outlink_label,
              about_outlink_link,
              about_outlink_description,
              about_outlink_title,
            },
            index
          ) => {
            const Icon = icons[index];

            return (
              <div key={about_outlink_label}>
                <dt>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white">
                    <Icon size={24} className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">
                    {about_outlink_title}
                  </p>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {about_outlink_description}
                </dd>
                <dd className="mt-4">
                  <Link
                    key={about_outlink_label}
                    href={(about_outlink_link as FilledLinkToWebField).url}
                    className={clsx(
                      'inline-flex transition-colors gap-2 rounded-lg px-4 py-1.5 text-base font-semibold leading-7 ring-1',
                      'text-gray-900 dark:text-white dark:ring-white/10 ring-gray-900/10 hover:ring-gray-900/20'
                    )}
                  >
                    {about_outlink_label}
                  </Link>
                </dd>
              </div>
            );
          }
        )}
      </dl>
    </div>
  </div>
);

export default Outlinks;
