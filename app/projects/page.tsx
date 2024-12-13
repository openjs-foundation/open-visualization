import projectsJson from '@/content/projects.json';
import markdownToHtml from '@/components/visgl/lib/markdownToHtml';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import clsx from 'clsx';
import { ProjectGroup } from './project-group';
import { ProjectCard } from './project-card';

export const fetchCache = 'force-no-store';
export const revalidate = 0;

type ProjectEntry = {
  name: string;
  image: string;
  url: string;
  description: string;
};

type ProjectGroup = {
  title?: string;
  description?: string;
  entries: ProjectEntry[];
};

type Project = {
  name: string;
  description: string;
  entries?: ProjectEntry[];
  groups?: ProjectGroup[];
};

const CATEGORY_ORDER = [
  'applications',
  'main',
  'extensions',
  'integrations',
  'core',
  'utilities',
];

const CATEGORY_COLORS = {
  applications: 'bg-gray-100 dark:bg-gray-800',
  main: 'bg-green-50 dark:bg-green-950',
  extensions: 'bg-gray-50 dark:bg-gray-900',
  integrations: 'bg-gray-50 dark:bg-gray-900',
  core: 'bg-gray-100 dark:bg-gray-800',
  utilities: 'bg-gray-100 dark:bg-gray-800',
};

const ProjectContainer = ({ project }: { project: Project }) => (
  <div id={project.name?.toLowerCase().replace(/\s+/g, '-')} className="mb-20">
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
      <div className="flex flex-col space-y-6">
        {project.entries.map((framework) => (
          <ProjectCard key={framework.name} {...framework} />
        ))}
      </div>
    )}
    {project.groups &&
      project.groups.map((group, index) => (
        <ProjectGroup key={index} group={group} />
      ))}
  </div>
);

const ProjectsPage: React.FC = () => {
  const sortedGroups = projectsJson.projects[0].groups.sort(
    (a, b) =>
      CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category)
  );

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3 sm:text-4xl">
            {projectsJson.projects[0].name}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {projectsJson.projects[0].description}
          </p>
        </div>

        <div className="space-y-8">
          {sortedGroups.map((group) => (
            <div
              key={group.title}
              className={clsx(
                'rounded-lg p-6',
                CATEGORY_COLORS[group.category]
              )}
            >
              <ProjectGroup group={group} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
