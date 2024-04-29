import React from "react";
import Image from "next/image";
import NumerologyMainPageImage from "public/images/istikhara-qalandar-numerology-main-page-about.jpg";

const NumerologyMainAbout = () => {
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
                      Numerology
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
                src={NumerologyMainPageImage}
                alt="istikhara-qalandar-numerology-main-page-about"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Name Selection For Newborn Babies</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Envision your baby's name as a mystical key unlocking the
                  gateways to their future. Just as every individual possesses a
                  distinct fingerprint, each name holds its own unique energy.
                  This energy shapes your baby's perception of life and their
                  interactions with the world.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Best Time For Travel And Immigration</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Consider the months of the year as distinct chapters in a
                  book, each imbued with its own atmosphere and energy. Just as
                  some days exude warmth and brightness while others evoke
                  coziness amidst rain, each month possesses its individual
                  ambiance. Numerology aids in comprehending these atmospheres
                  by assigning numbers to each month, symbolizing the energy and
                  essence of that specific period.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Perfect Marriage Match</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Consider numerology as a unique tool that allows us to glimpse
                  the unseen connections among individuals. In the realm of
                  marriage, it transcends mere surface compatibility or shared
                  interests. It delves into the profound energies and resonances
                  exchanged between two people. Visualize each individual's
                  birth date and full name as a distinct code brimming with
                  insights into their essence and relational dynamics.
                  Numerology aids us in deciphering these codes, unraveling the
                  intricate tapestry of a relationship's underlying dynamics.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Helpful Stones And Colors In Life</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Consider colors and stones as enchanting instruments that aid
                  in achieving balance, prosperity, and inner connection.
                  Similar to how specific music can elevate our spirits,
                  different colors and stones possess unique vibrations that
                  harmonize with our energies. Now, envision numerology as a
                  guiding light that assists us in comprehending which colors
                  and stones are most beneficial for us, drawing from our
                  personal information such as our name and birth date.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Career Counseling Through Numerology</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Picture your career as a path winding through a dense forest.
                  At times, it's easy to feel lost or uncertain about the
                  direction to take. This is where numerology becomes
                  invaluable—it's akin to having a reliable guide to assist you
                  in navigating the twists and turns of your professional
                  journey. Numerology examines the numbers linked to your birth
                  date and name, unveiling insights into your unique talents,
                  strengths, and life purpose. It's like gazing into a mirror
                  that reflects your inner calling and potential. Through a
                  personalized numerology consultation, you can attain clarity
                  on what drives you professionally. Perhaps you excel at
                  problem-solving or possess a flair for creative expression.
                  Numerology illuminates these inherent abilities and
                  demonstrates how to utilize them in your career.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumerologyMainAbout;
