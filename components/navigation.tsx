import type { FC } from 'react';
import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import type { FilledLinkToWebField } from '@prismicio/types';
import useTheme from '@beskar-labs/use-theme';
import { Menu, Moon, Sun, X } from 'lucide-react';
import type { SettingsDocument } from '@/types.generated';

type NavbarProps = {
  items?: SettingsDocument['data']['navigation'];
};

const ModeToggle = () => {
  const [theme, setTheme] = useTheme();

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

const Navbar: FC<NavbarProps> = ({ items }) => (
  <Disclosure
    as="nav"
    className="fixed left-0 right-0 top-0 z-50 bg-white/90 shadow backdrop-blur-sm dark:bg-gray-900/90"
  >
    {({ open }) => (
      <>
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
            <div className="hidden items-center sm:ml-6 sm:flex sm:space-x-8">
              {items?.map((item) => (
                <Link
                  key={item.navigation_label}
                  href={(
                    item.navigation_link as FilledLinkToWebField
                  ).url.replace('https://#', '#')}
                  className={clsx(
                    'inline-flex h-full items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-900 dark:text-white',
                    'border-transparent text-gray-500 hover:border-primary-blue hover:text-gray-700'
                  )}
                >
                  {item.navigation_label}
                </Link>
              ))}
              <ModeToggle />
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-blue">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 pt-2 pb-3">
            {items?.map((item) => (
              <Disclosure.Button
                as="a"
                href={(
                  item.navigation_link as FilledLinkToWebField
                ).url.replace('https://#', '#')}
                className="block py-2 pl-3 pr-4 text-base font-medium text-gray-700"
                key={item.navigation_label}
              >
                {item.navigation_label}
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

export default Navbar;
