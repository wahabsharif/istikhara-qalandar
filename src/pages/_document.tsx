import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

function gtag() {
  window.dataLayer.push(arguments);
}

function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G2CPSLPZVP"
        ></script>
        <script>
          window.dataLayer || []; gtag('js', new Date()); gtag('config',
          'G-G2CPSLPZVP');
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G2CPSLPZVP"
        ></script>
        <script>
          window.dataLayer || []; gtag('js', new Date()); gtag('config',
          'G-G2CPSLPZVP');
        </script>
      </body>
    </Html>
  );
}

export default Document;
