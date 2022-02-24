import type { AppProps } from "next/app";
import Script from "next/script";

import "src/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/adbbfc7ad1.js"
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
