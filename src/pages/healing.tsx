import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import HealingIstikharaAbout from "@/components/containers/istikhara/HealingIstikharaAbout";

const Healing = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Istikhara For Healing" />
      <CmnBanner
        title="Istikhara For Healing"
        navigation="Istikhara For Healing"
      />
      <HealingIstikharaAbout />
      <CallToActionThree />
    </Layout>
  );
};

export default Healing;
