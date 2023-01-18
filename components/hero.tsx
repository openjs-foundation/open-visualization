import type { FC } from 'react';
import Link from 'next/link';
import type { FilledLinkToWebField } from '@prismicio/types';
import clsx from 'clsx';

import resolveConfig from 'tailwindcss/resolveConfig';
import Image from 'next/image';
import tailwindConfig from '@/tailwind.config.js';
import type { HomeDocument } from '@/types.generated';

const fullConfig = resolveConfig(tailwindConfig);

type HeroProps = {
  title: HomeDocument['data']['hero_title'];
  description: HomeDocument['data']['hero_description'];
  actions: HomeDocument['data']['hero_actions'];
  focusAreas: HomeDocument['data']['focus_areas'];
};

const Hero: FC<HeroProps> = ({ title, description, actions, focusAreas }) => (
  <div className="isolate bg-white dark:bg-gray-900">
    <div className="pointer-events-none absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
      <svg
        className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
        viewBox="0 0 1155 678"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
          fillOpacity=".3"
          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        />
        <defs>
          <linearGradient
            id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
            x1="1155.49"
            x2="-78.208"
            y1=".177"
            y2="474.645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={fullConfig.theme.colors.primary.blue} />
            <stop
              offset={1}
              stopColor={fullConfig.theme.colors.primary.green}
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <main>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-4xl pt-20 sm:py-32">
          <div>
            <div>
              <Image
                src="/logo.svg"
                width={400}
                height={64}
                alt=""
                className="mb-8 max-w-[15rem] dark:brightness-0 dark:invert sm:mx-auto sm:max-w-none"
              />
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-center sm:text-6xl">
                {title}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-center">
                {description}
              </p>
              <div className="mt-8 flex gap-x-4 sm:justify-center">
                {actions.map(({ action_label, action_link }, index) => (
                  <Link
                    key={action_label}
                    href={(action_link as FilledLinkToWebField).url.replace(
                      'https://',
                      ''
                    )}
                    className={clsx(
                      'inline-flex gap-2 rounded-lg px-4 py-1.5 text-base font-semibold leading-7 transition-colors',
                      index
                        ? 'bg-primary-blue text-white shadow-sm'
                        : 'text-gray-900 dark:text-white'
                    )}
                  >
                    {action_label}
                    <span
                      className={index ? 'text-white' : 'text-gray-400'}
                      aria-hidden="true"
                    >
                      &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <svg
                className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                  fillOpacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor={fullConfig.theme.colors.primary.yellow} />
                    <stop
                      offset={1}
                      stopColor={fullConfig.theme.colors.primary.yellow}
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="mt-16 aspect-[16/9] w-full overflow-hidden rounded-md sm:mt-32">
            <iframe
              src="https://kepler.gl/demo/nyctrips"
              className="h-full w-full overflow-hidden rounded"
              title="kepler.gl demo"
            />
          </div>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2">
            {focusAreas.map(({ focus_area }) => (
              <span
                key={focus_area}
                className={clsx(
                  'inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium',
                  'bg-gray-100 text-gray-800',
                  'dark:bg-transparent dark:text-white dark:ring-1 dark:ring-white/10'
                )}
              >
                {focus_area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default Hero;
