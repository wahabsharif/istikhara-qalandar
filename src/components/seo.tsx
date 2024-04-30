import React from "react";
import { NextSeo } from "next-seo";

interface SEOProps {
  pageTitle: string;
}

const SEO: React.FC<SEOProps> = ({ pageTitle }) => (
  <NextSeo
    title={
      pageTitle
        ? `${pageTitle} - Your Reliable Guide: Life Journey, Numerology, Istikhara, Astrology & More!`
        : undefined
    }
    description="Find direction and meaning in life! Explore numerology, istikhara, astrology, love, travel, career, and more. Discover your life partner, lucky stones, and travel stars. Get expert advice and guidance on your unique journey."
    openGraph={{
      type: "website",
      url: "http://istikharaqalandar.com/",
      title: pageTitle
        ? `${pageTitle} - Your Reliable Guide: Life Journey, Numerology, Istikhara, Astrology & More!`
        : undefined,
      description:
        "Find direction and meaning in life! Explore numerology, istikhara, astrology, love, travel, career, and more. Discover your life partner, lucky stones, and travel stars. Get expert advice and guidance on your unique journey.",
      images: [
        {
          url: "public/web-demos/istakhara-qalandar-home-banner-demo.webp",
          width: 800,
          height: 600,
          alt: "Istikhara Qalandar Home Image",
        },
        {
          url: "https://raw.githubusercontent.com/wahabsharif/istikhara-qalandar/main/public/web-demos/istakhara-qalandar-home-banner-demo.webp",
          width: 900,
          height: 800,
          alt: "Istikhara Qalandar Home Image",
        },
      ],
    }}
    twitter={{
      handle: "@handle",
      site: "@site",
      cardType: "summary_large_image",
    }}
  />
);

export default SEO;
