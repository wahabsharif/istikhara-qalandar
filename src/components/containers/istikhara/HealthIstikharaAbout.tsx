import React from "react";
import Image from "next/image";
import HealthIstikhara from "public/images/istikhara-qalandar-istikhara-for-health.webp";
import star from "public/images/star.webp";
import dotlarge from "public/images/agency/dot-large.webp";

const HealthIstikharaAbout = () => {
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="award__thumb dir-rtl">
              <Image
                src={HealthIstikhara}
                alt="istikhara-qalandar-istikhara-for-health"
                className="unset fade-left"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="award__content section__content">
              <span className="sub-title">
                Istikhara For Health <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Exploring Well-being: <span>Istikhara for Health</span>
              </h2>
              <div className="paragraph">
                <p>
                  Embark on a path towards enhanced health and well-being
                  through Istikhara practice. Istikhara provides a distinctive
                  method to seek divine guidance and clarity amidst health
                  obstacles. Our caring team of experts is dedicated to aiding
                  you throughout the Istikhara journey. With Istikhara, you can
                  access spiritual insights to comprehend your health journey
                  and make informed choices. Begin your Istikhara voyage today
                  to unleash the potential for improved wellness and vitality.
                  Let Istikhara illuminate your way as you traverse towards
                  better health and happiness.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={star}
        alt="istikhara-qalandar-istikhara-for-health-star"
        className="star"
      />
      <Image
        src={star}
        alt="istikhara-qalandar-istikhara-for-health-star"
        className="star-two"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-istikhara-for-health-dots-large"
        className="dot"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-istikhara-for-health-large"
        className="dot-two"
      />
    </section>
  );
};

export default HealthIstikharaAbout;
