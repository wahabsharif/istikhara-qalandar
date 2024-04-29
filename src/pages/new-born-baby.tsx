import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import NewBornBabyAbout from "@/components/containers/numerology/NewBornBabyAbout";

const OurStory = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="New Born Babies Names Selection" />
      <CmnBanner
        title="New Born Babies Names Selection"
        navigation="New Born Babies Names Selection"
      />
      <NewBornBabyAbout />
      <CallToActionThree />
    </Layout>
  );
};

export default OurStory;
