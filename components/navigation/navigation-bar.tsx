'use client';

import BlogMenuContent from '@/components/navigation/blog-menu-content';
import NewsMenuContent from '@/components/navigation/news-menu-content';
import ProjectsMenuContent from '@/components/navigation/projects-menu-content';
import SummitsMenuContent from '@/components/navigation/summits-menu-content';
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
import type { BlogPost } from '@/content/blog.json';
import type { NewsItem } from '@/content/news.json';
import { cn } from '@/lib/utils';
import type { HomeDocumentData } from '@/prismicio-types';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

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

type NavbarProps = {
  readonly projects?: HomeDocumentData['projects'];
  readonly news?: NewsItem[];
  readonly summits?: HomeDocumentData['summits'];
  readonly blogPosts?: BlogPost[];
};

const NavigationBar: FC<NavbarProps> = ({
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
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={NAV_MENU_TRIGGER_STYLE}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={NAV_MENU_TRIGGER_STYLE}>
                    News
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NewsMenuContent news={news} />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={NAV_MENU_TRIGGER_STYLE}>
                    Projects
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ProjectsMenuContent projects={projects} />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={NAV_MENU_TRIGGER_STYLE}>
                    Summits
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <SummitsMenuContent summits={summits} />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={NAV_MENU_TRIGGER_STYLE}>
                    Blog
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <BlogMenuContent posts={blogPosts} />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={NAV_MENU_TRIGGER_STYLE}>
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/#get-involved" legacyBehavior passHref>
                    <NavigationMenuLink className={NAV_MENU_TRIGGER_STYLE}>
                      Get Involved
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
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
                    <Link
                      href="/"
                      className="block py-2 text-base font-medium text-gray-700 dark:text-gray-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/news"
                      className="block py-2 text-base font-medium text-gray-700 dark:text-gray-200"
                      onClick={() => setIsOpen(false)}
                    >
                      News
                    </Link>
                    <Link
                      href="/projects"
                      className="block py-2 text-base font-medium text-gray-700 dark:text-gray-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Projects
                    </Link>
                    <Link
                      href="/summits"
                      className="block py-2 text-base font-medium text-gray-700 dark:text-gray-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Summits
                    </Link>
                    <Link
                      href="/blog"
                      className="block py-2 text-base font-medium text-gray-700 dark:text-gray-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Blog
                    </Link>
                    <Link
                      href="/about"
                      className="block py-2 text-base font-medium text-gray-700 dark:text-gray-200"
                      onClick={() => setIsOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      href="/get-involved"
                      className="block py-2 text-base font-medium text-gray-700 dark:text-gray-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Get Involved
                    </Link>
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
