import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ContactMain from "@/components/containers/ContactMain";
import SEO from "@/components/seo";

const Contact = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Contact" />
      <CmnBanner title="Contact Us" navigation="Contact Us" />
      <ContactMain />
    </Layout>
  );
};

export default Contact;
