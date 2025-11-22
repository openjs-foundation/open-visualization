import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';
import type { HomeDocumentData } from '@/prismicio-types';
import type { FilledLinkToWebField } from '@prismicio/types';
import type { FC } from 'react';

type ProjectsProps = {
  readonly title: HomeDocumentData['projects_title'];
  readonly description: HomeDocumentData['projects_description'];
  readonly items: HomeDocumentData['projects'];
};

const ProjectCard = ({
  project_title,
  project_description,
  project_image,
}: HomeDocumentData['projects'][0]) => (
  <Link
    href={`/projects#${project_title?.toLowerCase().replace(/\s+/g, '-')}`}
    className="group flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-102 hover:shadow-lg"
  >
    <div className="relative aspect-[16/12] w-full">
      <Image
        src={project_image.url ?? ''}
        alt={project_title ?? ''}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover p-3 bg-white dark:bg-gray-800"
        priority={false}
      />
    </div>

    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {project_title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 flex-grow line-clamp-3">
        {project_description}
      </p>
      <span className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
        Learn more about {project_title}
        <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
      </span>
    </div>
  </Link>
);

const ProjectsPreview: FC<ProjectsProps> = ({ title, description, items }) => (
  <div className="overflow-hidden" id="projects">
    <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
      {/* <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:gap-4">
        <h2 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div> */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>

    <div className="flex justify-center pb-8">
      <Link
        href="/projects"
        className={clsx(
          'inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-base font-semibold leading-7 ring-1 transition-colors',
          'text-gray-900 ring-gray-900/10 hover:ring-gray-900/20 dark:text-white dark:ring-white/10 hover:bg-gray-50 dark:hover:bg-gray-800'
        )}
      >
        Detailed list of projects
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  </div>
);

export default ProjectsPreview;
