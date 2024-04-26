import Image from "next/image";
import Link from "next/link";
// Vectors Images
import CareerNumerology from "public/images/numerology/numerology-for-choosing-the-career.png";
import ColorsStonesNumerology from "public/images/numerology/numerology-for-colors-and-stones.png";
import MarriageMatchesNumerology from "public/images/numerology/numerology-for-marriage-matches.png";
import NewBornBabiesNameNumerology from "public/images/numerology/numerology-for-new-born-babies-name.png";
import TravelMigrationNumerology from "public/images/numerology/numerology-for-travel-and-migration.png";

const NumerologySection = () => {
  return (
    <section className="section feedback-s fade-wrapper">
      <div className="container">
        <div className="agency__content section__content">
          <h2 className="title title-anim">
            We Have Best Services In Numerology.
          </h2>
        </div>
        <div className="row gaper">
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="author">
                <div className="thumb">
                  <Image
                    src={TravelMigrationNumerology}
                    alt="numerology-for-travel-and-migration"
                  />
                </div>
                <div className="author-meta">
                  <h5>Numerology</h5>
                  <p>For Travel & Migration</p>
                </div>
              </div>
              <hr />
              <div className="section__content-cta text-center">
                <Link href="travel-migration">
                  <button className="btn btn--secondary">Load More </button>
                </Link>
              </div>
              <div className="social justify-content-center">
                <Link href="https://www.facebook.com/" target="_blank">
                  <i className="fa-brands fa-whatsapp"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="author">
                <div className="thumb">
                  <Image
                    src={ColorsStonesNumerology}
                    alt="numerology-for-colors-and-stones"
                  />
                </div>
                <div className="author-meta">
                  <h5>Numerology</h5>
                  <p>For Colors & Stones</p>
                </div>
              </div>
              <hr />
              <div className="section__content-cta text-center">
                <Link href="stone-and-colors">
                  <button className="btn btn--secondary">Load More </button>
                </Link>
              </div>
              <div className="social justify-content-center">
                <Link href="https://www.facebook.com/" target="_blank">
                  <i className="fa-brands fa-whatsapp"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="author">
                <div className="thumb">
                  <Image
                    src={NewBornBabiesNameNumerology}
                    alt="numerology-for-new-born-babies"
                  />
                </div>
                <div className="author-meta">
                  <h5>Numerology</h5>
                  <p>For Babies Names</p>
                </div>
              </div>
              <hr />
              <div className="section__content-cta text-center">
                <Link href="new-born-baby">
                  <button className="btn btn--secondary">Load More </button>
                </Link>
              </div>
              <div className="social justify-content-center">
                <Link href="https://www.facebook.com/" target="_blank">
                  <i className="fa-brands fa-whatsapp"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-6">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="author">
                <div className="thumb">
                  <Image
                    src={MarriageMatchesNumerology}
                    alt="numerology-for-choosing-perfect-life-partner"
                  />
                </div>
                <div className="author-meta">
                  <h5>Numerology</h5>
                  <p>For Perfect Life Partner</p>
                </div>
              </div>
              <hr />
              <div className="section__content-cta text-center">
                <Link href="perfect-life-partner">
                  <button className="btn btn--secondary">Load More </button>
                </Link>
              </div>
              <div className="social justify-content-center">
                <Link href="https://www.facebook.com/" target="_blank">
                  <i className="fa-brands fa-whatsapp"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-6">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="author">
                <div className="thumb">
                  <Image
                    src={CareerNumerology}
                    alt="numerology-for-choosing-the-carrier"
                  />
                </div>
                <div className="author-meta">
                  <h5>Numerology</h5>
                  <p>For Choosing The Career</p>
                </div>
              </div>
              <hr />
              <div className="section__content-cta text-center">
                <Link href="carrier-counselling">
                  <button className="btn btn--secondary">Load More </button>
                </Link>
              </div>
              <div className="social justify-content-center">
                <Link href="https://www.facebook.com/" target="_blank">
                  <i className="fa-brands fa-whatsapp"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumerologySection;
