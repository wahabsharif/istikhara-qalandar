import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import GeminiZodiacDetails from "@/components/containers/zodiac/GeminiZodiacDetails";

const Gemini = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Gemini" />
      <CmnBanner title="Gemini" navigation="Gemini" />
      <GeminiZodiacDetails />
      <CallToActionThree />
    </Layout>
  );
};

export default Gemini;
