import React from "react";
import Image from "next/image";
import CancerZodiacImage from "public/images/zodiac/istikhara-qalandar-zodiac-cancer.png";

const CancerZodiacDetails = () => {
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
                      Cancer
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
                src={CancerZodiacImage}
                alt="istikhara-qalandar-zodiac-cancer"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Cancer برج سرطان</h3>
              <div className="section__content-cta">
                <h3>Element</h3>
                <p className="primary-text">Water</p>
                <h3>Color</h3>
                <p className="primary-text">White</p>
                <h3>Day</h3>
                <p className="primary-text">Monday, Thursday</p>
                <h3>Greatest Overall Compatibility</h3>
                <p className="primary-text">Capricorn, Taurus</p>
                <h3>Lucky Numbers</h3>
                <p className="primary-text">2, 3, 15, 20</p>
                <h3>Date Range</h3>
                <p className="primary-text"> June 21 – July 22</p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Cancer Career Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  In 2024, Cancer individuals can anticipate significant success
                  in their professional pursuits, according to career
                  predictions. Expect notable achievements in business ventures,
                  coupled with the resilience needed to overcome obstacles. New
                  projects and deals, particularly those involving foreign
                  companies, will contribute to enhancing your reputation. For
                  those employed, job advancements and promotions, especially
                  after May, are likely, with the supportive influence of
                  Jupiter.
                  <br />
                  This year also favors individuals in government roles or
                  politics, offering opportunities for career growth. However,
                  the latter part of the year, influenced by retrograde Saturn,
                  may bring disruptions such as changes in work schedules or
                  health issues. Nonetheless, your intelligence and hard work
                  will enable you to overcome these challenges.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Cancer Love Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  According to love predictions for 2024, your romantic life
                  starts off moderately but gains momentum after May. Singles
                  can look forward to exciting new connections or relationships.
                  Patience and tolerance will be valuable traits, drawing others
                  to you and fostering inner peace, even in the face of
                  potential conflicts. However, be cautious of impulsiveness
                  influenced by Mars, as it may lead to domineering behavior in
                  relationships.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Cancer Money & Finance Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Financial prospects in 2024 start cautiously but show gradual
                  improvement over time. It's important to be prudent in
                  investments, seeking expert advice when needed, particularly
                  during the first half of the year. While Saturn's positive
                  influence helps control unnecessary spending, it might also
                  lead to delays in financial gains. However, opportunities to
                  acquire assets such as houses or cars are favorable,
                  especially in the latter part of the year.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Cancer Health, Family & Children Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  During the initial months, expect family discord and potential
                  conflicts over property, which may impact children's
                  well-being. However, Jupiter's transit brings a period of
                  peace and harmony, fostering familial unity and the
                  possibility of new additions to the family. Patience is
                  crucial in addressing health challenges, including mental
                  distress and lethargy, particularly influenced by Saturn.
                  Adopting a positive outlook, balanced diet, and exercise
                  routine post-May will contribute to overall well-being.
                  <br /> In summary, 2024 presents Cancer individuals with a
                  blend of challenges and opportunities in career, love,
                  finance, and family aspects. Navigating these with patience
                  and diligence will lead to personal growth and fulfillment.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CancerZodiacDetails;
