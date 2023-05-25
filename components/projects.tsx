import type { FC } from 'react';
import Image from 'next/image';
import type { FilledLinkToWebField } from '@prismicio/types';
import Link from 'next/link';
import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';
import { HomeDocumentData } from '@/prismicio-types';

type ProjectsProps = {
  title: HomeDocumentData['projects_title'];
  description: HomeDocumentData['projects_description'];
  items: HomeDocumentData['projects'];
};

const Projects: FC<ProjectsProps> = ({ title, description, items }) => (
  <div className="overflow-hidden bg-gray-100 dark:bg-gray-800" id="projects">
    <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:gap-4">
        <h2 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
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
              className="col-span-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow dark:divide-gray-700 dark:bg-gray-900"
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
                    <h3 className="truncate text-2xl font-semibold text-gray-900 dark:text-white">
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
                        'inline-flex items-center gap-2 rounded-lg px-4 py-1.5 text-base font-semibold leading-7 ring-1 transition-colors',
                        'text-gray-900 ring-gray-900/10 hover:ring-gray-900/20 dark:text-white dark:ring-white/10'
                      )}
                    >
                      Download {project_title}
                      <ArrowUpRight className="h-4 w-4" />
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
