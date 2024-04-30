import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import SagittariusZodiacDetails from "@/components/containers/zodiac/SagittariusZodiacDetails";

const Sagittarius = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Sagittarius" />
      <CmnBanner title="Sagittarius" navigation="Sagittarius" />
      <SagittariusZodiacDetails />
      <CallToActionThree />
    </Layout>
  );
};

export default Sagittarius;
