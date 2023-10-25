import Image from 'next/image';
import type { HomeDocumentData } from '@/prismicio-types';
import type { FC } from 'react';

type LogosProps = {
  readonly logos: HomeDocumentData['collaborators'];
};

const Logos: FC<LogosProps> = ({ logos }) => (
  <div className="bg-white dark:bg-gray-900" id="logos">
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
        {logos.map(({ logo }) => (
          <div
            key={logo.url}
            className="col-span-1 flex justify-center bg-gray-50 px-8 py-8 dark:bg-gray-800"
          >
            <Image
              className="max-h-12 dark:brightness-0 dark:invert"
              src={logo.url ?? ''}
              alt={logo.alt ?? ''}
              width={logo.dimensions?.width}
              height={logo.dimensions?.height}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Logos;
