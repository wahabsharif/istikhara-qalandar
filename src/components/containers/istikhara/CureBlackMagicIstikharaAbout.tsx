import React from "react";
import Image from "next/image";
import CureBlackMagicIstikhara from "public/images/istikhara-qalandar-istikhara-for-cure-black-magic-life.webp";
import star from "public/images/star.webp";
import dotlarge from "public/images/agency/dot-large.webp";

const CureBlackMagicIstikharaAbout = () => {
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="award__thumb dir-rtl">
              <Image
                src={CureBlackMagicIstikhara}
                alt="istikhara-qalandar-istikhara-for-cure-black-magic-life"
                className="unset fade-left"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="award__content section__content">
              <span className="sub-title">
                Istikhara For Cure Black Magic Life
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Explore <span>Istikhara for Cure Black Magic</span>
              </h2>
              <div className="paragraph">
                <p>
                  "Cure Black Magic offers a unique approach to seeking divine
                  guidance for your life's challenges. Our dedicated specialists
                  are here to support you on this extraordinary journey,
                  providing assistance and insight every step of the way. With
                  Cure Black Magic, you'll embark on a path of spiritual
                  discovery and healing, uncovering hidden avenues to lasting
                  peace and well-being. Let us guide you through the
                  complexities of Cure Black Magic, leading you towards the
                  solutions meant for you. Begin your Cure Black Magic journey
                  today and witness the enchantment unfold as you find
                  resolution and restoration."{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={star}
        alt="istikhara-qalandar-istikhara-for-cure-black-magic-life-star"
        className="star"
      />
      <Image
        src={star}
        alt="istikhara-qalandar-istikhara-for-cure-black-magic-life-star"
        className="star-two"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-istikhara-for-cure-black-magic-life-dots-large"
        className="dot"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-istikhara-for-cure-black-magic-life-large"
        className="dot-two"
      />
    </section>
  );
};

export default CureBlackMagicIstikharaAbout;
