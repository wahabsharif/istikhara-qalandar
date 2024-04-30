import React, { useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import WazaifEng from "@/components/containers/wazaif/WazaifEn";
import WazaifUr from "@/components/containers/wazaif/WazaifUr";
import WazaifAr from "@/components/containers/wazaif/WazaifAr";
import CallToActionThree from "@/components/containers/common/CallToActionThree";
import EnglishLangIcon from "public/images/istikhara-qalandar-english-language-icon.webp";
import UrduLangIcon from "public/images/istikhara-qalandar-urdu-language-icon.webp";
import ArabicLangIcon from "public/images/istikhara-qalandar-arabic-language-icon.webp";

const Wazaif = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Initial language

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  const renderWazaifContent = () => {
    switch (selectedLanguage) {
      case "en":
        return <WazaifEng />;
      case "ur":
        return <WazaifUr />;
      case "ar":
        return <WazaifAr />;
      default:
        return <WazaifEng />; // Handle potential default behavior
    }
  };

  return (
    <Layout header={2} footer={1} video={0}>
      <CmnBanner title="Wazaif" navigation="Wazaif" />
      <div className="lang-cont">
        <h3>Select Your Language</h3>
        {/* Language Button Group */}
        <div className="language-buttons">
          <button
            type="button"
            onClick={() => handleLanguageChange("en")}
            className={selectedLanguage === "en" ? "active" : ""}
          >
            <Image
              src={EnglishLangIcon}
              alt="English Language"
              width={50}
              height={50}
            />
          </button>
          <button
            type="button"
            onClick={() => handleLanguageChange("ur")}
            className={selectedLanguage === "ur" ? "active" : ""}
          >
            <Image
              src={UrduLangIcon}
              alt="Urdu Language"
              width={50}
              height={50}
            />
          </button>
          <button
            type="button"
            onClick={() => handleLanguageChange("ar")}
            className={selectedLanguage === "ar" ? "active" : ""}
          >
            <Image
              src={ArabicLangIcon}
              alt="Arabic Language"
              width={50}
              height={50}
            />
          </button>
        </div>

        {/* Display Content based on Selected Language */}
      </div>{" "}
      {renderWazaifContent()}
      <CallToActionThree />
    </Layout>
  );
};

export default Wazaif;
