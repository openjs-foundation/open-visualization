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
  default: {
    base: 'bg-slate-100/30 dark:bg-slate-800/20',
    hover: 'hover:bg-slate-200/30 dark:hover:bg-slate-700/20',
  },
  green: {
    base: 'bg-emerald-100/30 dark:bg-emerald-950/20',
    hover: 'hover:bg-emerald-200/30 dark:hover:bg-emerald-900/20',
  },
  blue: {
    base: 'bg-sky-100/30 dark:bg-sky-950/20',
    hover: 'hover:bg-sky-200/30 dark:hover:bg-sky-900/20',
  },
  purple: {
    base: 'bg-violet-100/30 dark:bg-violet-950/20',
    hover: 'hover:bg-violet-200/30 dark:hover:bg-violet-900/20',
  },
  amber: {
    base: 'bg-orange-100/30 dark:bg-orange-950/20',
    hover: 'hover:bg-orange-200/30 dark:hover:bg-orange-900/20',
  },
  rose: {
    base: 'bg-pink-100/30 dark:bg-pink-950/20',
    hover: 'hover:bg-pink-200/30 dark:hover:bg-pink-900/20',
  },
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
  const [groupStates, setGroupStates] = useState<Record<string, boolean>>({});

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

              const themeColor =
                THEME_COLORS[group.theme as keyof typeof THEME_COLORS];

              const groupKey = group.title || index.toString();
              const isGroupCollapsed = groupStates[groupKey] ?? allCollapsed;

              return (
                <div
                  key={groupKey}
                  className={clsx(
                    'rounded-2xl p-4 border-2 border-gray-200/50 dark:border-gray-700/50',
                    'transition-all duration-300',
                    themeColor.base,
                    isGroupCollapsed && themeColor.hover,
                    LAYOUT_STYLES[group.layout as keyof typeof LAYOUT_STYLES],
                    colStart
                  )}
                >
                  <ProjectGroup
                    group={group}
                    isCollapsed={allCollapsed}
                    onCollapsedChange={(collapsed) => {
                      setGroupStates((prev) => ({
                        ...prev,
                        [groupKey]: collapsed,
                      }));
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
