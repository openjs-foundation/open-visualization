'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import { ProjectCard } from './project-card';
import markdownToHtml from '@/components/visgl/lib/markdownToHtml';

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

export const ProjectGroup = ({ group }: { group: ProjectGroup }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="mb-16">
      {group.title && (
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-between text-left text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 group"
        >
          <span>{group.title}</span>
          <ChevronRight
            className={clsx(
              'w-6 h-6 transition-transform duration-200',
              !isCollapsed && 'rotate-90'
            )}
          />
        </button>
      )}
      <div
        className={clsx(
          'transition-all duration-200 overflow-hidden',
          isCollapsed ? 'max-h-0 opacity-0' : 'max-h-[5000px] opacity-100'
        )}
      >
        {group.description && (
          <div
            className="prose dark:prose-invert max-w-none mb-8"
            dangerouslySetInnerHTML={{
              __html: markdownToHtml(group.description),
            }}
          />
        )}
        <div className="flex flex-col space-y-6">
          {group.entries.map((framework) => (
            <ProjectCard key={framework.name} {...framework} />
          ))}
        </div>
      </div>
    </div>
  );
};
