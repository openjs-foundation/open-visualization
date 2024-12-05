import React from 'react';
import newsYaml from '../content/news.json';
import LinkWithArrow from './link-with-arrow';
import ImageBox from './image-box';

const News = () => {
  return (
    <div id="news" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3">
          News & Events
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Learn about how vis.gl is creating impact
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsYaml.map((item, i) => (
            <NewsEntry key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

function NewsEntry({ publication, date, image, title, url }) {
  return (
    <a
      href={url}
      className="group flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-102 hover:shadow-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3 className="px-6 pt-6 text-lg font-semibold text-gray-900 dark:text-gray-100">
        {publication}
      </h3>
      <p className="px-6 text-sm text-gray-500 dark:text-gray-400 mb-4">
        {date}
      </p>
      <div className="px-6 mb-4">
        <div className="relative aspect-video overflow-hidden rounded-md">
          <ImageBox
            src={image}
            width={240}
            height={143}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <p className="px-6 text-base font-medium text-gray-800 dark:text-gray-200 mb-4 flex-grow">
        {title}
      </p>
      <div className="px-6 pb-6">
        <span className="inline-flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
          Read Article
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
}

export default News;
