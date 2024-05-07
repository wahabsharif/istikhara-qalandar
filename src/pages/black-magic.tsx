import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import BlackMagicAbout from "@/components/containers/istikhara/BlackMagicIstikharaAbout";
import CallToActionThree from "@/components/containers/common/CallToActionThree";

const BlackMagic = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Istikhara For Black Magic" />
      <CmnBanner
        title="Istikhara For Black Magic"
        navigation="Istikhara For Black Magic"
      />
      <BlackMagicAbout />
      <CallToActionThree />
    </Layout>
  );
};

export default BlackMagic;
