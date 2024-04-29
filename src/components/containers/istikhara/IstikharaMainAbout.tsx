import React from "react";
import Image from "next/image";
import IstikharaMainPageImage from "public/images/istikhara-qalandar-istikhara-main-page-about.jpg";

const IstikharaMainAbout = () => {
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
                      Istikhara
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
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Why Do You Need Isthikhara?</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Life's decisions can resemble navigating a labyrinth, with
                  unclear paths and uncertain outcomes. In times of confusion
                  and indecision, seeking Istikhara offers invaluable clarity
                  and guidance. But what prompts the necessity for Istikhara?{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single fade-top">
              <Image
                src={IstikharaMainPageImage}
                alt="istikhara-qalandar-istikhara-main-page-about"
              />
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Searching for Spiritual Direction</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Istikhara is a revered Islamic tradition founded on the
                  principle of seeking counsel from the Almighty. It serves as a
                  means to establish a connection with Allah and implore His
                  divine insight when confronted with significant decisions. In
                  navigating life's intricacies, resorting to Istikhara enables
                  one to relinquish worries to a higher authority and have faith
                  in His direction.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Navigating Life's Challenges</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Difficulties and hurdles are an unavoidable aspect of life's
                  voyage. Occasionally, we confront circumstances where the path
                  ahead appears obscured and the journey seems daunting. During
                  such moments, Istikhara emerges as a beacon, shining light
                  upon the route and aiding in traversing life's trials with
                  steadfastness and belief.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Trusting In Divine Will</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  A cornerstone of Istikhara is placing trust in Allah's divine
                  decree. It entails recognizing that, ultimately, Allah
                  comprehends what is optimal for us, even when His intentions
                  may elude our understanding. Through Istikhara, we relinquish
                  our wishes and inclinations to Allah, believing that He will
                  steer us toward what genuinely enhances our spiritual and
                  earthly welfare.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Making Informed Choices</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Life is replete with decisions, ranging from monumental to
                  mundane, that mold our trajectories. Whether it involves
                  career pursuits, selecting a life companion, or financial
                  ventures, each decision bears significance. Istikhara aids in
                  making discerning choices by soliciting clarity and wisdom
                  from Allah. It enables one to approach decisions with
                  tranquility and assurance, secure in the knowledge that divine
                  guidance has been sought.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IstikharaMainAbout;
