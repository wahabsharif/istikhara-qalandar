import React from "react";
import { NextSeo } from "next-seo";

interface SEOProps {
  pageTitle: string;
}

const SEO: React.FC<SEOProps> = ({ pageTitle }) => (
  <NextSeo
    title={pageTitle ? `${pageTitle} - Unveiling Your Life Path` : undefined}
    description="Find direction in life! Explore numerology, istikhara, astrology, love, career & more. Discover your path & get expert guidance."
    openGraph={{
      type: "website",
      url: "http://istikharaqalandar.com/",
      title: pageTitle ? `${pageTitle} - Unveiling Your Life Path` : undefined,
      description:
        "Find direction in life! Explore numerology, istikhara, astrology, love, career & more. Discover your path & get expert guidance.",
      images: [
        {
          url: "https://www.istikharaqalandar.com/web-demos/istakhara-qalandar-home-banner-demo.webp",
          width: 800,
          height: 600,
          alt: "Istikhara Qalandar Home Image",
        },
        {
          url: "https://www.istikharaqalandar.com/web-demos/istakhara-qalandar-home-banner-demo.webp",
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
    // Add hreflang attributes here
    additionalMetaTags={[
      {
        name: "hreflang",
        content: "en",
      },
      {
        name: "hreflang",
        content: "ar",
      },
      {
        name: "hreflang",
        content: "ur",
      },
      // Add more hreflang attributes as needed
    ]}
  />
);

export default SEO;
