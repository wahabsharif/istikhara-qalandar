import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import CourtCaseIstikharaAbout from "@/components/containers/istikhara/CourtCaseIstikharaAbout";

const CourtCase = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Istikhara For Court Case" />
      <CmnBanner
        title="Istikhara For Court Case"
        navigation="Istikhara For Court Case"
      />
      <CourtCaseIstikharaAbout />
      <CallToActionThree />
    </Layout>
  );
};

export default CourtCase;
