import AboutDetails from "@/components/containers/about/AboutDetails";
import Introduction from "@/components/containers/about/Intro";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";

const About = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="About Us" />
      <CmnBanner title="About Us" navigation="About Us" />
      <Introduction />
      <AboutDetails />
      <CallToActionThree />
    </Layout>
  );
};

export default About;
