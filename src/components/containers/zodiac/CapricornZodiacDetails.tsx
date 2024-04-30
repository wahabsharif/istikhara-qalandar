import React from "react";
import Image from "next/image";
import CapricornZodiacImage from "public/images/zodiac/istikhara-qalandar-zodiac-capricorn.png";

const CapricornZodiacDetails = () => {
  return (
    <section className="section mission-s fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-5 col-xxl-5">
                  <div className="section__header text-center text-lg-start mb-0">
                    <span className="sub-title">
                      Capricorn
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="mission-s__single fade-top">
              <Image
                src={CapricornZodiacImage}
                alt="istikhara-qalandar-zodiac-capricorn"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Capricorn برج جدی</h3>
              <div className="section__content-cta">
                <h3>Element</h3>
                <p className="primary-text">Earth</p>
                <h3>Color</h3>
                <p className="primary-text">Brown, Black</p>
                <h3>Day</h3>
                <p className="primary-text">Saturday</p>
                <h3>Greatest Overall Compatibility</h3>
                <p className="primary-text">Taurus, Cancer</p>
                <h3>Lucky Numbers</h3>
                <p className="primary-text">4, 8, 13, 22</p>
                <h3>Date Range</h3>
                <p className="primary-text"> December 22 – January 19</p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Capricorn Career Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  In 2024, your career outlook is promising, with potential
                  success in business and lucrative prospects stemming from
                  foreign connections and revitalized projects. Reviving dormant
                  endeavors could yield additional benefits. Anticipate
                  promotions and enticing job opportunities, but exercise
                  caution against job transitions post-October to maximize
                  career growth. Embrace the guidance of your spouse and family,
                  maintaining professionalism and courtesy in all interactions.
                  With the backing of Jupiter and Saturn, you'll navigate
                  obstacles and garner backing from superiors and peers alike.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Capricorn Love Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Under the influence of Jupiter and Venus, your romantic
                  endeavors in 2024 are poised for harmony and closeness.
                  Exciting travel opportunities and budding relationships,
                  particularly online connections, will be prominent throughout
                  the year. Despite occasional moments of uncertainty and
                  possessiveness, trust your instincts and pursue love and
                  romance with an open heart.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Capricorn Money & Finance Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  In 2024, diverse avenues for wealth accumulation present
                  themselves, facilitated by profits from previous investments
                  and ancestral assets, buoyed by Jupiter's favorable influence.
                  While prudent spending may encounter obstacles due to family
                  disagreements and disputes over inherited property, especially
                  during Saturn's retrograde phase, seize opportunities for
                  financial expansion through international partnerships and
                  travel. Addressing past financial concerns and fostering
                  stability by year-end are essential for long-term prosperity.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Capricorn Health, Family & Children Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  While experiencing stronger connections with your partner or
                  spouse, be mindful of potential conflicts with family members,
                  requiring self-reflection and open communication. Work-related
                  stress may intensify familial tensions, particularly due to
                  communication barriers and health issues. Addressing chronic
                  health conditions and prioritizing emotional well-being amidst
                  family challenges are crucial, emphasizing a healthy lifestyle
                  and psychological balance.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapricornZodiacDetails;
