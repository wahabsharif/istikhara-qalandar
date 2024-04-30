import React from "react";
import Image from "next/image";
import TaurusZodiacImage from "public/images/zodiac/istikhara-qalandar-zodiac-taurus.png";

const TaurusZodiacDetails = () => {
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
                      Taurus
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
                src={TaurusZodiacImage}
                alt="istikhara-qalandar-zodiac-taurus"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Taurus برج ثور</h3>
              <div className="section__content-cta">
                <h3>Element</h3>
                <p className="primary-text">Earth</p>
                <h3>Color</h3>
                <p className="primary-text">Green, Pink</p>
                <h3>Day</h3>
                <p className="primary-text">Friday, Monday</p>
                <h3>Greatest Overall Compatibility</h3>
                <p className="primary-text">Scorpio, Cancer</p>
                <h3>Lucky Numbers</h3>
                <p className="primary-text">2, 6, 9, 12, 24</p>
                <h3>Date Range</h3>
                <p className="primary-text">April 20 – May 20</p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Taurus Career Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  In the upcoming year, Taurus, your career journey shines with
                  diligent effort and fortuitous events. Saturn's impact
                  introduces unexpected business prospects and facilitates your
                  international recognition. Whether initiating a new enterprise
                  or pursuing employment, anticipate personal growth and
                  valuable learning opportunities. While the year commences on a
                  positive note, exercise caution in the latter half to avoid
                  conflicts and impulsive choices. Significant career
                  transitions are likely between January and April, although
                  challenges in task management may arise around April due to
                  communication lapses.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Taurus Love Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  For those in pursuit of love, rejoice! The second quarter
                  brings exciting prospects from distant places. With the
                  combined influences of Jupiter and Venus, lasting commitments,
                  and possibly even marriage, are on the horizon. Nonetheless,
                  challenges may emerge in the final quarter, requiring patience
                  and empathy in your relationship. Additionally, travel with
                  your partner could be somewhat stressful due to weakened
                  influences.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Taurus Money & Finance Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  2024 looks promising financially. With Rahu's influence,
                  excessive spending is mitigated, and various income streams
                  are secured. Explore opportunities in real estate or the stock
                  market for lucrative profits. Starting May, Jupiter's transit
                  offers relief from financial challenges and boosts income.
                  Despite escalating expenses, anticipate additional income
                  sources, promotions, or inheritance gains.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Taurus Health, Family & Children Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Spend valuable time with family, nurturing stronger bonds in
                  the initial months of the year. Brace for hurdles in the
                  latter part, as conflicts may disrupt familial harmony. Stay
                  mindful of stomach-related issues and incorporate light
                  exercise to alleviate stress and anxiety. Despite challenges,
                  anticipate enhancements in health and deepened familial
                  connections throughout 2024.
                  <br /> Approach the year with confidence and resilience,
                  Taurus. Confront obstacles head-on and seize opportunities
                  with unwavering determination. Your voyage through 2024
                  promises growth, enlightenment, and contentment.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaurusZodiacDetails;
