import Link from 'next/link';
import clsx from 'clsx';
import {
  ArrowUpRight,
  Calendar,
  Clock,
  Heart,
  Pencil,
  Plus,
  Slack,
} from 'lucide-react';
import type { HomeDocumentData } from '@/prismicio-types';
import type { FilledLinkToWebField } from '@prismicio/types';
import type { FC } from 'react';

type CommunityProps = {
  title: HomeDocumentData['community_title'];
  description: HomeDocumentData['community_description'];
  items: HomeDocumentData['community_outlinks'];
};

const icons = [Heart, Plus, Heart, Slack, Calendar, Pencil, Clock];

const Community: FC<CommunityProps> = ({ title, description, items }) => (
  <div
    className="bg-white py-16 dark:bg-gray-900 sm:py-24 lg:py-32"
    id="get-involved"
  >
    <div className="mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
      <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:gap-4">
        <h2 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {title}
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
      <dl className="mt-12 grid grid-cols-1 gap-16 sm:mt-24 lg:grid-cols-4">
        {items.map(
          (
            {
              community_outlink_cta_label,
              community_outlink_cta_link,
              community_outlink_description,
              community_outlink_title,
            },
            index
          ) => {
            const Icon = icons.length > index ? icons[index] : ArrowUpRight;

            return (
              <div key={community_outlink_title}>
                <dt>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-blue text-white">
                    <Icon size={24} className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-6 text-base font-semibold leading-tight tracking-tight text-gray-900 dark:text-white">
                    {community_outlink_title}
                  </p>
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {community_outlink_description}
                </dd>
                <dd className="mt-4">
                  <Link
                    href={
                      (community_outlink_cta_link as FilledLinkToWebField).url
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx(
                      'inline-flex items-center gap-2 rounded-lg px-4 py-1.5 text-base font-semibold leading-7 ring-1 transition-colors',
                      'text-gray-900 ring-gray-900/10 hover:ring-gray-900/20 dark:text-white dark:ring-white/10'
                    )}
                  >
                    {community_outlink_cta_label}
                    <ArrowUpRight className="h-4 w-4" />
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

export default Community;
