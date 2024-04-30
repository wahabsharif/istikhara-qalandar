import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import PiscesZodiacDetails from "@/components/containers/zodiac/PiscesZodiacDetails";

const Pisces = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Pisces" />
      <CmnBanner title="Pisces" navigation="Pisces" />
      <PiscesZodiacDetails />
      <CallToActionThree />
    </Layout>
  );
};

export default Pisces;
