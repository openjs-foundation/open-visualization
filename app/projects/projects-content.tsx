'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import clsx from 'clsx';
import { ProjectGroup } from './project-group';

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
  category: string;
  layout: 'full' | 'half' | 'third';
  theme: 'default' | 'green' | 'blue' | 'purple' | 'amber' | 'rose';
};

const LAYOUT_STYLES = {
  full: 'col-span-12 md:col-span-10 md:col-start-2',
  half: 'col-span-12 md:col-span-5',
  third: 'col-span-12 md:col-span-4',
} as const;

const THEME_COLORS = {
  default:
    'bg-gray-50/50 hover:bg-gray-100/50 dark:bg-gray-800/25 dark:hover:bg-gray-700/25',
  green:
    'bg-green-50/50 hover:bg-green-100/50 dark:bg-green-950/25 dark:hover:bg-green-900/25',
  blue: 'bg-blue-50/50 hover:bg-blue-100/50 dark:bg-blue-950/25 dark:hover:bg-blue-900/25',
  purple:
    'bg-purple-50/50 hover:bg-purple-100/50 dark:bg-purple-950/25 dark:hover:bg-purple-900/25',
  amber:
    'bg-amber-50/50 hover:bg-amber-100/50 dark:bg-amber-950/25 dark:hover:bg-amber-900/25',
  rose: 'bg-rose-50/50 hover:bg-rose-100/50 dark:bg-rose-950/25 dark:hover:bg-rose-900/25',
} as const;

export const ProjectsContent = ({
  title,
  description,
  groups,
}: {
  title: string;
  description: string;
  groups: ProjectGroup[];
}) => {
  const [allCollapsed, setAllCollapsed] = useState(false);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4 sm:text-4xl">
            {title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-end">
            <button
              onClick={() => setAllCollapsed(!allCollapsed)}
              className="flex items-center gap-2 px-3 py-1 text-sm rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {allCollapsed ? (
                <>
                  <ChevronDown className="w-4 h-4" />
                  <span>Expand All</span>
                </>
              ) : (
                <>
                  <ChevronUp className="w-4 h-4" />
                  <span>Collapse All</span>
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-12 gap-4 relative">
            {groups.map((group, index) => {
              const isHalfWidth = group.layout === 'half';
              const isEvenHalf = index % 2 === 0;
              const colStart = isHalfWidth
                ? isEvenHalf
                  ? 'md:col-start-2'
                  : 'md:col-start-7'
                : '';

              return (
                <div
                  key={group.title}
                  className={clsx(
                    'rounded-2xl p-4 border-2 border-gray-200/50 dark:border-gray-700/50',
                    'transition-all duration-300',
                    THEME_COLORS[group.theme as keyof typeof THEME_COLORS],
                    LAYOUT_STYLES[group.layout as keyof typeof LAYOUT_STYLES],
                    colStart
                  )}
                >
                  <ProjectGroup group={group} isCollapsed={allCollapsed} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
