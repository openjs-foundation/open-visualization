import Link from 'next/link';
import { useRouter } from 'next/router';
import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { ChevronDown, Moon, Sun, X } from 'lucide-react';

import type { CSSProperties, FC, HTMLProps } from 'react';
import { Fragment, useEffect, useRef } from 'react';
import type { LinkProps } from '@prismicio/react';
import useTheme from '@haydenbleasel/use-theme';
import clamp from '@/lib/clamp';
import links from '@/lib/navigation';

const MobileNavItem: FC<LinkProps> = ({ href, children }) => (
  <li>
    <Popover.Button as={Link} href={href} className="block py-2">
      {children}
    </Popover.Button>
  </li>
);

const MobileNavigation: FC<{ className?: string }> = (props) => (
  <Popover {...props}>
    <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-800 shadow-lg shadow-gray-800/5 ring-1 ring-gray-900/5 backdrop-blur dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/10 dark:hover:ring-white/20">
      Menu
      <ChevronDown className="ml-3 h-auto w-2 stroke-gray-500 group-hover:stroke-gray-700 dark:group-hover:stroke-gray-400" />
    </Popover.Button>
    <Transition.Root>
      <Transition.Child
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="duration-150 ease-in"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Popover.Overlay className="fixed inset-0 z-50 bg-gray-800/40 backdrop-blur-sm dark:bg-black/80" />
      </Transition.Child>
      <Transition.Child
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-150 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-gray-900/5 dark:bg-gray-900 dark:ring-gray-800"
        >
          <div className="flex flex-row-reverse items-center justify-between">
            <Popover.Button aria-label="Close menu" className="-m-1 p-1">
              <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            </Popover.Button>
            <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Navigation
            </h2>
          </div>
          <nav className="mt-6">
            <ul className="-my-2 divide-y divide-gray-100 text-base text-gray-800 dark:divide-gray-100/5 dark:text-gray-300">
              {links.map((link) => (
                <MobileNavItem key={link.label} href={link.href}>
                  {link.label}
                </MobileNavItem>
              ))}
            </ul>
          </nav>
        </Popover.Panel>
      </Transition.Child>
    </Transition.Root>
  </Popover>
);

const Glow: FC = () => (
  <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
);

const NavItem: FC<typeof links[number]> = ({ href, label, items }) => {
  const isActive = useRouter().pathname === href;
  const linkClass = clsx(
    'relative block px-3 py-2 transition',
    isActive
      ? 'text-teal-500 dark:text-teal-400'
      : 'hover:text-teal-500 dark:hover:text-teal-400'
  );

  if (items?.length) {
    return (
      <li>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={clsx(
                  linkClass,
                  'flex gap-1 outline-none',
                  open && 'text-teal-500 dark:text-teal-400'
                )}
              >
                <span>{label}</span>
                <ChevronDown
                  className={clsx(
                    open && 'text-teal-600',
                    'h-5 w-5 group-hover:text-gray-500'
                  )}
                  aria-hidden="true"
                />
                <Glow />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-2 sm:px-0">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid bg-white dark:bg-gray-900 px-5 py-6 sm:p-4">
                      {items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="cursor-pointer flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          <div>
                            <p className="text-base font-medium text-gray-900 dark:text-white">
                              {item.label}
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </li>
    );
  }

  return (
    <li>
      <Link href={href} className={linkClass}>
        {label}
        {isActive && <Glow />}
      </Link>
    </li>
  );
};

const DesktopNavigation: FC<HTMLProps<HTMLDivElement>> = (props) => (
  <nav {...props}>
    <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-gray-800 shadow-lg shadow-gray-800/5 ring-1 ring-gray-900/5 backdrop-blur dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/10">
      {links.map((link) => (
        <NavItem key={link.href} {...link}>
          {link.label}
        </NavItem>
      ))}
    </ul>
  </nav>
);

const ModeToggle = () => {
  const [theme, setTheme] = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-gray-800/5 ring-1 ring-gray-900/5 backdrop-blur transition dark:bg-gray-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Sun className="h-6 w-6 fill-gray-100 stroke-gray-500 transition group-hover:fill-gray-200 group-hover:stroke-gray-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
      <Moon className="hidden h-6 w-6 fill-gray-700 stroke-gray-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-gray-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" />
    </button>
  );
};

