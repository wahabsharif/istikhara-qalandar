import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import TravelMigrationAbout from "@/components/containers/numerology/TravelMigrationAbout";

const TravelMigration = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Best Time For Travel and Migration" />
      <CmnBanner
        title="Best Time For Travel and Migration"
        navigation="Best Time For Travel and Migration"
      />
      <TravelMigrationAbout />
      <CallToActionThree />
    </Layout>
  );
};

export default TravelMigration;
