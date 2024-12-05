'use client';

import Image from 'next/image';
import showcasesYaml from '@/content/showcases.json';

export type ShowcaseEntry = {
  description: string;
  image: string;
  label: string;
  name: string;
  url: string;
};

interface ShowcaseProps {
  showcases: ShowcaseEntry[];
}

interface CaseProps extends ShowcaseEntry {}

const Showcase: React.FC<ShowcaseProps> = ({ showcases }) => (
  <div className="py-16 px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3">
        Application Showcase
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Our frameworks work together to enable world-class user experiences.
      </p>
    </div>

    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {showcases.map((showcase) => (
          <Case key={showcase.name} {...showcase} />
        ))}
      </div>
    </div>
  </div>
);

const Case: React.FC<CaseProps> = ({
  description,
  image,
  label,
  name,
  url,
}) => {
  return (
    <a
      href={url}
      className="group flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-102 hover:shadow-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative">
        {/* Browser-like header */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gray-100 dark:bg-gray-700 flex items-center px-4 z-10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-500" />
            <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-500" />
            <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-500" />
          </div>
        </div>

        {/* Image container with padding-top for browser header */}
        <div className="relative pt-8">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
          {name}
        </h3>
        <p className="text-base text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {description}
        </p>
        <span className="inline-flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
          {label}
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
};

const ShowcasesPage: React.FC = () => {
  return <Showcase showcases={showcasesYaml.showcases} />;
};

export default ShowcasesPage;
