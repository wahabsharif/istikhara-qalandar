import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import CureBlackMagicIstikharaAbout from "@/components/containers/istikhara/CureBlackMagicIstikharaAbout";

const CureBlackMagic = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Istikhara For Cure Black Magic" />
      <CmnBanner
        title="Istikhara For Cure Black Magic"
        navigation="Istikhara For Cure Black Magic"
      />
      <CureBlackMagicIstikharaAbout />
      <CallToActionThree />
    </Layout>
  );
};

export default CureBlackMagic;
