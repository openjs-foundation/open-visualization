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
    className="group flex flex-row bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="relative w-48 h-32 flex-shrink-0">
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width: 768px) 192px, 192px"
        className="object-contain p-4 bg-white dark:bg-gray-800"
        priority={false}
      />
    </div>

    <div className="p-3 flex flex-col justify-center flex-grow">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {name}
      </h3>
      <p className="text-base text-gray-600 dark:text-gray-300 mb-2">
        {description}
      </p>
      <span className="inline-flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
        Learn More
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </span>
    </div>
  </a>
);
