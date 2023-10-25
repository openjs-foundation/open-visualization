'use client';

import { PrismicProvider } from '@prismicio/react';
import Link from 'next/link';
import { ThemeProvider } from 'next-themes';
import type { FC, ReactNode } from 'react';
import type { LinkProps } from 'next/link';

const internalLinkComponent = (props: LinkProps) => <Link {...props} />;

type ProvidersProps = {
  readonly children: ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    disableTransitionOnChange
  >
    <PrismicProvider internalLinkComponent={internalLinkComponent}>
      {children}
    </PrismicProvider>
  </ThemeProvider>
);

export default Providers;
