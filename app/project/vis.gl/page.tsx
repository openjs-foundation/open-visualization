import ImageBox from '@/components/visgl/components/image-box';
import frameworksYaml from '@/content/frameworks.json';
import markdownToHtml from '@/components/visgl/lib/markdownToHtml';
import React from 'react';

type FrameworksGroup = {
  title: string | null;
  description: string;
  entries: {
    name: string;
    alt: string;
    image: string;
    url: string;
    description: string;
  }[];
};

const FrameworksTable = ({ group }: { readonly group: FrameworksGroup }) => (
  <div className="pt-5 flex-col gap-10">
    {group.entries.map(({ name, alt, image, url, description }) => (
      <div key={name} className="flex flex-col gap-5 mb-5 sm:flex-row">
        <div className="flex-none w-[150px] self-center lg:self-start font-bold text-lg">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </div>
        <div>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <ImageBox width={150} height={100} alt={alt} src={image} />
          </a>
        </div>
        <div className="flex-1">{description}</div>
      </div>
    ))}
  </div>
);

const VisGlPage: React.FC = () => (
  <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:gap-4">
      <h2 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        vis.gl Frameworks
      </h2>

      {frameworksYaml.frameworkGroups.map((group, index) => (
        <div key={index}>
          {group.title ? (
            <h2 className="text-2xl font-bold">{group.title}</h2>
          ) : null}
          {group.description ? (
            <div
              dangerouslySetInnerHTML={{
                __html: markdownToHtml(group.description),
              }}
            />
          ) : null}
          <FrameworksTable group={group} />
        </div>
      ))}
    </div>
  </div>
);

export default VisGlPage;
