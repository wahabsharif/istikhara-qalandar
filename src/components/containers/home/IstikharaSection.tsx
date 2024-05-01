import Image from "next/image";
import Link from "next/link";
// Vectors Images
import ChoosingFieldIstikhara from "public/images/istikhara/istikhara-for-choosing-field.webp";
import CourtCaseIstikhara from "public/images/istikhara/istikhara-for-court-case.webp";
import HealingIstikhara from "public/images/istikhara/istikhara-for-healing.webp";
import HealthIstikhara from "public/images/istikhara/istikhara-for-health.webp";
import JobIstikhara from "public/images/istikhara/istikhara-for-job.webp";
import MarriageIstikhara from "public/images/istikhara/istikhara-for-marriage-life.webp";
import MigrationIstikhara from "public/images/istikhara/istikhara-for-migration.webp";

const IstikharaSection = () => {
  return (
    <section className="section feedback-s fade-wrapper">
      <div className="container">
        <div className="">
          <div className="agency__content section__content">
            <span className="sub-title">
              WELCOME
              <i className="fa-solid fa-arrow-right"></i>
            </span>
            <h2 className="title title-anim">
              We Have Best Services In Istikhara.
            </h2>
          </div>
        </div>
        <div className="row gaper">
          <div className="col-12 col-md-6 col-xl-3">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="author">
                <div className="thumb">
                  <Image
                    src={MarriageIstikhara}
                    alt="istikhara-for-marriage-life"
                  />
                </div>
                <div className="author-meta">
                  <h5>Istikhara</h5>
                  <p>For Marriage</p>
                </div>
              </div>
              <hr />
              <div className="section__content-cta text-center">
                <Link href="marriage">
                  <button className="btn btn--secondary">Load More </button>
                </Link>
              </div>
              <div className="social justify-content-center">
                <Link href="https://wa.me/+923000701999" target="_blank">
                  <i className="fa-brands fa-whatsapp"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="author">
                <div className="thumb">
                  <Image
                    src={MigrationIstikhara}
                    alt="istikhara-for-migration"
                  />
                </div>
                <div className="author-meta">
                  <h5>Istikhara</h5>
                  <p>For Migration</p>
                </div>
              </div>
              <hr />
              <div className="section__content-cta text-center">
                <Link href="migration">
                  <button className="btn btn--secondary">Load More </button>
                </Link>
              </div>
              <div className="social justify-content-center">
                <Link href="https://wa.me/+923000701999" target="_blank">
                  <i className="fa-brands fa-whatsapp"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="author">
                <div className="thumb">
                  <Image
                    src={ChoosingFieldIstikhara}
                    alt="istikhara-for-choosing-field"
                  />
                </div>
                <div className="author-meta">
                  <h5>Istikhara</h5>
                  <p>For Choosing Field</p>
                </div>
              </div>
              <hr />
              <div className="section__content-cta text-center">
                <Link href="choosing-field">
                  <button className="btn btn--secondary">Load More </button>
                </Link>
              </div>
              <div className="social justify-content-center">
                <Link href="https://wa.me/+923000701999" target="_blank">
                  <i className="fa-brands fa-whatsapp"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="author">
                <div className="thumb">
                  <Image
                    src={CourtCaseIstikhara}
                    alt="istikhara-for-court-case"
                  />
                </div>
                <div className="author-meta">
                  <h5>Istikhara</h5>
                  <p>For Court Case</p>
                </div>
              </div>
              <hr />
              <div className="section__content-cta text-center">
                <Link href="court-case">
                  <button className="btn btn--secondary">Load More </button>
                </Link>
              </div>
              <div className="social justify-content-center">
                <Link href="https://wa.me/+923000701999" target="_blank">
                  <i className="fa-brands fa-whatsapp"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="author">
                <div className="thumb">
                  <Image src={JobIstikhara} alt="istikhara-for-job" />
                </div>
                <div className="author-meta">
                  <h5>Istikhara</h5>
                  <p>For Job</p>
                </div>
              </div>
              <hr />
              <div className="section__content-cta text-center">
                <Link href="job">
                  <button className="btn btn--secondary">Load More </button>
                </Link>
              </div>
              <div className="social justify-content-center">
                <Link href="https://wa.me/+923000701999" target="_blank">
                  <i className="fa-brands fa-whatsapp"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="author">
                <div className="thumb">
                  <Image src={HealthIstikhara} alt="istikhara-for-health" />
                </div>
                <div className="author-meta">
                  <h5>Istikhara</h5>
                  <p>For Health</p>
                </div>
              </div>
              <hr />
              <div className="section__content-cta text-center">
                <Link href="health">
                  <button className="btn btn--secondary">Load More </button>
                </Link>
              </div>
              <div className="social justify-content-center">
                <Link href="https://wa.me/+923000701999" target="_blank">
                  <i className="fa-brands fa-whatsapp"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="author">
                <div className="thumb">
                  <Image src={HealingIstikhara} alt="istikhara-for-healing" />
                </div>
                <div className="author-meta">
                  <h5>Istikhara</h5>
                  <p>For Healing</p>
                </div>
              </div>
              <hr />
              <div className="section__content-cta text-center">
                <Link href="healing">
                  <button className="btn btn--secondary">Load More </button>
                </Link>
              </div>
              <div className="social justify-content-center">
                <Link href="https://wa.me/+923000701999" target="_blank">
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

export default IstikharaSection;
