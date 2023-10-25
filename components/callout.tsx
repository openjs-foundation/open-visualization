import Image from 'next/image';
import { PrismicRichText } from '@prismicio/react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import clsx from 'clsx';
import type { FilledLinkToWebField } from '@prismicio/types';
import type { HomeDocumentData } from '@/prismicio-types';
import type { FC } from 'react';

type CalloutProps = {
  readonly caption: HomeDocumentData['callout_caption'];
  readonly title: HomeDocumentData['callout_title'];
  readonly description: HomeDocumentData['callout_description'];
  readonly ctaLabel: HomeDocumentData['callout_cta_label'];
  readonly ctaLink: HomeDocumentData['callout_cta_link'];
  readonly image: HomeDocumentData['callout_image'];
};

const Callout: FC<CalloutProps> = ({
  caption,
  title,
  description,
  ctaLabel,
  ctaLink,
  image,
}) => (
  <div className="px-8">
    <div className="relative mx-auto my-8 mb-16 max-w-7xl rounded-lg border border-neutral-200 px-4 py-4 dark:border-neutral-700 sm:px-6 sm:py-16 lg:px-8">
      <div className="grid gap-8 rounded sm:grid-cols-2">
        <div className="order-2 sm:order-none">
          <p className="text-sm text-gray-500 dark:text-gray-400">{caption}</p>
          <h2 className="mb-6 mt-2 text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-2xl">
            {title}
          </h2>
          <div className="prose prose-sm mx-auto mt-5 text-gray-500 prose-a:text-primary-blue dark:text-gray-400 lg:col-start-1 lg:row-start-1 lg:max-w-none">
            <PrismicRichText field={description} />
          </div>
          {ctaLabel && ctaLink.link_type === 'Web' ? (
            <div className="mt-8">
              <Link
                href={(ctaLink as FilledLinkToWebField).url}
                className={clsx(
                  'inline-flex items-center gap-2 rounded-lg px-4 py-1.5 text-base font-semibold leading-7 ring-1 transition-colors',
                  'text-gray-900 ring-gray-900/10 hover:ring-gray-900/20 dark:text-white dark:ring-white/10'
                )}
              >
                {ctaLabel}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          ) : null}
        </div>
        <div className="h-full w-full">
          {image.url ? (
            <Image
              src={image.url}
              alt={image.alt ?? ''}
              width={image.dimensions.width}
              height={image.dimensions.height}
              className="h-full w-full rounded object-cover object-left"
            />
          ) : null}
        </div>
      </div>
    </div>
  </div>
);

export default Callout;
