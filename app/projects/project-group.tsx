'use client';

import { useState, useEffect } from 'react';
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

type ProjectGroupProps = {
  group: ProjectGroup;
  isCollapsed?: boolean;
  onCollapsedChange?: (isCollapsed: boolean) => void;
};

export const ProjectGroup = ({
  group,
  isCollapsed = false,
  onCollapsedChange,
}: ProjectGroupProps) => {
  const [localCollapsed, setLocalCollapsed] = useState(isCollapsed);

  useEffect(() => {
    setLocalCollapsed(isCollapsed);
  }, [isCollapsed]);

  const handleCollapse = () => {
    const newState = !localCollapsed;
    setLocalCollapsed(newState);
    onCollapsedChange?.(newState);
  };

  return (
    <div className="-m-4">
      {group.title && (
        <button
          onClick={handleCollapse}
          className={clsx(
            'w-full flex items-center justify-between text-left p-4',
            'text-base font-bold text-gray-900 dark:text-gray-100 group',
            localCollapsed && 'h-full'
          )}
        >
          <span>{group.title}</span>
          <ChevronRight
            className={clsx(
              'w-4 h-4 transition-transform duration-200',
              !localCollapsed && 'rotate-90'
            )}
          />
        </button>
      )}
      <div
        className={clsx(
          'transition-all duration-200 overflow-hidden px-4',
          localCollapsed
            ? 'max-h-0 opacity-0'
            : 'max-h-[2000px] opacity-100 pb-4'
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
        <div className="flex flex-col space-y-1.5">
          {group.entries.map((framework) => (
            <ProjectCard key={framework.name} {...framework} />
          ))}
        </div>
      </div>
    </div>
  );
};
