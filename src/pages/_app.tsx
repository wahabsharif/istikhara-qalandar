import React, { Suspense } from "react";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Head from "next/head"; // Import the Head component

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// font awesome 6
import "public/icons/font-awesome/css/all.css";

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
        <DefaultSeo
          title="Istikhara Qalandar - Your Reliable Guide: Life Journey, Numerology, Istikhara, Astrology & More!"
          description="Find direction and meaning in life! Explore numerology, istikhara, astrology, love, travel, career, and more. Discover your life partner, lucky stones, and travel stars. Get expert advice and guidance on your unique journey."
          openGraph={{
            type: "website",
            locale: "en_US",
            url: "http://istikharaqalandar.com/",
            site_name:
              "Istikhara Qalandar - Your Reliable Guide: Life Journey, Numerology, Istikhara, Astrology & More!",
          }}
          twitter={{
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image",
          }}
        />
        <Component {...pageProps} />
      </Suspense>
    </>
  );
}
