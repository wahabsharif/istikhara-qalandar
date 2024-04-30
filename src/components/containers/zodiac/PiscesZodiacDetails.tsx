import React from "react";
import Image from "next/image";
import PiscesZodiacImage from "public/images/zodiac/istikhara-qalandar-zodiac-pisces.webp";

const PiscesZodiacDetails = () => {
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
                      Pisces
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
                src={PiscesZodiacImage}
                alt="istikhara-qalandar-zodiac-pisces"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Pisces برج حوت</h3>
              <div className="section__content-cta">
                <h3>Element</h3>
                <p className="primary-text">Water</p>
                <h3>Color</h3>
                <p className="primary-text">
                  Mauve, Lilac, Purple, Violet, Sea Green
                </p>
                <h3>Day</h3>
                <p className="primary-text">Thursday</p>
                <h3>Greatest Overall Compatibility</h3>
                <p className="primary-text"> Virgo, Taurus</p>
                <h3>Lucky Numbers</h3>
                <p className="primary-text">3,9,12,15,18,24</p>
                <h3>Date Range</h3>
                <p className="primary-text">February 19 – March 20</p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Pisces Career Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  In 2024, individuals born under the sign of Pisces can
                  anticipate a year brimming with new opportunities,
                  professional advancement, and the potential for personal
                  growth. Whether venturing into a new business endeavor or
                  seeking progress in their current career path, success is on
                  the horizon. Partnerships and projects that were previously on
                  hold may also see fruition, promising positive outcomes.
                  <br />
                  However, challenges may emerge starting from the second
                  quarter, with Jupiter potentially bringing about extended
                  work-related travel and changes in the workplace. Despite
                  these obstacles, opportunities stemming from international
                  ventures or collaborations abroad may present themselves,
                  particularly beneficial for those engaged in work within
                  international spheres. It's advisable to exercise caution when
                  considering professional risks, especially as the year
                  progresses beyond the second quarter. Nevertheless, despite
                  the challenges, 2024 is poised to position individuals
                  favorably within the market.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Pisces Love Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Throughout the year, Pisces individuals will experience a
                  whirlwind of emotions in matters of love. While the first
                  quarter encourages prudent decision-making, the influence of
                  the Moon and Rahu may lead to heightened sensitivity and
                  unwarranted concerns. However, the planetary alignments in
                  July may pave the way for enhanced communication and romantic
                  prospects. Marital relationships could encounter turbulence,
                  with illusions, conflicts, and detachment possibly causing
                  disruptions. It's crucial to make conscious efforts to
                  comprehend and support one's partner, with the first quarter
                  and late September to early October presenting favorable
                  periods for decision-making.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Pisces Money & Finance Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Financially, the year ahead holds the promise of stability and
                  growth, particularly during the first quarter, offering
                  opportunities for investments and profits from ancestral
                  property. However, the latter portion of the year may present
                  challenges in financial endeavors and partnerships,
                  emphasizing the importance of thoughtful deliberation before
                  making any decisions.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Pisces Health, Family & Children Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Family dynamics will undergo fluctuations throughout the year,
                  with the first quarter nurturing close bonds and avenues for
                  development. However, the influence of Jupiter may strain
                  communication and lead to neglect within partnerships,
                  impacting the overall household environment. Health-wise, 2024
                  brings both opportunities and challenges. While there may be
                  overall improvements in health, stress and dietary concerns
                  may emerge, underscoring the importance of mindfulness and
                  self-care practices throughout the year.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PiscesZodiacDetails;
