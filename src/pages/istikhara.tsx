import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import IstikharaMainAbout from "@/components/containers/istikhara/IstikharaMainAbout";

const Istikhara = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Istikhara" />
      <CmnBanner title="Istikhara" navigation="Istikhara" />
      <IstikharaMainAbout />
      <CallToActionThree />
    </Layout>
  );
};

export default Istikhara;
