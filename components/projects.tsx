import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid';
import type { FC } from 'react';
import Image from 'next/image';
import type { FilledLinkToWebField } from '@prismicio/types';
import Link from 'next/link';
import clsx from 'clsx';
import type { HomeDocument } from '@/types.generated';

type ProjectsProps = {
  title: HomeDocument['data']['projects_title'];
  description: HomeDocument['data']['projects_description'];
  items: HomeDocument['data']['projects'];
};

const Projects: FC<ProjectsProps> = ({ title, description, items }) => (
  <div className="overflow-hidden bg-gray-100 dark:bg-gray-800">
    <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:gap-4">
        <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          {title}
        </h3>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
      <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {items.map(
          (
            { project_description, project_link, project_title, project_image },
            index
          ) => (
            <li
              key={index}
              className="col-span-1 divide-y dark:divide-gray-700 divide-gray-200 rounded-lg bg-white dark:bg-gray-900 shadow overflow-hidden"
            >
              <Image
                src={project_image.url ?? ''}
                alt=""
                width={project_image.dimensions?.width}
                height={project_image.dimensions?.height}
                className="aspect-[5/3] object-cover"
              />
              <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="flex-1">
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-semibold truncate text-gray-900 dark:text-white">
                      {project_title}
                    </h3>
                    <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                      {project_description}
                    </p>
                  </div>
                  <p className="mt-8">
                    <Link
                      href={(project_link as FilledLinkToWebField).url}
                      className={clsx(
                        'inline-flex transition-colors gap-2 rounded-lg px-4 py-1.5 text-base font-semibold leading-7 ring-1',
                        'text-gray-900 dark:text-white dark:ring-white/10 ring-gray-900/10 hover:ring-gray-900/20'
                      )}
                    >
                      Download {project_title} &rarr;
                    </Link>
                  </p>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  </div>
);

export default Projects;
