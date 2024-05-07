import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SEO from "@/components/seo";
import LoveMagicSpellAbout from "@/components/containers/istikhara/LoveMagicSpellIstikharaAbout";
import CallToActionThree from "@/components/containers/common/CallToActionThree";

const LoveMagicSpell = () => {
  return (
    <Layout header={2} footer={1}>
      <SEO pageTitle="Istikhara For Love Magic Spell" />
      <CmnBanner
        title="Istikhara For Love Magic Spell"
        navigation="Istikhara For Love Magic Spell"
      />
      <LoveMagicSpellAbout />
      <CallToActionThree />
    </Layout>
  );
};

export default LoveMagicSpell;
