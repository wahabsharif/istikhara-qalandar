import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import MarriageAbout from "@/components/containers/istikhara/MarriageIstikharaAbout";
import CallToActionThree from "@/components/containers/common/CallToActionThree";

const OurStory = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Istikhara For Marriage" />
      <CmnBanner
        title="Istikhara For Marriage"
        navigation="Istikhara For Marriage"
      />
      <MarriageAbout />
      <CallToActionThree />
    </Layout>
  );
};

export default OurStory;
