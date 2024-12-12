import { createClient } from '@/lib/prismic';
import { HomeDocumentData } from '@/prismicio-types';
import { PrismicRichText } from '@prismicio/react';
import { Camera } from 'lucide-react';
import Image from 'next/image';
import type { FC } from 'react';

export const fetchCache = 'force-no-store';
export const revalidate = 0;

type AboutProps = {
  readonly title: HomeDocumentData['about_title'];
  readonly description: HomeDocumentData['about_description'];
  readonly content: HomeDocumentData['about_content'];
  /*
   * ctaLabel: HomeDocumentData['about_cta_label'];
   * ctaLink: HomeDocumentData['about_cta_link'];
   */
  readonly image: HomeDocumentData['about_image'];
};

const About: FC<AboutProps> = ({
  title,
  content,
  /*
   * ctaLabel,
   * ctaLink,
   */
  description,
  image,
}) => (
  <div className="overflow-hidden bg-white dark:bg-gray-900" id="about">
    <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gray-900/5 dark:bg-white/5 lg:block" />
      <div className="mt-8 items-center gap-16 lg:grid lg:grid-cols-2">
        <div className="relative lg:col-start-2 lg:row-start-1">
          <svg
            className="absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-zinc-900/20 dark:text-white/20"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
            />
          </svg>
          <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
            <figure>
              <Image
                className="aspect-[4/3] rounded-lg object-cover object-center shadow-lg lg:aspect-[3/4]"
                src={image.url ?? ''}
                alt={image.alt ?? ''}
                width={1152}
                height={
                  1152 *
                  (image.dimensions
                    ? image.dimensions.height / image.dimensions.width
                    : 1536)
                }
                style={{
                  objectPosition: 'center 20%',
                }}
              />
              <figcaption className="mt-3 flex text-sm text-gray-500 dark:text-gray-400">
                <Camera
                  className="h-5 w-5 flex-none text-gray-400 dark:text-gray-500"
                  aria-hidden="true"
                />
                <span className="ml-2">{image.alt}</span>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <div className="mx-auto max-w-prose lg:max-w-none">
            <h2 className="mb-6 mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              {title}
            </h2>
          </div>
          <div className="mx-auto max-w-prose text-base lg:max-w-none">
            <p className="text-lg text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </div>
          <div className="prose mx-auto mt-5 text-gray-500 prose-a:text-primary-blue dark:text-gray-400 lg:col-start-1 lg:row-start-1 lg:max-w-none">
            <PrismicRichText field={content} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AboutPage = async () => {
  const client = createClient();
  const { data } = await client.getSingle('home');

  return (
    <About
      title={data.about_title}
      description={data.about_description}
      content={data.about_content}
      image={data.about_image}
    />
  );
};

export default AboutPage;
