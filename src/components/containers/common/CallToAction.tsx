import React from "react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="cta-two section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-11">
            <div
              className="cta-two-wrapper bg-img"
              style={{
                backgroundImage: "url('/images/call-to-action-image.webp')",
              }}
            >
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="cta-two__content">
                    <span>Hello !</span>
                    <h2 className="title-anim">
                      Are You Facing Problems In Your Life?
                    </h2>
                    <h5>
                      <Link href="tel:19-3265-003-420">
                        Reach us out to Solve them: +19 3265 003 420
                      </Link>
                    </h5>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="text-start text-lg-end">
                    <Link href="contact" className="btn btn--tertiary">
                      Contact Us
                      <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
