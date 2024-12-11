import Link from 'next/link';
import Image from 'next/image';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import React from 'react';
import type { NewsItem } from '@/content/news.json';
import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';
import ArrowIcon from '../icons/arrow-icon';

const NavigationMenuItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & {
    readonly image?: string;
    readonly date?: string;
  }
>(({ className, title, children, image, date, ...props }, ref) => (
  <NavigationMenuLink asChild>
    <a
      ref={ref}
      className={cn(
        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
        className
      )}
      {...props}
    >
      <div className="flex gap-2">
        {image && (
          <Image
            src={image}
            alt=""
            width={100}
            height={100}
            className="h-16 w-30 rounded object-cover"
          />
        )}
        <div className="flex flex-col gap-2">
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
          {date && <p className="text-xs text-muted-foreground">{date}</p>}
        </div>
      </div>
    </a>
  </NavigationMenuLink>
));
NavigationMenuItem.displayName = 'NavigationMenuItem';

type NewsMenuContentProps = {
  readonly news?: NewsItem[];
};

const NewsMenuContent: React.FC<NewsMenuContentProps> = ({ news }) => {
  return (
    <div>
      <div className="p-4 border-b">
        <NavigationMenuItem title="View all news →" href="/news">
          View the full history of OpenVis news.
        </NavigationMenuItem>
      </div>

      <ul className="grid w-[400px] gap-3 p-4">
        {news?.slice(0, 3).map((item) => (
          <li key={item.title}>
            <NavigationMenuItem
              title={item.title}
              href={item.url}
              image={item.image}
              date={item.date}
            >
              {item.publication}
            </NavigationMenuItem>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsMenuContent;
