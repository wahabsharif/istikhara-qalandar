import React from "react";
import Image from "next/image";
import PerfectLifePartner from "public/images/istikhara-qalandar-numerology-for-choosing-the-life-partner.avif";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";

const PerfectLifePartnerAbout = () => {
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="award__content section__content">
            <h2 className="title title-anim">
              Perfect Matches For Your <span>Marriage Life</span>
            </h2>
            <span className="sub-title">
              choosing The Life Partner
              <i className="fa-solid fa-arrow-right"></i>
            </span>
            <div className="paragraph">
              <p>
                Consider numerology as a unique instrument that allows us to
                glimpse the hidden connections among individuals. In the realm
                of marriage, it transcends mere surface compatibility or shared
                hobbies. It delves into the profound energies and resonances
                exchanged between two people. Visualize each individual's birth
                date and full name as a distinct code brimming with insights
                into their essence and relational dynamics. Numerology aids us
                in deciphering these codes, unraveling the intricate tapestry of
                a relationship's underlying dynamics.{" "}
              </p>
            </div>
          </div>
          <div className="align-items-center">
            <div className="award__thumb dir-rtl">
              <Image
                src={PerfectLifePartner}
                alt="istikhara-qalandar-numerology-for-choosing-the-life-partner"
                className="unset fade-left"
              />
            </div>
          </div>
          <div className="">
            <div className="award__content section__content">
              <div className="paragraph">
                <p>
                  For instance, suppose you're contemplating marriage with
                  someone. Numerologists can analyze both your birth dates and
                  full names to unveil patterns and connections that may not be
                  immediately apparent. They examine factors such as the
                  numerical values associated with each letter in your names and
                  the total of your birth dates. These numbers carry vibrations
                  and energies that shape your interactions and guide you
                  through the challenges and joys of married life. Picture it as
                  piecing together a puzzle. Numerology illuminates how well
                  your energies harmonize, where you complement each other, and
                  areas where understanding may require nurturing. However, it's
                  not solely about the couple themselves. Numerologists also
                  consider the influence of the parents' names, adding another
                  dimension to understanding family dynamics and their impact on
                  the relationship.{" "}
                </p>
                <p>
                  When discussing finding the ideal marriage match through
                  numerology, we're referring to a comprehensive approach that
                  goes beyond superficial characteristics. It involves grasping
                  the profound connections and energies that unite two
                  individuals. Through embracing numerology's wisdom, couples
                  can embark on their marital journey with a deeper
                  comprehension of each other, fostering the potential for a
                  genuinely harmonious and rewarding partnership.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={star}
        alt="istikhara-qalandar-numerology-for-choosing-the-life-partner-star"
        className="star"
      />
      <Image
        src={star}
        alt="istikhara-qalandar-numerology-for-choosing-the-life-partner-star"
        className="star-two"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-numerology-for-choosing-the-life-partner-dots-large"
        className="dot"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-numerology-for-choosing-the-life-partner-large"
        className="dot-two"
      />
    </section>
  );
};

export default PerfectLifePartnerAbout;
