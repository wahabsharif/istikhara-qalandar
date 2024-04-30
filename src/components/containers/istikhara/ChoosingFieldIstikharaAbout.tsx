import React from "react";
import Image from "next/image";
import ChoosingFieldIstikhara from "public/images/istikhara-qalandar-istikhara-for-choosing-field.webp";
import star from "public/images/star.webp";
import dotlarge from "public/images/agency/dot-large.webp";

const ChoosingFieldIstikharaAbout = () => {
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="award__thumb dir-rtl">
              <Image
                src={ChoosingFieldIstikhara}
                alt="istikhara-qalandar-istikhara-for-choosing-field"
                className="unset fade-left"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="award__content section__content">
              <span className="sub-title">
                Istikhara For Choosing Field
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Discover Your Direction: Istikhara for{" "}
                <span>Selecting Your Field</span>
              </h2>
              <div className="paragraph">
                <p>
                  Embark on the thrilling journey of choosing the right career
                  path for your future with Istikhara. Istikhara offers a divine
                  avenue to seek clarity and guidance as you navigate through
                  various career options. Our supportive team is committed to
                  assisting you through the Istikhara process, providing
                  personalized insights tailored to your unique interests and
                  aspirations. With Istikhara, you can unveil hidden talents and
                  passions, enabling you to make informed decisions regarding
                  your educational and career pursuits. Start your Istikhara
                  journey today and unlock the potential to discover the perfect
                  career field that resonates with your strengths and ambitions.
                  Let Istikhara light the way as you pursue a fulfilling and
                  rewarding professional journey.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={star}
        alt="istikhara-qalandar-istikhara-for-choosing-field-star"
        className="star"
      />
      <Image
        src={star}
        alt="istikhara-qalandar-istikhara-for-choosing-field-star"
        className="star-two"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-istikhara-for-choosing-field-dots-large"
        className="dot"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-istikhara-for-choosing-field-large"
        className="dot-two"
      />
    </section>
  );
};

export default ChoosingFieldIstikharaAbout;
