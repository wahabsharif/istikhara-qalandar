import React from "react";
import Image from "next/image";
import VirgoZodiacImage from "public/images/zodiac/istikhara-qalandar-zodiac-virgo.png";

const VirgoZodiacDetails = () => {
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
                      Virgo
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
                src={VirgoZodiacImage}
                alt="istikhara-qalandar-zodiac-virgo"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Virgo برج سنبلہ</h3>
              <div className="section__content-cta">
                <h3>Element</h3>
                <p className="primary-text">Earth</p>
                <h3>Color</h3>
                <p className="primary-text"> Grey, Beige, Pale-Yellow</p>
                <h3>Day</h3>
                <p className="primary-text">Wednesday</p>
                <h3>Greatest Overall Compatibility</h3>
                <p className="primary-text">Pisces, Cancer</p>
                <h3>Lucky Numbers</h3>
                <p className="primary-text">5, 14, 15, 23, 32</p>
                <h3>Date Range</h3>
                <p className="primary-text">August 23 – September 22</p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Virgo Career Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  In 2024, anticipate fresh prospects that will enhance your
                  professional journey, nurturing business expansion and
                  bolstering your reputation through valuable connections and
                  substantial projects. With Jupiter's backing, advancements
                  like promotions or salary boosts are probable, yet hurdles may
                  emerge after June owing to Saturn's retrograde motion.
                  Engaging with international partners and introducing
                  innovative products could propel your business forward, albeit
                  with added duties and the possibility of stress.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Virgo Love Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  In the upcoming year, expect the healing of past conflicts,
                  which will cultivate deeper emotional connections with your
                  partner, guided by the influences of Venus and Ketu. Enhanced
                  openness in expressing love is likely to elicit favorable
                  reactions, with Saturn emphasizing the significance of trust
                  and effective communication. With Venus's assistance,
                  addressing relationship challenges and fostering mutual
                  comprehension will be facilitated.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Virgo Money & Finance Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Anticipate a rise in income and prospects for acquiring
                  assets, but exercise caution in land investments and loan
                  dealings, especially in the final months of the year. The
                  guidance of Mercury could offer valuable financial wisdom,
                  aiding in savings and ensuring long-term financial stability.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Virgo Health, Family & Children Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  While family ties stay resilient, heightened expectations and
                  work-related stress could strain relationships. Parents should
                  tread carefully in intervening in their children's matters to
                  prevent potential conflicts. Health matters, such as skin and
                  nerve ailments, demand attention, particularly as stress from
                  a spouse's health issues influenced by Rahu and Ketu may
                  arise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirgoZodiacDetails;
