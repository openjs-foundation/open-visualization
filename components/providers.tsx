'use client';

import { PrismicProvider } from '@prismicio/react';
import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import type { LinkProps } from 'next/link';
import { ThemeProvider } from 'next-themes';

const internalLinkComponent = (props: LinkProps) => <Link {...props} />;

type ProvidersProps = {
  children: ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => (
  <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange>
    <PrismicProvider internalLinkComponent={internalLinkComponent}>
      {children}
    </PrismicProvider>
  </ThemeProvider>
);

export default Providers;
