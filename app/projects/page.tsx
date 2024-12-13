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

const CATEGORY_LAYOUT = {
  applications: 'col-span-12 md:col-span-10 md:col-start-2 row-start-1',
  main: 'col-span-12 md:col-span-10 md:col-start-2 row-start-2',
  extensions: 'col-span-12 md:col-span-5 md:col-start-2 row-start-3',
  integrations:
    'col-span-12 md:col-span-5 md:col-start-7 md:row-start-3 row-start-4',
  core: 'col-span-12 md:col-span-10 md:col-start-2 row-start-5 md:row-start-4',
  utilities:
    'col-span-12 md:col-span-10 md:col-start-2 row-start-6 md:row-start-5',
};

const CATEGORY_COLORS = {
  applications: 'bg-gray-50 dark:bg-gray-800/50',
  main: 'bg-green-50 dark:bg-green-950/50',
  extensions: 'bg-gray-50 dark:bg-gray-800/50',
  integrations: 'bg-gray-50 dark:bg-gray-800/50',
  core: 'bg-gray-50 dark:bg-gray-800/50',
  utilities: 'bg-gray-50 dark:bg-gray-800/50',
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
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3 sm:text-4xl">
            {projectsJson.projects[0].name}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {projectsJson.projects[0].description}
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 relative">
          {sortedGroups.map((group) => (
            <div
              key={group.title}
              className={clsx(
                'rounded-2xl p-4 border-2 border-gray-200/50 dark:border-gray-700/50',
                'transition-all duration-300',
                CATEGORY_COLORS[group.category],
                CATEGORY_LAYOUT[group.category]
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
