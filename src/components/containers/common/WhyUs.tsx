import React from "react";
import Image from "next/image";
import Link from "next/link";
import awardthumb from "public/images/istikhara-qalandar-home-about.webp";
import star from "public/images/star.webp";
import dotlarge from "public/images/agency/dot-large.webp";

const WhyUs = () => {
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="award__thumb dir-rtl">
              <Image src={awardthumb} alt="Image" className="unset fade-left" />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="award__content section__content">
              <span className="sub-title">
                WE PROUD THAT
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Why You Should Choose<span>Istikhara Qalandar</span>
              </h2>
              <div className="paragraph">
                <p>
                  When you select Istikhara Qalandar, you're opting for a team
                  of compassionate experts devoted to assisting you on your
                  spiritual journey. Led by seasoned scholars and practitioners,
                  our team comprehends your requirements and is dedicated to
                  offering tailored support exclusively for you. We prioritize
                  your privacy and assure utmost confidentiality. Our dedication
                  to quality ensures that we consistently aim to deliver
                  top-notch service. At Istikhara Qalandar, we're more than just
                  helpers; we're committed partners accompanying you every step
                  of your spiritual journey.
                </p>
              </div>
              <div className="award__content-meta">
                <div className="single">
                  <h4>30+ years</h4>
                  <h4>Istikhara services</h4>
                </div>
                <div className="single">
                  <h4>90K+</h4>
                  <h4>Satisfied Clients</h4>
                </div>
                <div className="single">
                  <h4>20K+</h4>
                  <h4>Successful Relationship</h4>
                </div>
              </div>
              <div className="section__content-cta">
                <Link href="about" className="btn btn--primary">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
      <Image src={star} alt="Image" className="star-two" />
      <Image src={dotlarge} alt="Image" className="dot" />
      <Image src={dotlarge} alt="Image" className="dot-two" />
    </section>
  );
};

export default WhyUs;
