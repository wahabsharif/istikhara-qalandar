import React from "react";
import Image from "next/image";
import CarrierCounselling from "public/images/istikhara-qalandar-numerology-for-choosing-the-career-in-your-life.jpg";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";

const CarrierCounsellingAbout = () => {
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="award__content section__content">
            <h2 className="title title-anim">
              Numerology-Based <span>Career Guidance</span>
            </h2>
            <span className="sub-title">
              Choosing The Career In Your Life
              <i className="fa-solid fa-arrow-right"></i>
            </span>
            <div className="paragraph">
              <p>
                Envision your career as a winding path through a dense forest.
                At times, it's easy to feel lost or uncertain about the next
                step. This is where numerology steps in—it serves as a reliable
                guide, aiding you in navigating the twists and turns of your
                professional journey. Numerology examines numbers tied to your
                birth date and name, unveiling insights into your unique
                talents, strengths, and life purpose. It's akin to looking into
                a mirror that reflects your inner calling and potential. Through
                a personalized numerology consultation, you can attain clarity
                regarding your professional inclinations. Perhaps you possess a
                talent for problem-solving or a flair for creative expression.
                Numerology helps illuminate these inherent abilities and
                illustrates how to harness them in your career.{" "}
              </p>
            </div>
          </div>
          <div className="align-items-center">
            <div className="award__thumb dir-rtl">
              <Image
                src={CarrierCounselling}
                alt="istikhara-qalandar-numerology-for-choosing-the-career-in-your-life"
                className="unset fade-left"
              />
            </div>
          </div>
          <div className="">
            <div className="award__content section__content">
              <div className="paragraph">
                <p>
                  Consider it as uncovering your personal formula for success.
                  By harmonizing your career decisions with your numerical
                  profile, you can discover employment that not only sustains
                  you financially but also brings happiness and satisfaction.
                  Numerology extends beyond identifying your strengths—it also
                  aids in comprehending your preferred work atmospheres and the
                  kinds of professions that align with you most. Whether you
                  excel in a dynamic startup environment or prefer the
                  tranquility of a corporate setting, numerology can guide you
                  towards the ideal path.{" "}
                </p>
                <p>
                  Integrating numerology into your career journey means more
                  than mere chance—it involves making informed decisions that
                  align with your authentic self. This heightened self-awareness
                  enables you to traverse the challenges and triumphs of your
                  professional life with clarity, direction, and assurance. If
                  you find yourself adrift or hesitant about your career
                  direction, turning to numerology for guidance can be
                  invaluable. It's akin to possessing a compass guiding you
                  toward success, fulfillment, and prosperity in your chosen
                  path.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={star}
        alt="istikhara-qalandar-numerology-for-choosing-the-career-in-your-life-star"
        className="star"
      />
      <Image
        src={star}
        alt="istikhara-qalandar-numerology-for-choosing-the-career-in-your-life-star"
        className="star-two"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-numerology-for-choosing-the-career-in-your-life-dots-large"
        className="dot"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-numerology-for-choosing-the-career-in-your-life-large"
        className="dot-two"
      />
    </section>
  );
};

export default CarrierCounsellingAbout;
