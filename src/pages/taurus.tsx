import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import TaurusZodiacDetails from "@/components/containers/zodiac/TaurusZodiacDetails";

const Taurus = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Taurus" />
      <CmnBanner title="Taurus" navigation="Taurus" />
      <TaurusZodiacDetails />
      <CallToActionThree />
    </Layout>
  );
};

export default Taurus;
