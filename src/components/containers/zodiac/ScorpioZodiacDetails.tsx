import React from "react";
import Image from "next/image";
import ScorpioZodiacImage from "public/images/zodiac/istikhara-qalandar-zodiac-scorpio.png";

const ScorpioZodiacDetails = () => {
  return (
    <section className="section mission-s fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-5 col-xxl-5">
                  <div className="section__header text-center text-lg-start mb-0">
                    <span className="sub-title">
                      Scorpio
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="mission-s__single fade-top">
              <Image
                src={ScorpioZodiacImage}
                alt="istikhara-qalandar-zodiac-scorpio"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Scorpio برج میزان</h3>
              <div className="section__content-cta">
                <h3>Element</h3>
                <p className="primary-text">Water</p>
                <h3>Color</h3>
                <p className="primary-text">Scarlet, Red, Rust</p>
                <h3>Day</h3>
                <p className="primary-text">Tuesday</p>
                <h3>Greatest Compatibility</h3>
                <p className="primary-text"> Taurus, Cancer</p>
                <h3>Lucky Numbers</h3>
                <p className="primary-text">8, 11, 18, 22</p>
                <h3>Date Range</h3>
                <p className="primary-text">October 23 and November 21.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Scorpio Career Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Scorpios are known for their exceptional dedication and drive
                  to achieve their goals, making them well-suited for management
                  and problem-solving roles that demand high energy and effort.
                  They thrive in stressful environments, maintaining a calm and
                  composed demeanor even under pressure. Ideal career paths for
                  Scorpios include scientific research, detective work, law
                  enforcement, psychology, and surgery. However, their exacting
                  standards can sometimes pose challenges in teamwork, as they
                  expect others to match their level of commitment and respect.
                  <br />
                  When it comes to finances, Scorpios exhibit discipline and can
                  adhere to a budget, yet they also enjoy living on the edge.
                  While they work hard for their money and value independence,
                  they may occasionally incur debt or loans, sometimes managing
                  finances that aren't entirely their own. Nonetheless, money
                  provides Scorpios with a sense of control and authority, and
                  they are generally cautious about taking financial risks
                  unless they are confident in the potential payoff.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Scorpio Love Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Scorpio individuals are deeply associated with sexuality,
                  yearning for profound physical and emotional connections with
                  their partners. They seek intense intimacy and love that
                  satisfies them on both sensual and emotional levels, craving
                  unity and surrender in their relationships. Compatibility with
                  other signs often hinges on their willingness to confront and
                  embrace their shadow selves. While Scorpios can be loyal and
                  committed partners, they may also exhibit traits of obsession,
                  possessiveness, and intensity, requiring patience and
                  understanding from their significant others.
                  <br />
                  Initiative and assertiveness characterize Scorpios, who place
                  significant importance on their sexual lives. While they may
                  engage in casual encounters or relationships lacking emotional
                  depth, they ultimately find fulfillment in deeper connections.
                  With maturity, Scorpios realize that genuine emotional
                  intimacy is essential for fulfilling sexual experiences,
                  transcending mere physical gratification.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Scorpio Money & Finance Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Scorpios exhibit an exceptional level of dedication when
                  pursuing their goals, rendering them highly effective in
                  managerial and problem-solving roles that demand resilience
                  and hard work. They flourish in high-pressure environments,
                  showcasing a composed and steady demeanor amid challenges.
                  Ideal career paths for Scorpios include scientific research,
                  detective work, law enforcement, psychology, and surgery.
                  However, their lofty standards for others can pose challenges
                  in teamwork, as they anticipate equal respect from all,
                  regardless of capability.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>2024 Scorpio Health, Family & Children Horoscope</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Friends - Scorpios are known for their honesty and
                  straightforwardness in friendships, combined with intense
                  emotions. They are devoted, loyal, and intelligent, enjoying
                  the company of witty and lively individuals who bring joy and
                  excitement to their lives. Their friendships are dynamic and
                  may feature unexpected twists, sometimes ending abruptly
                  without explanation. Scorpios acknowledge the inevitability of
                  change in all relationships and accept it willingly.
                  <br />
                  Family - Scorpios face challenges in their relationship with
                  the Moon, often grappling with ingrained family values and
                  patterns from their upbringing. In times of difficulty, they
                  turn to their immediate family for support, finding solace in
                  their love and encouragement during tough times. However, they
                  may overlook the potential for love to be expressed through
                  positivity, creativity, and brightness. Scorpios often find
                  avenues for this expression in the families they build, rather
                  than the ones they were born into.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScorpioZodiacDetails;
