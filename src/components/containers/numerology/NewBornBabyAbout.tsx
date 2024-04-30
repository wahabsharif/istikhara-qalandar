import React from "react";
import Image from "next/image";
import NewBornBaby from "public/images/istikhara-qalandar-numerology-for-choosing-names-for-new-born-baby.webp";
import star from "public/images/star.webp";
import dotlarge from "public/images/agency/dot-large.webp";

const NewBornBabyAbout = () => {
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="award__content section__content">
            <h2 className="title title-anim">
              Selection The Names For <span>New Born Baby</span>
            </h2>
            <span className="sub-title">
              New Born Baby Name Selection
              <i className="fa-solid fa-arrow-right"></i>
            </span>
            <div className="paragraph">
              <p>
                Picture your baby's name as a mystical key unlocking the
                pathways to their future. Just as each person possesses a
                distinct fingerprint, every name holds its own unique energy.
                This energy shapes your baby's life experiences and interactions
                with the world.{" "}
              </p>
            </div>
          </div>
          <div className="align-items-center">
            <div className="award__thumb dir-rtl">
              <Image
                src={NewBornBaby}
                alt="istikhara-qalandar-numerology-for-choosing-names-for-new-born-baby"
                className="unset fade-left"
              />
            </div>
          </div>
          <div className="">
            <div className="award__content section__content">
              <div className="paragraph">
                <p>
                  Numerology, at its core, is akin to deciphering the enchanting
                  energy imbued within names through numbers. Each alphabet
                  letter corresponds to a number, each with its unique
                  vibrations and significance. By summing up the numbers in a
                  name and breaking it down, we unveil insights into your baby's
                  character, strengths, and potential challenges.{" "}
                </p>
                <p>
                  <b>For example</b>, consider the name 'Sarah.' In numerology,
                  'S' and 'A' correspond to the number 1, 'R' to 9, and 'H' to
                  8. Adding these numbers reveals Sarah's distinctive energetic
                  blueprint. Numerologists interpret these numbers to discern
                  Sarah's inclinations, talents, and areas of potential
                  excellence. It's akin to peering into a crystal ball to
                  glimpse the possibilities and potential awaiting your little
                  one.
                </p>
                <p>
                  Selecting a name resonating with positive vibrations can pave
                  the way for a radiant and fulfilling future for your baby.
                  It's akin to granting them a head start in life, infused with
                  blessings and good fortune. Hence, when choosing a name for
                  your newborn, consider seeking guidance from a numerologist.
                  They can aid you in selecting a name aligning with your baby's
                  destiny, bringing forth their utmost potential.
                </p>
                <p>
                  Ultimately, naming your baby is a sacred and joyous occasion.
                  With the wisdom of numerology as your guide, you can ensure
                  that your little one's journey in this world is adorned with
                  love, abundance, and boundless possibilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={star}
        alt="istikhara-qalandar-numerology-for-choosing-names-for-new-born-baby-star"
        className="star"
      />
      <Image
        src={star}
        alt="istikhara-qalandar-numerology-for-choosing-names-for-new-born-baby-star"
        className="star-two"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-numerology-for-choosing-names-for-new-born-baby-dots-large"
        className="dot"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-numerology-for-choosing-names-for-new-born-baby-large"
        className="dot-two"
      />
    </section>
  );
};

export default NewBornBabyAbout;
