import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AboutIstikharaImage1 from "public/images/istikhara/about-what-is-the-purpose-of-istikhara-1.webp";
import AboutIstikharaGif from "public/images/istikhara/about-what-is-the-purpose-of-istikhara-image.webp";
import star from "public/images/star.webp";
import dotlarge from "public/images/agency/dot-large.webp";

gsap.registerPlugin(ScrollTrigger);
const Introduction = () => {
  return (
    <section className="section agency">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="agency__thumb">
              <Image
                src={AboutIstikharaImage1}
                alt="about-what-is-the-purpose-of-istikhara"
                className="thumb-one fade-left"
                priority
              />
              <Image
                src={AboutIstikharaGif}
                alt="about-what-is-the-purpose-of-istikhara"
                className="thumb-two fade-right"
                priority
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="agency__content section__content">
              <h2 className="title title-anim">
                Welcome to Istikhara Qalandar - Your Reliable Partner on the
                Journey of Life!
              </h2>
              <div className="paragraph">
                <p>
                  Life's decisions can be a confusing maze. Istikhara offers a
                  guiding light in moments of doubt. At Istikhara Qalandar,
                  we're proud to provide a wide array of services dedicated to
                  guiding, supporting, and solving challenges for individuals.
                  With over three decades of expertise, we've aided over 85,000
                  clients worldwide, becoming a beacon of hope and wisdom in
                  uncertain times. We offer assistance in numerous ways,
                  including:
                </p>
                <ul>
                  <li>
                    <i className="fa-solid fa-arrow-right"> Istikhara</i>
                  </li>
                  <li>
                    <i className="fa-solid fa-arrow-right"> Numerology</i>
                  </li>
                  <li>
                    <i className="fa-solid fa-arrow-right">
                      {" "}
                      Spiritual Counseling
                    </i>
                  </li>
                  <li>
                    <i className="fa-solid fa-arrow-right">
                      {" "}
                      Resolving Family Matters
                    </i>
                  </li>
                  <li>
                    <i className="fa-solid fa-arrow-right"> Divorce Issues</i>
                  </li>
                  <li>
                    <i className="fa-solid fa-arrow-right"> Marriage Issues</i>
                  </li>
                </ul>
              </div>
              <div className="section__content-cta">
                <Link href="tel:000-000-0000" className="btn btn--primary">
                  <i className="fa-solid fa-phone"> Call Us</i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={star}
        alt="istikhara-qalandar-about-introduction-star"
        className="star"
        priority
      />
      <Image
        src={dotlarge}
        alt="istikhara-qalandar-about-introduction-dot-large"
        className="dot-large"
        priority
      />
    </section>
  );
};

export default Introduction;
