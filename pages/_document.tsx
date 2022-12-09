import { Html, Head, Main, NextScript } from 'next/document';
import type { FC } from 'react';

const CustomDocument: FC = () => (
  <Html lang="en">
    <Head />
    <body className="bg-white dark:bg-gray-900">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default CustomDocument;
