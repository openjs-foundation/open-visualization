import React from 'react';
import blogYaml from '@/content/blog.json';
import type { BlogPost } from '@/content/blog.json';
import Image from 'next/image';
import ArrowIcon from '@/components/icons/arrow-icon';

const BlogPage = () => {
  return (
    <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3">
          Open Visualization Collaboration Space Blog
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Deep dives into the vis.gl frameworks
        </p>
        <div className="mx-auto text-base text-gray-600 dark:text-gray-400 space-y-4">
          <p>
            The vis.gl blog introduces new releases, provides in-depth technical
            expositions and showcases applications of the vis.gl frameworks.
            Guest posts are welcome!
          </p>
          <p>
            Note that vis.gl blog posts can also be browser directly on{' '}
            <a
              href="https://medium.com/@vis.gl"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </a>
            .
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogYaml.map((entry, i) => (
            <BlogPost key={i} {...entry} />
          ))}
        </div>
      </div>
    </div>
  );
};

function BlogPost({ title, date, image, blurb, url }: BlogPost) {
  return (
    <a
      href={url}
      className="group flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-102 hover:shadow-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative aspect-video w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={false}
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{date}</p>
        <p className="text-base text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {blurb}
        </p>
        <span className="inline-flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
          Read Article
          <ArrowIcon />
        </span>
      </div>
    </a>
  );
}

export default BlogPage;