const Header: FC = () => {
  const isHomePage = useRouter().pathname === '/';

  const headerRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const isInitial = useRef<boolean>(true);

  useEffect(() => {
    const downDelay = avatarRef.current?.offsetTop ?? 0;
    const upDelay = 64;

    const setProperty = (property: string, value: string | null) => {
      document.documentElement.style.setProperty(property, value);
    };

    const removeProperty = (property: string) => {
      document.documentElement.style.removeProperty(property);
    };

    const updateHeaderStyles = () => {
      if (!headerRef.current) {
        return;
      }

      const { top, height } = headerRef.current.getBoundingClientRect();
      const scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight
      );

      if (isInitial.current) {
        setProperty('--header-position', 'sticky');
      }

      setProperty('--content-offset', `${downDelay}px`);

      if (isInitial.current || scrollY < downDelay) {
        setProperty('--header-height', `${downDelay + height}px`);
        setProperty('--header-mb', `${-downDelay}px`);
      } else if (top + height < -upDelay) {
        const offset = Math.max(height, scrollY - upDelay);
        setProperty('--header-height', `${offset}px`);
        setProperty('--header-mb', `${height - offset}px`);
      } else if (top === 0) {
        setProperty('--header-height', `${scrollY + height}px`);
        setProperty('--header-mb', `${-scrollY}px`);
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty('--header-inner-position', 'fixed');
        removeProperty('--header-top');
        removeProperty('--avatar-top');
      } else {
        removeProperty('--header-inner-position');
        setProperty('--header-top', '0px');
        setProperty('--avatar-top', '0px');
      }
    };

    const updateAvatarStyles = () => {
      if (!isHomePage) {
        return;
      }

      const fromScale = 1;
      const toScale = 36 / 64;
      const fromX = 0;
      const toX = 2 / 16;

      const scrollY = downDelay - window.scrollY;

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale;
      scale = clamp(scale, fromScale, toScale);

      let xValue = (scrollY * (fromX - toX)) / downDelay + toX;
      xValue = clamp(xValue, fromX, toX);

      setProperty(
        '--avatar-image-transform',
        `translate3d(${xValue}rem, 0, 0) scale(${scale})`
      );

      const borderScale = 1 / (toScale / scale);
      const borderX = (-toX + xValue) * borderScale;
      const borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`;

      setProperty('--avatar-border-transform', borderTransform);
      setProperty('--avatar-border-opacity', scale === toScale ? '1' : '0');
    };

    const updateStyles = () => {
      updateHeaderStyles();
      updateAvatarStyles();
      isInitial.current = false;
    };

    updateStyles();
    window.addEventListener('scroll', updateStyles, { passive: true });
    window.addEventListener('resize', updateStyles);

    return () => {
      window.removeEventListener('scroll', updateStyles);
      window.removeEventListener('resize', updateStyles);
    };
  }, [isHomePage]);

  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-col"
        style={{
          height: 'var(--header-height)',
          marginBottom: 'var(--header-mb)',
        }}
      >
        <div
          ref={headerRef}
          className="top-0 z-10 h-16 pt-6"
          style={{
            position: 'var(--header-position)' as CSSProperties['position'],
          }}
        >
          <div
            className="mx-auto max-w-4xl px-6 top-[var(--header-top,theme(spacing.6))] w-full"
            style={{
              position:
                'var(--header-inner-position)' as CSSProperties['position'],
            }}
          >
            <div className="relative grid grid-cols-4 gap-4 items-center">
              <div className="col-span-1">
                <h1 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Open
                  <br />
                  Visualization
                </h1>
              </div>
              <div className="col-span-2 mx-auto justify-end md:justify-center">
                <MobileNavigation className="pointer-events-auto md:hidden" />
                <DesktopNavigation className="pointer-events-auto hidden md:block" />
              </div>
              <div className="justify-end flex col-span-1">
                <div className="pointer-events-auto">
                  <ModeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isHomePage && <div style={{ height: 'var(--content-offset)' }} />}
    </>
  );
};

export default Header;
