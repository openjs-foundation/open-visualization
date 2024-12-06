import Image from 'next/image';
import projectsJson from '@/content/projects.json';
import markdownToHtml from '@/components/visgl/lib/markdownToHtml';
import React from 'react';

type FrameworkEntry = {
  name: string;
  image: string;
  url: string;
  description: string;
};

type FrameworkGroup = {
  title: string;
  description: string;
  entries: FrameworkEntry[];
};

type Project = {
  name: string;
  description: string;
  entries?: FrameworkEntry[];
  groups?: FrameworkGroup[];
};

const FrameworkCard = ({ name, image, url, description }: FrameworkEntry) => (
  <a
    href={url}
    className="group flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-102 hover:shadow-lg w-full max-w-sm"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="relative aspect-[3/2] w-full">
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-contain p-4 bg-white dark:bg-gray-800"
        priority={false}
      />
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
        {name}
      </h3>
      <p className="text-base text-gray-600 dark:text-gray-300 mb-4 flex-grow">
        {description}
      </p>
      <span className="inline-flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
        Learn More
        <svg
          className="ml-2 w-4 h-4"
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
      </span>
    </div>
  </a>
);

const FrameworkGroup = ({ group }: { group: FrameworkGroup }) => (
  <div className="mb-16">
    {group.title && (
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        {group.title}
      </h2>
    )}
    {group.description && (
      <div
        className="prose dark:prose-invert max-w-none mb-8"
        dangerouslySetInnerHTML={{
          __html: markdownToHtml(group.description),
        }}
      />
    )}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      {group.entries.map((framework) => (
        <FrameworkCard key={framework.name} {...framework} />
      ))}
    </div>
  </div>
);

const Project = ({ project }: { project: Project }) => (
  <div className="mb-20">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
      {project.name}
    </h2>
    {project.description && (
      <div
        className="prose dark:prose-invert max-w-none mb-8"
        dangerouslySetInnerHTML={{
          __html: markdownToHtml(project.description),
        }}
      />
    )}
    {project.entries && (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {project.entries.map((framework) => (
          <FrameworkCard key={framework.name} {...framework} />
        ))}
      </div>
    )}
    {project.groups &&
      project.groups.map((group, index) => (
        <FrameworkGroup key={index} group={group} />
      ))}
  </div>
);

const ProjectsPage: React.FC = () => (
  <div className="py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3 sm:text-4xl">
          Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A suite of composable visualization frameworks
        </p>
      </div>

      {projectsJson.projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  </div>
);

export default ProjectsPage;
