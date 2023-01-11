import type { FC } from 'react';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import type { FilledLinkToWebField } from '@prismicio/types';
import useTheme from '@haydenbleasel/use-theme';
import { Moon, Sun } from 'lucide-react';
import type { HomeDocument } from '@/types.generated';
import links from '@/lib/navigation';

type NavbarProps = {
  items?: HomeDocument['data']['about_outlinks'];
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
    className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow fixed z-50 left-0 right-0 top-0"
  >
    {({ open }) => (
      <>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <Image
                  src="/logo.svg"
                  width={200}
                  height={32}
                  alt=""
                  className="dark:brightness-0 dark:invert"
                />
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
              {links.map((item) =>
                item.items ? (
                  <Menu as="div" className="relative h-full" key={item.label}>
                    <Menu.Button
                      className={clsx(
                        'inline-flex h-full items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-900 dark:text-white',
                        'border-transparent text-gray-500 hover:border-primary-blue hover:text-gray-700'
                      )}
                    >
                      {item.label}
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {item.items.map((subItem) => (
                          <Menu.Item key={subItem.label}>
                            {({ active }) => (
                              <Link
                                href={subItem.href}
                                className={clsx(
                                  active ? 'bg-gray-100 dark:bg-gray-700' : '',
                                  'px-4 py-2 text-sm text-gray-700 dark:text-gray-200 flex flex-col gap-1'
                                )}
                              >
                                <span>{subItem.label}</span>
                                <span className="text-xs">
                                  {subItem.description}
                                </span>
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                        {items?.map((subItem) => (
                          <Menu.Item key={subItem.about_outlink_label}>
                            {({ active }) => (
                              <Link
                                href={
                                  (
                                    subItem.about_outlink_link as FilledLinkToWebField
                                  ).url
                                }
                                className={clsx(
                                  active ? 'bg-gray-100 dark:bg-gray-700' : '',
                                  'px-4 py-2 text-sm text-gray-700 dark:text-gray-200 flex flex-col gap-1'
                                )}
                              >
                                <span>{subItem.about_outlink_label}</span>
                                <span className="text-xs">
                                  {subItem.about_outlink_description}
                                </span>
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={clsx(
                      'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-900 dark:text-white h-full',
                      'border-transparent text-gray-500 hover:border-primary-blue hover:text-gray-700'
                    )}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <ModeToggle />
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-blue">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 pt-2 pb-3">
            {links.map((item) => (
              <Disclosure.Button
                as="a"
                href={item.href}
                className="block py-2 pl-3 pr-4 text-base font-medium text-gray-700"
                key={item.label}
              >
                {item.label}
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

export default Navbar;
