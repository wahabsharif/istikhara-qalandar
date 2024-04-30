import React from "react";
import Image from "next/image";
import SagittariusZodiacImage from "public/images/zodiac/istikhara-qalandar-zodiac-sagittarius.png";

const SagittariusZodiacDetails = () => {
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
                      Sagittarius
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
                src={SagittariusZodiacImage}
                alt="istikhara-qalandar-zodiac-sagittarius"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Sagittarius برج قوس</h3>
              <div className="section__content-cta">
                <h3>Element</h3>
                <p className="primary-text">Fire</p>
                <h3>Color</h3>
                <p className="primary-text">Blue</p>
                <h3>Day</h3>
                <p className="primary-text">Thursday</p>
                <h3>Greatest Overall Compatibility</h3>
                <p className="primary-text">Gemini, Aries</p>
                <h3>Lucky Numbers</h3>
                <p className="primary-text">3, 7, 9, 12, 21</p>
                <h3>Date Range</h3>
                <p className="primary-text">November 22 – December 21</p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Sagittarius Career Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  In 2024, your dedication and perseverance will result in
                  heightened earnings and a significant professional standing.
                  Anticipate lucrative collaborations and the chance to embark
                  on fresh initiatives, potentially diversifying into various
                  ventures. Advancements in your career and opportunities for
                  growth are imminent, particularly post-May. Nonetheless, stay
                  cautious of workplace dynamics and potential office politics
                  as the year draws to a close.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Sagittarius Love Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Under Saturn's influence, previous issues in your romantic
                  life will likely be resolved, yet possessiveness could still
                  present obstacles. Single individuals may find compatible
                  partners, while those in relationships may face intermittent
                  turmoil influenced by Rahu and Ketu. Patience is essential,
                  particularly during Mars' assertive phases, as weathering
                  these periods can sustain the quality of relationships.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Sagittarius Marriage Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  In 2024, introspection and open communication will fortify
                  marital ties, even amidst occasional disagreements and moments
                  of routine. Travel opportunities and personal exploration will
                  enhance emotional intimacy, potentially prompting discussions
                  about marriage in the initial months. Approach marital
                  decisions with patience and thoughtful deliberation.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Sagittarius Money & Finance Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  In 2024, avenues for income generation through social
                  interactions and investments are plentiful, with the
                  possibility of unlocking previously withheld payments and
                  leveraging family assets for financial gains. Exercise
                  prudence particularly in family-related investments, while
                  capitalizing on Jupiter's insights for lucrative
                  opportunities. Post-May, steer clear of speculative markets,
                  prioritizing long-term investment strategies to ensure
                  financial security.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Sagittarius Health, Family & Children Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  In 2024, expect heightened familial engagement driven by
                  abundant energy, although it may be accompanied by conflicting
                  expectations. Strategically plan for potential family
                  expansion in the initial months, while nurturing understanding
                  and affection to address any conflicts with children.
                  Prioritize physical well-being through regular exercise and
                  mindfulness practices, especially for countering persistent
                  health challenges influenced by Saturn and managing stress
                  related to maternal health.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SagittariusZodiacDetails;
