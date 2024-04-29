import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import ChoosingFieldIstikharaAbout from "@/components/containers/choosing-field/ChoosingFieldIstikharaAbout";

const OurStory = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Istikhara For Choosing Field" />
      <CmnBanner
        title="Istikhara For Choosing Field"
        navigation="Istikhara For Field"
      />
      <ChoosingFieldIstikharaAbout />
      <CallToActionThree />
    </Layout>
  );
};

export default OurStory;
