import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
import Agency from "@/components/containers/home/Agency";
import TeamMembers from "@/components/containers/TeamMembers";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import AboutSponsor from "@/components/containers/home-three/AboutSponsor";
import AboutCta from "@/components/containers/home-two/AboutCta";
import SEO from "@/components/seo";
import Introduction from "@/components/containers/about/Intro";

const About = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="About Us" />
      <CmnBanner title="About Us" navigation="About Us" />
      <Introduction />
      <HomeTwoModal />
      <Agency />
      <TeamMembers />
      <HomeTestimonial />
      <AboutSponsor />
      <AboutCta />
    </Layout>
  );
};

export default About;
