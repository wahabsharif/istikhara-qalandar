import React from "react";
import Image from "next/image";
import HealingIstikhara from "public/images/istikhara-qalandar-istikhara-for-healing.webp";
import star from "public/images/star.webp";
import dotlarge from "public/images/agency/dot-large.webp";

const HealingIstikharaAbout = () => {
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="award__thumb dir-rtl">
              <Image
                src={HealingIstikhara}
                alt="istikhara-qalandar-istikhara-for-healing"
                className="unset fade-left"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="award__content section__content">
              <span className="sub-title">
                Istikhara For Healing{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Finding Comfort: <span>Istikhara for Healing</span>
              </h2>
              <div className="paragraph">
                <p>
                  Embark on a deep spiritual healing and guidance journey with
                  Istikhara. Istikhara provides a sacred path to seek divine aid
                  and clarity amid spiritual challenges. Our compassionate team
                  is here to assist you through every stage of the Istikhara
                  process. With Istikhara, you can forge a profound connection
                  with your inner self and discover serenity amidst life's
                  spiritual intricacies. Begin your Istikhara journey today and
                  witness the transformative influence of divine guidance in
                  surmounting spiritual hurdles. Let Istikhara illuminate your
                  way as you navigate your spiritual journey with clarity and
                  elegance.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={star}
        alt="istikhara-qalandar-istikhara-for-healing-star"
        className="star"
      />
      <Image
        src={star}
        alt="istikhara-qalandar-istikhara-for-healing-star"
        className="star-two"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-istikhara-for-healing-dots-large"
        className="dot"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-istikhara-for-healing-large"
        className="dot-two"
      />
    </section>
  );
};

export default HealingIstikharaAbout;
