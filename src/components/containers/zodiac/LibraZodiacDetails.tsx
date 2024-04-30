import React from "react";
import Image from "next/image";
import LibraZodiacImage from "public/images/zodiac/istikhara-qalandar-zodiac-libra.png";

const LibraZodiacDetails = () => {
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
                      Libra
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
                src={LibraZodiacImage}
                alt="istikhara-qalandar-zodiac-libra"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Libra برج میزان</h3>
              <div className="section__content-cta">
                <h3>Element</h3>
                <p className="primary-text">Air</p>
                <h3>Color</h3>
                <p className="primary-text">Pink, Green</p>
                <h3>Day</h3>
                <p className="primary-text">Friday</p>
                <h3>Greatest Overall Compatibility</h3>
                <p className="primary-text">Aries, Sagittarius</p>
                <h3>Lucky Numbers</h3>
                <p className="primary-text">4, 6, 13, 15, 24</p>
                <h3>Date Range</h3>
                <p className="primary-text">September 23 – October 22</p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Libra Career Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Prepare for 2024 to bring forth fresh opportunities that will
                  reshape your professional journey. Engaging projects will not
                  only refine your skills but also propel you toward your goals,
                  backed by the favorable influence of Jupiter. Although you may
                  encounter obstacles from competitive peers and unexpected
                  duties, your determination and guidance from mentors will
                  guide you to triumph. Stay ready for setbacks and hurdles in
                  plan execution, particularly from July to November, but stay
                  open to feedback and advice from experienced colleagues.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Libra Love Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  In 2024, love and romance bloom, nurturing deeper connections
                  and the possibility of lasting commitments. Singles may
                  discover love in unforeseen circumstances, while existing
                  relationships grow stronger, despite potential hurdles like
                  delays and emotional barriers. Open and honest communication,
                  along with patience, will be vital in overcoming challenges
                  and fostering a thriving relationship.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Libra Money & Finance Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Effective financial planning is paramount in 2024, yet the
                  year also presents opportunities for strategic long-term
                  investments in real estate and prudent management of personal
                  expenses. Despite potential delays and unforeseen
                  expenditures, especially between July and October, it's
                  essential to exercise caution in financial matters and steer
                  clear of accumulating excessive debt.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Libra Health, Family & Children Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Spending quality time with family and receiving guidance from
                  elders will strengthen familial bonds, although difficulties
                  in communication with children may surface. Health
                  fluctuations, such as sleep disruptions and stress-related
                  ailments, should be addressed, with physical activity
                  recommended to manage stress and promote overall wellness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibraZodiacDetails;
