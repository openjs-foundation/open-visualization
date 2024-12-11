import Image from 'next/image';
import newsYaml from '@/content/news.json';
import ArrowIcon from '@/components/icons/arrow-icon';

const NewsPage = () => {
  return (
    <div id="news" className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3">
          News & Events
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Learn about how vis.gl is creating impact
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsYaml.map((item, i) => (
          <NewsEntry key={i} {...item} />
        ))}
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
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <p className="px-6 text-base font-medium text-gray-800 dark:text-gray-200 mb-4 flex-grow">
        {title}
      </p>
      <div className="px-6 pb-6">
        <span className="inline-flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
          Read Article
          <ArrowIcon />
        </span>
      </div>
    </a>
  );
}

export default NewsPage;
