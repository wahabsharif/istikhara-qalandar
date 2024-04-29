import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import StonesAndColorsAbout from "@/components/containers/stone-and-colors/StonesAndColorsAbout";

const OurStory = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Useful Stones and Colors In Your Life" />
      <CmnBanner
        title="Useful Stones and Colors In Your Life"
        navigation="Useful Stones and Colors In Your Life"
      />
      <StonesAndColorsAbout />
      <CallToActionThree />
    </Layout>
  );
};

export default OurStory;
