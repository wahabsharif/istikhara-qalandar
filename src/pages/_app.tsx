import React, { Suspense } from "react";
import type { AppProps } from "next/app";
import Head from "next/head"; // Import the Head component

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// font awesome 6
import "public/icons/font-awesome/css/all.min.css";

// custom icons
import "public/icons/glyphter/css/istikhara-qalandar.css";

// main scss
import "@/styles/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...pageProps} />
      </Suspense>
    </>
  );
}
