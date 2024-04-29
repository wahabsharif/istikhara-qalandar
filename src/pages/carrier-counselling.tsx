import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import CarrierCounsellingAbout from "@/components/containers/numerology/CarrierCounsellingAbout";

const CareerCounselling = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Choosing The Career In Your Life" />
      <CmnBanner
        title="Choosing The Career In Your Life"
        navigation="Choosing The Career In Your Life"
      />
      <CarrierCounsellingAbout />
      <CallToActionThree />
    </Layout>
  );
};

export default CareerCounselling;
