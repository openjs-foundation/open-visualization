'use client';

import NewsMenuContent from '@/components/navigation/news-menu-content';
import ProjectsMenuContent from '@/components/navigation/projects-menu-content';
import SummitsMenuContent from '@/components/navigation/summits-menu-content';
import BlogMenuContent from '@/components/navigation/blog-menu-content';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import type { NewsItem } from '@/content/news.json';
import type { BlogPost } from '@/content/blog.json';
import { cn } from '@/lib/utils';
import type {
  HomeDocumentData,
  SettingsDocumentData,
  SettingsDocumentDataNavigationItem,
} from '@/prismicio-types';
import type { FilledLinkToWebField } from '@prismicio/types';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React, { useMemo } from 'react';

const NAV_MENU_TRIGGER_STYLE = cn(navigationMenuTriggerStyle(), {
  // 'text-white hover:bg-gray-800': true,
  'bg-transparent focus:bg-transparent ': true,
});

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Sun className="h-6 w-6 fill-gray-100 stroke-gray-500 transition group-hover:fill-gray-200 group-hover:stroke-gray-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-white [@media(prefers-color-scheme:dark)]:stroke-white [@media(prefers-color-scheme:dark)]:group-hover:fill-white [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
      <Moon className="hidden h-6 w-6 fill-gray-700 stroke-gray-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-gray-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-white" />
    </button>
  );
};

const addItemAfter = (
  items: NavbarProps['items'],
  targetLabel: string,
  newItem: SettingsDocumentDataNavigationItem
) => {
  if (!items) return items;
  const updatedItems = [...items] as typeof items;
  const targetIndex = updatedItems.findIndex(
    (item) => item.navigation_label === targetLabel
  );
  if (targetIndex !== -1) {
    updatedItems.splice(targetIndex + 1, 0, newItem);
  }
  return updatedItems;
};

type NavbarProps = {
  readonly items?: SettingsDocumentData['navigation'];
  readonly projects?: HomeDocumentData['projects'];
  readonly news?: NewsItem[];
  readonly blogPosts?: BlogPost[];
  readonly summits?: HomeDocumentData['summits'];
};

const NavigationMenuTriggerWithLink: FC<{
  href: string;
  children: React.ReactNode;
  className?: string;
}> = ({ href, children, className }) => {
  return (
    <Link href={href} legacyBehavior passHref>
      <NavigationMenuTrigger className={className}>
        {children}
      </NavigationMenuTrigger>
    </Link>
  );
};

const NavigationBar: FC<NavbarProps> = ({
  items,
  projects,
  news,
  summits,
  blogPosts,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white/90 shadow backdrop-blur-sm dark:bg-gray-900/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" aria-label="Home">
                <Image
                  src="/openjs-foundation.svg"
                  width={101}
                  height={32}
                  alt=""
                  className="dark:brightness-0 dark:invert"
                />
              </Link>
            </div>
          </div>
          <div className="hidden items-center nav:ml-6 nav:flex nav:space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {items?.map((item) => {
                  if (item.navigation_label === 'Projects') {
                    return (
                      <NavigationMenuItem key={item.navigation_label}>
                        <NavigationMenuTrigger
                          className={NAV_MENU_TRIGGER_STYLE}
                        >
                          {item.navigation_label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ProjectsMenuContent projects={projects} />
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  }

                  if (item.navigation_label === 'News') {
                    return (
                      <NavigationMenuItem key={item.navigation_label}>
                        <NavigationMenuTrigger
                          className={NAV_MENU_TRIGGER_STYLE}
                        >
                          {item.navigation_label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <NewsMenuContent news={news} />
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  }

                  if (item.navigation_label === 'Summits') {
                    return (
                      <NavigationMenuItem key={item.navigation_label}>
                        <NavigationMenuTrigger
                          className={NAV_MENU_TRIGGER_STYLE}
                        >
                          {item.navigation_label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <SummitsMenuContent summits={summits} />
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  }

                  if (item.navigation_label === 'Blog') {
                    return (
                      <NavigationMenuItem key={item.navigation_label}>
                        <NavigationMenuTrigger
                          className={NAV_MENU_TRIGGER_STYLE}
                        >
                          {item.navigation_label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <BlogMenuContent posts={blogPosts} />
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  }

                  let linkUrl = (
                    item.navigation_link as FilledLinkToWebField
                  ).url.replace('https://#', '/#');
                  if (linkUrl === '/#about') linkUrl = '/about';

                  return (
                    <NavigationMenuItem key={item.navigation_label}>
                      <Link href={linkUrl} legacyBehavior passHref>
                        <NavigationMenuLink className={NAV_MENU_TRIGGER_STYLE}>
                          {item.navigation_label}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
            <ModeToggle />
          </div>

          <div className="flex items-center nav:hidden">
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild>
                <button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-blue">
                  <span className="sr-only">Open main menu</span>
                  <Menu className="h-6 w-6" />
                </button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="space-y-4 p-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Menu</h2>
                    <DrawerClose asChild>
                      <button className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close</span>
                      </button>
                    </DrawerClose>
                  </div>
                  <div className="space-y-1">
                    {items?.map((item) => {
                      const url = (
                        item.navigation_link as FilledLinkToWebField
                      ).url.replace('https://#', '#');
                      return (
                        <Link
                          key={item.navigation_label}
                          href={url}
                          className="block py-2 text-base font-medium text-gray-700 dark:text-gray-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.navigation_label}
                        </Link>
                      );
                    })}
                  </div>
                  <div className="pt-4">
                    <ModeToggle />
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
