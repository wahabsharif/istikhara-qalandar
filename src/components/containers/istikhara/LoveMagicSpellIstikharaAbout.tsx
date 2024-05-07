import React from "react";
import Image from "next/image";
import LoveMagicSpellIstikhara from "public/images/istikhara-qalandar-istikhara-for-love-magic-spell.jpg";
import star from "public/images/star.webp";
import dotlarge from "public/images/agency/dot-large.webp";

const LoveMagicSpell = () => {
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="award__thumb dir-rtl">
              <Image
                src={LoveMagicSpellIstikhara}
                alt="istikhara-qalandar-istikhara-for-love-magic-spell"
                className="unset fade-left"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="award__content section__content">
              <span className="sub-title">
                Istikhara For Love Magic Spell
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Explore <span>Istikhara for Love Magic Spell</span>
              </h2>
              <div className="paragraph">
                <p>
                  "Love Magic Spell introduces a distinct method for seeking
                  divine direction in your romantic choices. Our committed
                  specialists are here to accompany you on this extraordinary
                  voyage, providing support and guidance at every step. With
                  Love Magic Spell, you'll embark on a journey of spiritual
                  exploration and insight, uncovering hidden pathways to
                  enduring happiness and fulfillment in your relationships.
                  Allow us to assist you in navigating the complexities of Love
                  Magic Spell, guiding you toward the ideal partner meant for
                  you. Start your Love Magic Spell journey today and witness the
                  enchantment unfold as you pursue your perfect match!"{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={star}
        alt="istikhara-qalandar-istikhara-for-LoveMagicSpell-life-star"
        className="star"
      />
      <Image
        src={star}
        alt="istikhara-qalandar-istikhara-for-LoveMagicSpell-life-star"
        className="star-two"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-istikhara-for-LoveMagicSpell-life-dots-large"
        className="dot"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-istikhara-for-LoveMagicSpell-life-large"
        className="dot-two"
      />
    </section>
  );
};

export default LoveMagicSpell;
