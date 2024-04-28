import CallToAction from "@/components/containers/common/CallToAction";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import WhyUs from "@/components/containers/common/WhyUs";
import AboutIstikhara from "@/components/containers/home/AboutIstikhara";
import HomeBanner from "@/components/containers/home/HomeBanner";
import IstikharaSection from "@/components/containers/home/IstikharaSection";
import NumerologySection from "@/components/containers/home/NumerologySection";
import ZodiacSign from "@/components/containers/home/ZodiacSign";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo";

const Home = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Istikhara Qalandar" />
      <HomeBanner />
      <IstikharaSection />
      <AboutIstikhara />
      <NumerologySection />
      <ZodiacSign />
      <CallToAction />
      <WhyUs />
      <CallToActionThree />
    </Layout>
  );
};

export default Home;
