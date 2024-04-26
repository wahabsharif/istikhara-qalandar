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
      url: "https://yourwebsite.com/",
      title: pageTitle
        ? `${pageTitle} - Your Reliable Guide: Life Journey, Numerology, Istikhara, Astrology & More!`
        : undefined,
      description:
        "Find direction and meaning in life! Explore numerology, istikhara, astrology, love, travel, career, and more. Discover your life partner, lucky stones, and travel stars. Get expert advice and guidance on your unique journey.",
      images: [
        {
          url: "https://yourwebsite.com/images/og-image.jpg",
          width: 800,
          height: 600,
          alt: "Og Image Alt",
        },
        {
          url: "https://yourwebsite.com/images/og-image-2.jpg",
          width: 900,
          height: 800,
          alt: "Og Image 2 Alt",
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
