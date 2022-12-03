import type { FC, ReactNode } from 'react';
import '../styles/globals.css';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <head />
    <body>{children}</body>
  </html>
);

export default RootLayout;
