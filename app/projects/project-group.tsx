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
    <div className="flex flex-col space-y-3">
      {group.title && (
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-between text-left text-base font-bold text-gray-900 dark:text-gray-100 mb-1.5 group"
        >
          <span>{group.title}</span>
          <ChevronRight
            className={clsx(
              'w-4 h-4 transition-transform duration-200',
              !isCollapsed && 'rotate-90'
            )}
          />
        </button>
      )}
      <div
        className={clsx(
          'transition-all duration-200 overflow-hidden',
          isCollapsed ? 'max-h-0 opacity-0' : 'max-h-[2000px] opacity-100'
        )}
      >
        {group.description && (
          <div
            className="prose dark:prose-invert prose-xs max-w-none mb-2 text-gray-600 dark:text-gray-400"
            dangerouslySetInnerHTML={{
              __html: markdownToHtml(group.description),
            }}
          />
        )}
        <div className="flex flex-col space-y-3">
          {group.entries.map((framework) => (
            <ProjectCard key={framework.name} {...framework} />
          ))}
        </div>
      </div>
    </div>
  );
};
