import React from "react";
import Image from "next/image";
import AriesZodiacImage from "public/images/zodiac/istikhara-qalandar-zodiac-aries.webp";

const AriesZodiacDetails = () => {
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
                      Aries
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
                src={AriesZodiacImage}
                alt="istikhara-qalandar-zodiac-aries"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Aries برج حمل</h3>
              <div className="section__content-cta">
                <h3>Element</h3>
                <p className="primary-text">Fire</p>
                <h3>Color</h3>
                <p className="primary-text">Red</p>
                <h3>Day</h3>
                <p className="primary-text">Tuesday</p>
                <h3>Greatest Overall Compatibility</h3>
                <p className="primary-text">Libra, Leo</p>
                <h3>Lucky Numbers</h3>
                <p className="primary-text"> 1, 8, 17</p>
                <h3>Date Range</h3>
                <p className="primary-text">March 21 – April 19</p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Aries Career Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Get ready for a year filled with professional accomplishments
                  and progress, Aries! With the favorable influence of Jupiter,
                  expect acknowledgment, promotions, and salary enhancements in
                  your career. The bold energy of an exalted Mars empowers you
                  to pursue new business endeavors, while Jupiter's blessings
                  open doors to international prospects and recognition.
                  Governmental backing and guidance from mentors will nurture
                  your professional path, although challenges in the final
                  quarter will encourage reflection and personal growth.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Aries Love Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  The matters of the heart are blessed with Jupiter's warmth,
                  ensuring fulfillment and joy in relationships. Nevertheless,
                  hurdles may arise from high expectations and work obligations,
                  leading to communication difficulties with your partner.
                  Saturn's influence may introduce a sense of authority,
                  affecting interpersonal dynamics. Singles may find the latter
                  part of the year less favorable for forming new connections.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Aries Money & Finance Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Financial success is on the horizon, Aries! Anticipate profits
                  from astute investments, inheritances, and family assistance.
                  Consider long-term investments in the stock market, as they
                  offer potential rewards, and be open to overseas
                  opportunities, potentially influenced by Rahu. However, be
                  cautious of unforeseen expenses to preserve financial
                  stability.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Aries Health, Family & Children Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Amidst financial stability, familial connections deepen,
                  nurturing happiness and cultivating new friendships.
                  Prioritize the well-being of children, as challenges
                  influenced by Saturn may arise. Maintain a balanced routine
                  for overall health, particularly as sporadic health issues may
                  surface later in the year. In summary, 2024 offers a myriad of
                  opportunities for career progression, relationship enrichment,
                  financial security, and personal wellness. Embrace challenges
                  as pathways to growth, and approach the year with confidence,
                  resilience, and an open mind.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AriesZodiacDetails;
