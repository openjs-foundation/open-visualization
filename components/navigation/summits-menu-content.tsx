import Link from 'next/link';
import Image from 'next/image';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import React from 'react';
import { HomeDocumentDataSummitsItem } from '@/prismicio-types';

const NavigationMenuItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { readonly image?: string }
>(({ className, title, children, image, ...props }, ref) => (
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
            width={150}
            height={100}
            className="h-16 w-20 rounded object-cover"
          />
        )}
        <div className="flex flex-col gap-2">
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </div>
      </div>
    </a>
  </NavigationMenuLink>
));
NavigationMenuItem.displayName = 'NavigationMenuItem';

type SummitsMenuContentProps = {
  readonly summits?: HomeDocumentDataSummitsItem[];
};

const SummitsMenuContent: React.FC<SummitsMenuContentProps> = ({ summits }) => {
  return (
    <div>
      <ul className="grid w-[400px] gap-3 p-4">
        {summits?.slice(0, 3).map((item) => (
          <li key={item.summit_name}>
            <NavigationMenuItem
              title={item.summit_name ?? ''}
              href={'/summits'}
              image={item.summit_image.url}
            >
              {item.summit_description} • {item.summit_dates}
            </NavigationMenuItem>
          </li>
        ))}
      </ul>
      <div className="p-4 pt-2 border-t">
        <Link
          href="/summits"
          className="inline-flex items-center text-primary hover:underline"
        >
          View all summits →
        </Link>
      </div>
    </div>
  );
};

export default SummitsMenuContent;
