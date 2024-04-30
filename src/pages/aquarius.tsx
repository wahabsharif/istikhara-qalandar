import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import AquariusZodiacDetails from "@/components/containers/zodiac/AquariusZodiacDetails";

const Aquarius = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Aquarius" />
      <CmnBanner title="Aquarius" navigation="Aquarius" />
      <AquariusZodiacDetails />
      <CallToActionThree />
    </Layout>
  );
};

export default Aquarius;
