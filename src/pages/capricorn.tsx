import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import CapricornZodiacDetails from "@/components/containers/zodiac/CapricornZodiacDetails";

const Capricorn = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Capricorn" />
      <CmnBanner title="Capricorn" navigation="Capricorn" />
      <CapricornZodiacDetails />
      <CallToActionThree />
    </Layout>
  );
};

export default Capricorn;
