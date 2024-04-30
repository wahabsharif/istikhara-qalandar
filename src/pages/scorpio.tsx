import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import ScorpioZodiacDetails from "@/components/containers/zodiac/ScorpioZodiacDetails";

const Scorpio = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Scorpio" />
      <CmnBanner title="Scorpio" navigation="Scorpio" />
      <ScorpioZodiacDetails />
      <CallToActionThree />
    </Layout>
  );
};

export default Scorpio;
