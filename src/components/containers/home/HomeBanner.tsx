import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import dawn from "public/images/banner/dawn.png";

gsap.registerPlugin(ScrollTrigger);
const HomeBanner = () => {
  useEffect(() => {
    const device_width = window.innerWidth;

    if (
      document.querySelectorAll(".banner-two").length > 0 &&
      device_width > 576
    ) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".banner-two",
          start: "center center",
          end: "+=100%",
          scrub: true,
          pin: false,
        },
      });

      tl.set(".g-ban-one", {
        y: "-10%",
      });

      tl.to(".imae", {
        opacity: 0,
        y: "300%",

        duration: 2,
      });
    }
  }, []);

  return (
    <section
      className="banner-two"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/banner/home-banner.jpg')",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="banner-two-inner">
              <div className="banner-two__meta">
                <div className="thumb imae">
                  <video autoPlay loop muted controls>
                    <source
                      src="/videos/istikhara-qalandar-home-banner-video.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner-two__content">
              <h1 className="title-anim">
                Your Reliable Guide:{" "}
                <span>
                  Life Journey, Numerology, Istikhara, Astrology & Wazaif !
                </span>
              </h1>
            </div>
          </div>
          <div className="banner-two__content">
            <div className="banner-two__content-cta section__content-cta">
              <div className="paragraph">
                <p>
                  "Istikhara Qalandar: Your trusted partner for over 30+ years,
                  offering guidance and solutions to individuals worldwide, with
                  a track record of assisting over 85,000 clients."
                </p>
              </div>
              <div className="arrow-wrapper d-none d-lg-block">
                <span className="arrow"></span>
              </div>
              <div className="cta">
                <Link href="contact" className="btn btn--tertiary">
                  book a call now
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={dawn} alt="Image" className="dawn" />
    </section>
  );
};

export default HomeBanner;
