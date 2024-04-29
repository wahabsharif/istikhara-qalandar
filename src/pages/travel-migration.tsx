import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import TravelMigrationIstikharaAbout from "@/components/containers/travel-migration/TravelMigrationIstikharaAbout";

const OurStory = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Best Time For Travel and Migration" />
      <CmnBanner
        title="Best Time For Travel and Migration"
        navigation="Best Time For Travel and Migration"
      />
      <TravelMigrationIstikharaAbout />
      <CallToActionThree />
    </Layout>
  );
};

export default OurStory;
