import React from "react";
import Image from "next/image";
import StonesAndColors from "public/images/istikhara-qalandar-numerology-for-useful-stones-and-colors-in-your-life.jpg";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";

const StonesAndColorsAbout = () => {
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="award__content section__content">
            <h2 className="title title-anim">
              Beneficial <span>Gems and Colors</span> in Your Life
            </h2>
            <span className="sub-title">
              Stones And Colors
              <i className="fa-solid fa-arrow-right"></i>
            </span>
            <div className="paragraph">
              <p>
                Consider colors and stones as enchanting instruments that aid us
                in achieving balance, prosperity, and inner connection. Similar
                to how specific music can elevate our spirits, different colors
                and stones possess unique vibrations that harmonize with our
                energies. Now, envision numerology as a compass guiding us to
                comprehend which colors and stones are most beneficial for us,
                drawing from our personal information such as our name and birth
                date.{" "}
              </p>
            </div>
          </div>
          <div className="align-items-center">
            <div className="award__thumb dir-rtl">
              <Image
                src={StonesAndColors}
                alt="istikhara-qalandar-numerology-for-useful-stones-and-colors-in-your-life"
                className="unset fade-left"
              />
            </div>
          </div>
          <div className="">
            <div className="award__content section__content">
              <div className="paragraph">
                <p>
                  For instance, suppose your name totals to the number 5 in
                  numerology. This number could be linked with vibrant hues like
                  yellow or stones such as citrines, renowned for their
                  invigorating and uplifting properties. By grasping the
                  energetic resonance of various colors and stones, we can
                  utilize them to enrich various facets of our lives. When
                  feeling stressed, surrounding yourself with soothing blue
                  tones or adorning yourself with a calming blue stone like
                  aquamarine can be beneficial. For those seeking prosperity,
                  integrating lush green hues or wearing a prosperity stone like
                  jade may be advantageous. Numerology aids us in selecting
                  colors and stones that seamlessly align with our individual
                  energy signature, guiding us towards emotional equilibrium,
                  abundance, and spiritual advancement.{" "}
                </p>
                <p>
                  When discussing uncovering beneficial stones and colors in
                  life through numerology, we're referring to harnessing the
                  innate energies of the universe to nurture and enhance our
                  lives significantly. By embracing the insights of numerology
                  and delving into the diverse realm of colors and stones, we
                  can cultivate a life that resonates with vibrancy,
                  equilibrium, and harmony with our innermost wishes and goals.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={star}
        alt="istikhara-qalandar-numerology-for-useful-stones-and-colors-in-your-life-star"
        className="star"
      />
      <Image
        src={star}
        alt="istikhara-qalandar-numerology-for-useful-stones-and-colors-in-your-life-star"
        className="star-two"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-numerology-for-useful-stones-and-colors-in-your-life-dots-large"
        className="dot"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-numerology-for-useful-stones-and-colors-in-your-life-large"
        className="dot-two"
      />
    </section>
  );
};

export default StonesAndColorsAbout;
