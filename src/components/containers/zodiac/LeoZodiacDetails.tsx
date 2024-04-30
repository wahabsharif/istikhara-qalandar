import React from "react";
import Image from "next/image";
import LeoZodiacImage from "public/images/zodiac/istikhara-qalandar-zodiac-leo.png";

const LeoZodiacDetails = () => {
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
                      Leo
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
              <Image src={LeoZodiacImage} alt="istikhara-qalandar-zodiac-leo" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Leo برج اسد</h3>
              <div className="section__content-cta">
                <h3>Element</h3>
                <p className="primary-text">Air</p>
                <h3>Color</h3>
                <p className="primary-text"> Light-Blue, Silver</p>
                <h3>Day</h3>
                <p className="primary-text">Saturday</p>
                <h3>Greatest Overall Compatibility</h3>
                <p className="primary-text">Leo, Sagittarius</p>
                <h3>Lucky Numbers</h3>
                <p className="primary-text"> 4, 7, 11, 22, 29</p>
                <h3>Date Range</h3>
                <p className="primary-text"> January 20 – February 18</p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Leo Career Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  The year 2024 starts with stability and promising prospects in
                  your professional sphere, courtesy of favorable positioning of
                  Jupiter and Saturn. Anticipate multiple opportunities for
                  career advancement and financial growth, especially from
                  previous investments. Your determination and hard work will
                  play pivotal roles in your success, with potential avenues for
                  exploring new career paths. <br />
                  As your financial situation stabilizes, success in competitive
                  exams and government job screenings is on the horizon. New
                  connections will unlock doors to projects and business
                  ventures, while dedicated efforts at work ensure progress and
                  opportunities. While contemplating job changes, be mindful of
                  potential conflicts and delays in the latter part of the year
                  due to the retrograde movements of Jupiter, Saturn, Rahu, and
                  Ketu.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Leo Love Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  The first half of 2024 holds the promise of romance, deep
                  connections, and possible marriages, guided by the strong
                  influence of Jupiter. Travel opportunities will enrich
                  intimate experiences, and singles may encounter compatible
                  partners for future commitments. However, exercise caution
                  during the last quarter of the year as retrograde Jupiter may
                  bring confusion and distance in relationships. Keep
                  communication open and refrain from imposing your will on your
                  partner.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Leo Money & Finance Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Anticipate substantial financial enhancements in 2024,
                  facilitating the conclusion of pending projects and the
                  fulfillment of longstanding aspirations like home ownership.
                  Overseas travel will result in financial gains, supported by
                  Jupiter, which aids in saving from these earnings. However,
                  exercise prudence in significant financial choices,
                  particularly after May, to maintain anticipated progress amid
                  potential personal expenditures and career transitions.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Leo Health, Family & Children Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Family dynamics will initially be harmonious, possibly
                  welcoming new members in the early months. However, conflicts
                  and property disputes could emerge from mid-year onwards,
                  requiring adaptability and resilience. It's essential to
                  prioritize health and wellness through balanced eating habits
                  and regular exercise, especially as stress from career and
                  relationships may affect well-being later in the year. Be
                  ready for possible medical costs for family members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeoZodiacDetails;
