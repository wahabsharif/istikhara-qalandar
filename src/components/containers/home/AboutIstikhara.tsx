import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AboutIstikharaImage1 from "public/images/istikhara/about-what-is-the-purpose-of-istikhara-1.webp";
import AboutIstikharaGif from "public/images/istikhara/about-what-is-the-purpose-of-istikhara-vid.gif";
import star from "public/images/star.webp";
import dotlarge from "public/images/agency/dot-large.webp";

gsap.registerPlugin(ScrollTrigger);
const AboutIstikhara = () => {
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
                What is the purpose of Istikhara?
              </h2>
              <div className="paragraph">
                <p>
                  Life's decisions can be a confusing maze. Istikhara offers a
                  guiding light in moments of doubt.
                </p>
                <p>
                  Uncertain choices can leave us feeling lost. Istikhara
                  provides a powerful tool to navigate towards clarity.
                </p>
                <p>
                  While confusion and indecision might cloud our judgment,
                  Istikhara helps us find the right path.
                </p>
              </div>
              <div className="section__content-cta">
                <Link href="istikhara" className="btn btn--primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" priority />
      <Image src={dotlarge} alt="Image" className="dot-large" priority />
    </section>
  );
};

export default AboutIstikhara;
