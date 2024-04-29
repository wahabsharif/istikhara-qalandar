import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import NumerologyMainAbout from "@/components/containers/numerology/NumerologyMainAbout";

const Numerology = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Numerology" />
      <CmnBanner title="Numerology" navigation="Numerology" />
      <NumerologyMainAbout />
      <CallToActionThree />
    </Layout>
  );
};

export default Numerology;
