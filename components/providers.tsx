'use client';

import { PrismicProvider } from '@prismicio/react';
import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import type { LinkProps } from 'next/link';

const internalLinkComponent = (props: LinkProps) => <Link {...props} />;

type ProvidersProps = {
  children: ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => (
  <PrismicProvider internalLinkComponent={internalLinkComponent}>
    {children}
  </PrismicProvider>
);

export default Providers;
