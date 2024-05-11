import React from "react";
import Image from "next/image";
import BlackMagicIstikhara from "public/images/istikhara-qalandar-istikhara-for-black-magic.webp";
import star from "public/images/star.webp";
import dotlarge from "public/images/agency/dot-large.webp";

const BlackMagicIstikharaAbout = () => {
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="award__thumb dir-rtl">
              <Image
                src={BlackMagicIstikhara}
                alt="istikhara-qalandar-istikhara-for-BlackMagic-life"
                className="unset fade-left"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="award__content section__content">
              <span className="sub-title">
                Istikhara For Black Magic Life
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Explore <span>Istikhara for Black Magic</span>
              </h2>
              <div className="paragraph">
                <p>
                  "Black Magic presents a unique method for seeking divine
                  guidance in your life choices. Our dedicated experts are here
                  to accompany you on this extraordinary journey, offering
                  support and guidance every step of the way. With Black Magic,
                  you'll embark on a path of spiritual exploration and insight,
                  uncovering hidden avenues to lasting fulfillment and
                  happiness. Let us help you navigate the intricacies of Black
                  Magic, guiding you towards the perfect solution meant for you.
                  Start your Black Magic journey today and experience the
                  enchantment unfold as you pursue your desired outcome!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={star}
        alt="istikhara-qalandar-istikhara-for-BlackMagic-life-star"
        className="star"
      />
      <Image
        src={star}
        alt="istikhara-qalandar-istikhara-for-BlackMagic-life-star"
        className="star-two"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-istikhara-for-BlackMagic-life-dots-large"
        className="dot"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-istikhara-for-BlackMagic-life-large"
        className="dot-two"
      />
    </section>
  );
};

export default BlackMagicIstikharaAbout;
