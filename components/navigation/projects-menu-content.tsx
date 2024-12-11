import Link from 'next/link';
import Image from 'next/image';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import React from 'react';
import type { HomeDocumentData } from '@/prismicio-types';
import type { ImageField } from '@prismicio/types';

type ProjectsMenuContentProps = {
  readonly projects?: HomeDocumentData['projects'];
};

const NavigationMenuItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { readonly image?: ImageField }
>(({ className, title, children, image, ...props }, ref) => (
  <NavigationMenuLink asChild>
    <a
      ref={ref}
      className={cn(
        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
        className
      )}
      {...props}
    >
      <div className="flex gap-2">
        {image?.url ? (
          <Image
            src={image.url}
            alt={image.alt ?? ''}
            width={100}
            height={100}
            className="h-16 w-30 rounded object-cover"
          />
        ) : null}
        <div className="flex flex-col gap-2">
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </div>
      </div>
    </a>
  </NavigationMenuLink>
));
NavigationMenuItem.displayName = 'NavigationMenuItem';

const ProjectsMenuContent: React.FC<ProjectsMenuContentProps> = ({
  projects,
}) => {
  return (
    <div>
      <div className="p-4 border-b">
        <NavigationMenuItem title="Full list of projects →" href="/projects">
          View the full list of projects maintained by OpenVis.
        </NavigationMenuItem>
      </div>
      <div className="p-6 flex flex-col gap-2 w-[400px] md:w-[500px] lg:w-[600px]">
        <ul className="grid gap-3 p-2 lg:grid-cols-1">
          {projects?.map((project) => (
            <li key={project.project_title}>
              <NavigationMenuItem
                title={project.project_title ?? ''}
                href={
                  // This is temporary until we can change it in Prismic
                  project.project_title === 'Vis.gl'
                    ? '/projects'
                    : (project.project_link?.url ?? '#')
                }
                image={project.project_image}
              >
                {project.project_description}
              </NavigationMenuItem>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="border-b p-6 pt-2 text-sm text-muted-foreground">
        Each project is independently maintained by passionate contributors who
        have joined forces with OpenVis.{' '}
        <Link
          href="/#get-involved"
          className="inline-flex items-center text-primary hover:underline"
        >
          Join our community →
        </Link>
      </div> */}
      <div className="p-4">
        <NavigationMenuItem title="Application Showcase" href="/showcase">
          Explore real-world applications and visualizations built with OpenVis
          frameworks by our community members.
        </NavigationMenuItem>
      </div>
    </div>
  );
};

export default ProjectsMenuContent;
