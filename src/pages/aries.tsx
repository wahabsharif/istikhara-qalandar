import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import AriesZodiacDetails from "@/components/containers/zodiac/AriesZodiacDetails";

const Aries = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Aries" />
      <CmnBanner title="Aries" navigation="Aries" />
      <AriesZodiacDetails />
      <CallToActionThree />
    </Layout>
  );
};

export default Aries;
