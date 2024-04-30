import React from "react";
import Image from "next/image";
import TravelMigrationIstikhara from "public/images/istikhara-qalandar-numerology-for-travel-and-migration.webp";
import star from "public/images/star.webp";
import dotlarge from "public/images/agency/dot-large.webp";

const TravelMigrationAbout = () => {
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="award__content section__content">
            <h2 className="title title-anim">
              Optimal Timing for <span>Travel or Migration</span>
            </h2>
            <span className="sub-title">
              Travel and Migration
              <i className="fa-solid fa-arrow-right"></i>
            </span>
            <div className="paragraph">
              <p>
                Consider the months of the year as distinct chapters in a novel,
                each imbued with its own ambiance and vitality. Similar to how
                certain days exude warmth and brightness while others evoke
                coziness amidst rain, each month possesses its own individual
                atmosphere. Numerology aids in comprehending these atmospheres
                by associating numbers with each month, symbolizing the energy
                and essence of that specific period.{" "}
              </p>
            </div>
          </div>
          <div className="align-items-center">
            <div className="award__thumb dir-rtl">
              <Image
                src={TravelMigrationIstikhara}
                alt="istikhara-qalandar-numerology-for-travel-and-migration"
                className="unset fade-left"
              />
            </div>
          </div>
          <div className="">
            <div className="award__content section__content">
              <div className="paragraph">
                <p>
                  For instance, let's explore January. In numerology, January
                  might be linked with the number 1, symbolizing fresh
                  beginnings, new opportunities, and a clean slate. Conversely,
                  October could resonate with the number 7, suggesting
                  introspection, spiritual evolution, and discovery.{" "}
                </p>
                <p>
                  So, when planning your travel or migration, it's akin to
                  selecting the perfect backdrop for your journey. By
                  considering the numerical vibrations of different months, you
                  can select a time that aligns with your goals and aspirations.
                </p>
                <p>
                  Perhaps you crave excitement and adventure. In that case, a
                  month brimming with dynamic energy might be ideal for your
                  travels. Alternatively, if you seek introspection and inner
                  growth, a month with a more contemplative vibe could suit your
                  journey.
                </p>
                <p>
                  By harmonizing your plans with the cosmic energies represented
                  by numerology, you're essentially creating a stage for a more
                  fulfilling travel experience. It's akin to flowing with the
                  universe, tapping into its rhythm and synchronicity.
                </p>
                <p>
                  So, when plotting your next trip or contemplating a
                  significant relocation, take a moment to consult numerology.
                  It could assist you in selecting the optimal time to embark on
                  your adventure, ensuring that your journey is enriched with
                  positive experiences, personal growth, and cherished memories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={star}
        alt="istikhara-qalandar-numerology-for-travel-and-migration-star"
        className="star"
      />
      <Image
        src={star}
        alt="istikhara-qalandar-numerology-for-travel-and-migration-star"
        className="star-two"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-numerology-for-travel-and-migration-dots-large"
        className="dot"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-numerology-for-travel-and-migration-large"
        className="dot-two"
      />
    </section>
  );
};

export default TravelMigrationAbout;
