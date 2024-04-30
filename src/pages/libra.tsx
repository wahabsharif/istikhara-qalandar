import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import LibraZodiacDetails from "@/components/containers/zodiac/LibraZodiacDetails";

const Libra = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Libra" />
      <CmnBanner title="Libra" navigation="Libra" />
      <LibraZodiacDetails />
      <CallToActionThree />
    </Layout>
  );
};

export default Libra;
