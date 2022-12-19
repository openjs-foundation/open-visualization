import type { FC } from 'react';
import Image from 'next/image';
import type { HomeDocument } from '@/types.generated';

type LogosProps = {
  logos: HomeDocument['data']['collaborators'];
};

const Logos: FC<LogosProps> = ({ logos }) => (
  <div className="bg-white dark:bg-gray-900" id="logos">
    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
        {logos.map(({ logo }) => (
          <div
            key={logo.url}
            className="col-span-1 flex justify-center bg-gray-50 py-8 px-8"
          >
            <Image
              className="max-h-12"
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
