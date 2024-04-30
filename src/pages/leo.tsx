import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import LeoZodiacDetails from "@/components/containers/zodiac/LeoZodiacDetails";

const Leo = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Leo" />
      <CmnBanner title="Leo" navigation="Leo" />
      <LeoZodiacDetails />
      <CallToActionThree />
    </Layout>
  );
};

export default Leo;
