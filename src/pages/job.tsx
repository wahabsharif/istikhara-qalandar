import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import JobIstikharaAbout from "@/components/containers/istikhara/JobIstikharaAbout";

const OurStory = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Istikhara For Job" />
      <CmnBanner title="Istikhara For Job" navigation="Istikhara For Job" />
      <JobIstikharaAbout />
      <CallToActionThree />
    </Layout>
  );
};

export default OurStory;
