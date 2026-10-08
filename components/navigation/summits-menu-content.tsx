import summitContent from '@/content/summits.json';
import Image from 'next/image';
import Link from 'next/link';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';

export default function SummitsMenuContent() {
  return (
    <div className="w-[640px] max-w-[calc(100vw-2rem)]">
      <div className="p-4 border-b">
        <NavigationMenuLink asChild>
          <Link
            href="/summits"
            className="block rounded-md p-2 hover:bg-accent focus-visible:bg-accent"
          >
            <span className="font-semibold">Explore all summits →</span>
            <p className="mt-1 text-sm text-muted-foreground">
              Meet the community at our gatherings around the world.
            </p>
          </Link>
        </NavigationMenuLink>
      </div>
      <ul className="grid grid-cols-2 gap-2 p-4">
        {summitContent.summits.map((summit) => (
          <li key={summit.url}>
            <NavigationMenuLink asChild>
              <Link
                href={summit.url}
                prefetch={false}
                className="block h-full rounded-lg p-2 hover:bg-accent focus-visible:bg-accent"
              >
                <div className="relative aspect-[2/1] overflow-hidden rounded-md bg-muted mb-3">
                  <Image
                    src={summit.image}
                    alt={summit.imageAlt}
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-base font-semibold">
                    {summit.title}
                  </span>
                  {summit.status && (
                    <span className="rounded-full bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200 px-2 py-1 text-xs">
                      {summit.status}
                    </span>
                  )}
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {summit.date}
                  {summit.sponsor && <> · Sponsored by {summit.sponsor}</>}
                </p>
              </Link>
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
