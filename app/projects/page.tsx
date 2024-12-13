import projectsJson from '@/content/projects.json';
import { ProjectsContent } from './projects-content';

export const fetchCache = 'force-no-store';
export const revalidate = 0;

const ProjectsPage = () => {
  const project = projectsJson.projects[0];

  return (
    <ProjectsContent
      title={project.name}
      description={project.description}
      groups={project.groups}
    />
  );
};

export default ProjectsPage;
