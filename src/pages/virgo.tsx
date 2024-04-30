import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import VirgoZodiacDetails from "@/components/containers/zodiac/VirgoZodiacDetails";

const Virgo = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Virgo" />
      <CmnBanner title="Virgo" navigation="Virgo" />
      <VirgoZodiacDetails />
      <CallToActionThree />
    </Layout>
  );
};

export default Virgo;
