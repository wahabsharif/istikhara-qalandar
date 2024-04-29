import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import MigrationIstikharaAbout from "@/components/containers/migration/MigrationIstikharaAbout";

const OurStory = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Istikhara For Migration" />
      <CmnBanner
        title="Istikhara For Migration"
        navigation="Istikhara For Migration"
      />
      <MigrationIstikharaAbout />
      <CallToActionThree />
    </Layout>
  );
};

export default OurStory;
