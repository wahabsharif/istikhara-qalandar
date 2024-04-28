import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";

gsap.registerPlugin(ScrollTrigger);
const AboutDetails = () => {
  return (
    <section className="section agency">
      <div className="container">
        <div className="row gaper align-items-center">
          <div>
            <div className="agency__content section__content">
              <h2 className="title title-anim">Istikhara </h2>
              <div className="paragraph">
                <p>
                  Istikhara is a sacred practice that delves into spirituality
                  to seek guidance and clarity in decision-making. Our Istikhara
                  services cover various areas such as marriage, career, legal
                  matters, health concerns, and spiritual healing. Whether
                  you're facing a life crossroads or seeking divine
                  intervention, our expert guidance will illuminate your path
                  toward resolution and peace.{" "}
                </p>
              </div>
            </div>
            <div className="agency__content section__content">
              <h2 className="title title-anim">Numerology </h2>
              <div className="paragraph">
                <p>
                  Discover the secrets of numbers through our Numerology
                  services. Whether it's naming your newborn or finding
                  auspicious times for events, our numerologists provide
                  thorough insights and guidance. Explore the meanings of
                  colors, stones, and numbers for self-discovery and
                  enlightenment.{" "}
                </p>
              </div>
            </div>
            <div className="agency__content section__content">
              <h2 className="title title-anim">Spiritual Counseling</h2>
              <div className="paragraph">
                <p>
                  During times of turmoil and uncertainty, our spiritual
                  counselors offer a supportive space for you to delve into your
                  deepest thoughts and emotions. Whether facing family
                  conflicts, divorce, or marital challenges, our empathetic
                  counselors provide personalized support and guidance. You can
                  rely on our discretion and empathy as we accompany you on your
                  path to healing and reconciliation.{" "}
                </p>
              </div>
            </div>
            <div className="agency__content section__content">
              <h2 className="title title-anim"> Resolving Family Matters</h2>
              <div className="paragraph">
                <p>
                  Family serves as the cornerstone of our existence, but
                  conflicts and misunderstandings can strain bonds. At Istikhara
                  Hub, we specialize in fostering family understanding and
                  harmony. We excel in encouraging open communication and
                  resolving conflicts with sensitivity and care.{" "}
                </p>
              </div>
            </div>
            <div className="agency__content section__content">
              <h2 className="title title-anim">Divorce Issues</h2>
              <div className="paragraph">
                <p>
                  Navigating the intricate landscape of divorce can feel
                  daunting, both emotionally and legally. Our seasoned team
                  provides guidance and support every step of the way, aiding
                  you in making informed choices and achieving closure as you
                  embrace a new chapter in your life.{" "}
                </p>
              </div>
            </div>
            <div className="agency__content section__content">
              <h2 className="title title-anim">Marriage Issues</h2>
              <div className="paragraph">
                <p>
                  Marriage, a sacred union, demands care and comprehension.
                  Whether grappling with communication hurdles, trust issues, or
                  compatibility, our specialists provide invaluable insights and
                  strategies to fortify your marital bond and cultivate lasting
                  love and harmony.{" "}
                </p>{" "}
              </div>
            </div>
            <div className="agency__content section__content">
              <div className="paragraph">
                <p>
                  At Istikhara Qalandar, we firmly believe that age, gender, or
                  location should never hinder access to guidance and support.
                  Upholding principles of confidentiality, respect, and empathy
                  in all interactions, we ensure you feel empowered and at ease
                  throughout your journey with us.
                </p>
                <p>
                  Don't hesitate to connect with us in a comforting and inviting
                  atmosphere where your worries will be met with empathy and
                  proficiency. Let Istikhara Qalandar illuminate your path
                  toward a brighter, more satisfying future.
                </p>
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

export default AboutDetails;
