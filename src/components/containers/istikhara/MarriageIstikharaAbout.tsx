import React from "react";
import Image from "next/image";
import MarriageIstikhara from "public/images/istikhara-qalandar-istikhara-for-marriage-life.webp";
import star from "public/images/star.webp";
import dotlarge from "public/images/agency/dot-large.webp";

const MarriageIstikharaAbout = () => {
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="award__thumb dir-rtl">
              <Image
                src={MarriageIstikhara}
                alt="istikhara-qalandar-istikhara-for-marriage-life"
                className="unset fade-left"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="award__content section__content">
              <span className="sub-title">
                Istikhara For Marriage Life
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Unveiling Joy: Explore <span>Istikhara for Marriage</span>
              </h2>
              <div className="paragraph">
                <p>
                  <b>
                    Begin an intriguing voyage toward discovering your life
                    partner with the mystical ritual of Istikhara.
                  </b>
                </p>
                <p>
                  Istikhara presents a distinctive approach to seeking divine
                  direction for your matrimonial choices. Our committed
                  specialists are here to join you on this extraordinary
                  expedition, providing guidance and assistance at every turn.
                  With Istikhara, you'll embark on a journey of spiritual
                  discovery and insight, revealing concealed avenues to enduring
                  joy and contentment in marriage. Allow us to assist you in
                  navigating the complexities of Istikhara, leading you toward
                  the ideal partner meant for you. Begin your Istikhara journey
                  today and witness the enchantment unfurl as you pursue your
                  ideal match!{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={star}
        alt="istikhara-qalandar-istikhara-for-marriage-life-star"
        className="star"
      />
      <Image
        src={star}
        alt="istikhara-qalandar-istikhara-for-marriage-life-star"
        className="star-two"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-istikhara-for-marriage-life-dots-large"
        className="dot"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-istikhara-for-marriage-life-large"
        className="dot-two"
      />
    </section>
  );
};

export default MarriageIstikharaAbout;
