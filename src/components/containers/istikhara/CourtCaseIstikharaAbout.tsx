import React from "react";
import Image from "next/image";
import CourtCaseIstikhara from "public/images/istikhara-qalandar-istikhara-for-court-case.webp";
import star from "public/images/star.webp";
import dotlarge from "public/images/agency/dot-large.webp";

const CourtCaseIstikharaAbout = () => {
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="award__thumb dir-rtl">
              <Image
                src={CourtCaseIstikhara}
                alt="istikhara-qalandar-istikhara-for-court-case"
                className="unset fade-left"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="award__content section__content">
              <span className="sub-title">
                Istikhara For Court Case{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Guidance Sought: <span>Istikhara for Legal Matters</span>
              </h2>
              <div className="paragraph">
                <p>
                  Discover the potency of Istikhara in maneuvering through legal
                  hurdles and court proceedings. Istikhara presents a
                  distinctive approach to seeking divine aid and understanding
                  amidst legal ambiguity.{" "}
                </p>
                <p>
                  Our committed specialists are available to steer you through
                  the Istikhara procedure, furnishing you with insights and
                  assistance as you traverse the intricacies of the legal realm.
                  Through Istikhara, you can attain a deeper comprehension of
                  your circumstances and chart a course forward with assurance.{" "}
                </p>
                <p>
                  Embark on your Istikhara expedition today, uncovering the
                  resilience and direction essential to navigate your court case
                  with poise and clarity.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={star}
        alt="istikhara-qalandar-istikhara-for-court-case-star"
        className="star"
      />
      <Image
        src={star}
        alt="istikhara-qalandar-istikhara-for-court-case-star"
        className="star-two"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-istikhara-for-court-case-dots-large"
        className="dot"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-istikhara-for-court-case-large"
        className="dot-two"
      />
    </section>
  );
};

export default CourtCaseIstikharaAbout;
