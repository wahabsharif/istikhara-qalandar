import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import blogthumb from "public/images/offer/blog-thumb.png";
import two from "public/images/offer/two.png";
import three from "public/images/offer/three.png";
import star from "public/images/offer/star.png";

const ZodiacSign = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const caseStudyItems = document.querySelectorAll(".offer__cta-single");
      const deviceWidth = window.innerWidth;

      if (deviceWidth > 576) {
        caseStudyItems.forEach((item) => {
          const contentBox = item.getBoundingClientRect();
          const dx = event.clientX - contentBox.x;
          const dy = event.clientY - contentBox.y;
          const thirdChild = item.children[2] as HTMLElement;
          thirdChild.style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="section offer fade-wrapper light">
      <div className="container">
        <div className="col-12 col-lg-6">
          <div className="agency__content section__content">
            <h2 className="title title-anim">Select Your Zodiac Sign.</h2>
            <div className="paragraph">
              <p>
                Select your zodiac sign to discover your distinctive
                characteristics and compatibility. Delve into how the positions
                of the stars shape your life in straightforward, accessible
                terms.
              </p>
            </div>
          </div>
        </div>
        <div className="row gaper">
          <div className="col-12 col-lg-4 col-xl-4">
            <div className="offer__cta">
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  01
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="service-single">
                    Aquarius
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={blogthumb} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  02
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="service-single">
                    Pisces
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={two} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  03
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="service-single">
                    Aries<i className="fa-sharp fa-solid fa-star"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={three} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  04
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="service-single">
                    Taurus
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={blogthumb} alt="Image" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-xl-4">
            <div className="offer__cta">
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  05
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="service-single">
                    Gemini
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={blogthumb} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  06
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="service-single">
                    Cancer
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={two} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  07
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="service-single">
                    Leo
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={three} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  08
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="service-single">
                    Virgo
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={blogthumb} alt="Image" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-xl-4">
            <div className="offer__cta">
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  09
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="service-single">
                    Libra
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={blogthumb} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  10
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="service-single">
                    Scorpio
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={two} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  11
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="service-single">
                    Sagittarius
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={three} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  12
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="service-single">
                    Capricorn
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={blogthumb} alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
    </section>
  );
};

export default ZodiacSign;
