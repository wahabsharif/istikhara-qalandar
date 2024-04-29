import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import HealthIstikharaAbout from "@/components/containers/istikhara/HealthIstikharaAbout";

const Health = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Istikhara For Health" />
      <CmnBanner
        title="Istikhara For Health"
        navigation="Istikhara For Health"
      />
      <HealthIstikharaAbout />
      <CallToActionThree />
    </Layout>
  );
};

export default Health;
