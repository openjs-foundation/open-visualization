import { AppProgressBar } from 'next-nprogress-bar';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <AppProgressBar options={{ showSpinner: false }} />
    </>
  );
}
