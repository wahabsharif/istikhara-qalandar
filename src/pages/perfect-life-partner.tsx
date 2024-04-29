import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import PerfectLifePartnerAbout from "@/components/containers/numerology/PerfectLifePartnerAbout";

const PerfectLifePartner = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Best Time For Marriage" />
      <CmnBanner
        title="Best Time For Marriage"
        navigation="Best Time For Marriage"
      />
      <PerfectLifePartnerAbout />
      <CallToActionThree />
    </Layout>
  );
};

export default PerfectLifePartner;
