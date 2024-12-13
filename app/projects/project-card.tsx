'use client';

import Image from 'next/image';

type ProjectEntry = {
  name: string;
  image: string;
  url: string;
  description: string;
};

export const ProjectCard = ({
  name,
  image,
  url,
  description,
}: ProjectEntry) => (
  <a
    href={url}
    className="group flex flex-row h-16 rounded-md overflow-hidden transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-800/40"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="relative w-24 flex-shrink-0">
      <Image
        src={image}
        alt={name}
        fill
        sizes="96px"
        className="object-cover"
        priority={false}
      />
    </div>

    <div className="px-4 py-2 flex flex-col justify-center flex-grow min-w-0">
      <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
        {name}
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
        {description}
      </p>
    </div>
  </a>
);
