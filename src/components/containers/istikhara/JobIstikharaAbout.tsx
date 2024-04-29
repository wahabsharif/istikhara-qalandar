import React from "react";
import Image from "next/image";
import JobIstikhara from "public/images/istikhara-qalandar-istikhara-for-your-dream-job.jpg";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";

const JobIstikharaAbout = () => {
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="award__thumb dir-rtl">
              <Image
                src={JobIstikhara}
                alt="istikhara-qalandar-istikhara-for-your-dream-job"
                className="unset fade-left"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="award__content section__content">
              <span className="sub-title">
                Istikhara For Dream Job
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Discover Your <span>Ideal Career</span>
              </h2>
              <div className="paragraph">
                <p>
                  Explore how Istikhara can assist you in discovering the ideal
                  job. Istikhara is a unique practice that can steer you towards
                  the appropriate career trajectory. Our specialists are
                  available to assist you in comprehending and utilizing
                  Istikhara to identify job prospects that align with your
                  preferences. Initiate your Istikhara journey today and unlock
                  the gateway to a brighter future!{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={star}
        alt="istikhara-qalandar-istikhara-for-your-dream-job-star"
        className="star"
      />
      <Image
        src={star}
        alt="istikhara-qalandar-istikhara-for-your-dream-job-star"
        className="star-two"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-istikhara-for-your-dream-job-dots-large"
        className="dot"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-istikhara-for-your-dream-job-large"
        className="dot-two"
      />
    </section>
  );
};

export default JobIstikharaAbout;
