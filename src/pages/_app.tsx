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
        <meta
          name="keywords"
          content="istikhara dua, astrology horoscope, black magic, numerology, jobs, marriage, migration, love, stones, wazifa, kala jadu, carrier, life journey, Court Case, Health, healing, istikhara for health, istikhara for healing, istikhara for marriage, istikhara for love, istikhara for migration, istikhara for travel, istikhara for black magic, istikhara for cure black Magic, istikhara for choosing Field, Numerology for migration, numerology for travel, numerology for choosing the life partner, numerology for choosing the name  for new born baby, numerology for stones and colors, numerology for choosing the carrier, wazaif, solving the problems in your life, choosing the life partner"
        />
      </Head>
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...pageProps} />
      </Suspense>
    </>
  );
}
