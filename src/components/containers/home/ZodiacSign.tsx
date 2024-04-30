import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

// Zodiac Images
import star from "public/images/offer/star.webp";
import AquariusZodiac from "public/images/zodiac/istikhara-qalandar-zodiac-aquarius.webp";
import AriesZodiac from "public/images/zodiac/istikhara-qalandar-zodiac-aries.webp";
import CancerZodiac from "public/images/zodiac/istikhara-qalandar-zodiac-cancer.webp";
import CapricornZodiac from "public/images/zodiac/istikhara-qalandar-zodiac-capricorn.webp";
import GeminiZodiac from "public/images/zodiac/istikhara-qalandar-zodiac-gemini.webp";
import LeoZodiac from "public/images/zodiac/istikhara-qalandar-zodiac-leo.webp";
import LibraZodiac from "public/images/zodiac/istikhara-qalandar-zodiac-libra.webp";
import PiscesZodiac from "public/images/zodiac/istikhara-qalandar-zodiac-pisces.webp";
import SagittariusZodiac from "public/images/zodiac/istikhara-qalandar-zodiac-sagittarius.webp";
import ScorpioZodiac from "public/images/zodiac/istikhara-qalandar-zodiac-scorpio.webp";
import TaurusZodiac from "public/images/zodiac/istikhara-qalandar-zodiac-taurus.webp";
import VirgoZodiac from "public/images/zodiac/istikhara-qalandar-zodiac-virgo.webp";

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
                  <Link href="aquarius">
                    Aquarius
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image
                    src={AquariusZodiac}
                    alt="istikhara-qalandar-zodiac-aquarius"
                  />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  02
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="pisces">
                    Pisces
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image
                    src={PiscesZodiac}
                    alt="istikhara-qalandar-zodiac-pisces"
                  />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  03
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="aries">
                    Aries<i className="fa-sharp fa-solid fa-star"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image
                    src={AriesZodiac}
                    alt="istikhara-qalandar-zodiac-aries"
                  />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  04
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="taurus">
                    Taurus
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image
                    src={TaurusZodiac}
                    alt="istikhara-qalandar-zodiac-taurus"
                  />
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
                  <Link href="gemini">
                    Gemini
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image
                    src={GeminiZodiac}
                    alt="istikhara-qalandar-zodiac-gemini"
                  />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  06
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="cancer">
                    Cancer
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image
                    src={CancerZodiac}
                    alt="istikhara-qalandar-zodiac-cancer"
                  />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  07
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="leo">
                    Leo
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={LeoZodiac} alt="istikhara-qalandar-zodiac-leo" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  08
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="virgo">
                    Virgo
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image
                    src={VirgoZodiac}
                    alt="istikhara-qalandar-zodiac-virgo"
                  />
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
                  <Link href="libra">
                    Libra
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image
                    src={LibraZodiac}
                    alt="istikhara-qalandar-zodiac-libra"
                  />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  10
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="scorpio">
                    Scorpio
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image
                    src={ScorpioZodiac}
                    alt="istikhara-qalandar-zodiac-scorpio"
                  />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  11
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="sagittarius">
                    Sagittarius
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image
                    src={SagittariusZodiac}
                    alt="istikhara-qalandar-zodiac-sagittarius"
                  />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  12
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="capricorn">
                    Capricorn
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image
                    src={CapricornZodiac}
                    alt="istikhara-qalandar-zodiac-capricorn"
                  />
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
