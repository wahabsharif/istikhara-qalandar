import React from "react";
import Image from "next/image";
import MigrationIstikhara from "public/images/istikhara-qalandar-istikhara-for-migration.webp";
import star from "public/images/star.webp";
import dotlarge from "public/images/agency/dot-large.webp";

const MigrationIstikharaAbout = () => {
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="award__thumb dir-rtl">
              <Image
                src={MigrationIstikhara}
                alt="istikhara-qalandar-istikhara-for-migration"
                className="unset fade-left"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="award__content section__content">
              <span className="sub-title">
                Istikhara For Migration{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Empower Your Path: <span>Istikhara for Immigration</span>
              </h2>
              <div className="paragraph">
                <p>
                  Begin a profound journey toward migration guided by
                  Istikhara's illuminating influence. Istikhara serves as a
                  spiritual guide to navigate the complex choices involved in
                  relocating to a new place. Our committed team of specialists
                  is prepared to support you throughout the Istikhara process,
                  providing personalized insights to suit your migration goals.
                  With Istikhara, you'll gain deep understanding and clarity,
                  enabling you to confidently make informed decisions. Start
                  your Istikhara journey now and access the wisdom necessary to
                  embark on a rewarding migration journey, assured that divine
                  guidance lights your path at every turn.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={star}
        alt="istikhara-qalandar-istikhara-for-migration-star"
        className="star"
      />
      <Image
        src={star}
        alt="istikhara-qalandar-istikhara-for-migration-star"
        className="star-two"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-istikhara-for-migration-dots-large"
        className="dot"
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-istikhara-for-migration-large"
        className="dot-two"
      />
    </section>
  );
};

export default MigrationIstikharaAbout;
