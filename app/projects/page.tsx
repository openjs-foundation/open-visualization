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

const ProjectsPage: React.FC = () => (
  <div className="py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3 sm:text-4xl">
          Projects
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          Full list of projects and libraries which are independently maintained
          by passionate contributors who have joined forces with OpenVis.
        </p>

        <p className="mt-5">
          <Link
            href="/#get-involved"
            className="inline-flex items-center text-primary hover:underline"
          >
            Join our community →
          </Link>
        </p>
      </div>

      {projectsJson.projects.map((project, index) => (
        <ProjectContainer key={index} project={project} />
      ))}

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Application Showcase
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-300 mb-8">
          Explore real-world applications and visualizations built with OpenVis
          frameworks by our community members.
        </p>
        <div className="flex justify-center">
          <Link
            href="/showcase"
            className={clsx(
              'inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-base font-semibold leading-7 ring-1 transition-colors',
              'text-gray-900 ring-gray-900/10 hover:ring-gray-900/20 dark:text-white dark:ring-white/10 hover:bg-gray-50 dark:hover:bg-gray-800'
            )}
          >
            Visit Showcase
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectsPage;
