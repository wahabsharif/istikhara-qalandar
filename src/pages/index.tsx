import AboutIstikhara from "@/components/containers/home/AboutIstikhara";
import HomeBanner from "@/components/containers/home/HomeBanner";
import IstikharaSection from "@/components/containers/home/IstikharaSection";
import NumerologySection from "@/components/containers/home/NumerologySection";
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
    </Layout>
  );
};

export default Home;
