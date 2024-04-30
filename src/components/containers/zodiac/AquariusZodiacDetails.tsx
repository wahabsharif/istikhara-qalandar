import React from "react";
import Image from "next/image";
import AquariusZodiacImage from "public/images/zodiac/istikhara-qalandar-zodiac-aquarius.webp";

const AquariusZodiacDetails = () => {
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
                      Aquarius
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
                src={AquariusZodiacImage}
                alt="istikhara-qalandar-zodiac-aquarius"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Aquarius برج دلو</h3>
              <div className="section__content-cta">
                <h3>Element</h3>
                <p className="primary-text">Air</p>
                <h3>Color</h3>
                <p className="primary-text">Light Blue, Silver</p>
                <h3>Day</h3>
                <p className="primary-text">Saturday</p>
                <h3>Greatest Overall Compatibility</h3>
                <p className="primary-text"> Leo, Sagittarius</p>
                <h3>Lucky Numbers</h3>
                <p className="primary-text">4,7,11,22,29</p>
                <h3>Date Range</h3>
                <p className="primary-text">January 20 – February 18</p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Aquarius Career Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  During the first and second quarters of 2024, there are
                  chances for collaboration with senior figures, enriching your
                  skills and professional outlook. Business travel and guidance
                  from seniors hold the potential for success, including
                  prospects in politics. While Saturn's hurdles, such as limited
                  resources and coworker support, may arise, perseverance and
                  investigation can unveil new avenues. Caution is advised in
                  the final quarter to prevent reactive responses and emotional
                  choices. Prioritize research and self-reflection to surmount
                  workplace obstacles and attain advancements.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Aquarius Love Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  In the initial six months of 2024, there's the promise of
                  romantic satisfaction, potentially culminating in enduring
                  commitments or marriage, guided by Jupiter's favorable
                  influence. Singles could encounter compatible partners,
                  although caution is advised against impulsive actions
                  influenced by Mercury's retrograde motion. Communication
                  challenges and external interference might emerge in the third
                  quarter, while August and September may witness detachment and
                  secretive liaisons due to the influence of Venus and Ketu.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Aquarius Marriage Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  During the initial two quarters, Jupiter and Saturn promote
                  marital growth and harmonious family dynamics. However, the
                  latter half may present challenges necessitating heightened
                  responsibility, potentially affecting intimacy and
                  communication. Anticipate disagreements and stress stemming
                  from elevated expectations, particularly influenced by Saturn,
                  Rahu, and Ketu.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Aquarius Money & Finance Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Anticipate a rise in income, along with profits from property
                  and inheritance throughout 2024. While investing in land
                  yields fruitful returns, be prepared for potential obstacles
                  to savings due to family expenditures and unforeseen expenses.
                  However, financial gains from older relatives, friends, and
                  foreign investments can help counterbalance these challenges.
                  Additionally, consider the possibility of acquiring vehicles
                  to enhance comfort and convenience.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Aquarius Health, Family & Children Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Family harmony is expected, but it's essential to prioritize
                  parental health and navigate potential disagreements with
                  elders. New friendships and potential family expansions bring
                  joy and support, despite possible obstacles in receiving
                  financial benefits or inheritances. Health issues related to
                  diet, hygiene, and stress management should be addressed,
                  especially during April, September, and December.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AquariusZodiacDetails;
