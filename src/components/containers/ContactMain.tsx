import React from "react";
import Image from "next/image";
import Link from "next/link";
import phone from "public/images/istikhara-qalandar-icon-phone.webp";
import mail from "public/images/istikhara-qalandar-icon-mail.webp";

const ContactMain = () => {
  return (
    <section className="section contact-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-sm-6 col-xl-6">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={phone} alt="istikhara-qalandar-icon-phone" />
              </div>
              <div className="content">
                <h4>Phone</h4>
                <p>
                  <Link href="tel:923000701999">Mobile : +92 300 0701999</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-6">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={mail} alt="istikhara-qalandar-icon-mail" />
              </div>
              <div className="content">
                <h4>Mail Address</h4>
                <p>
                  <Link href="mailto:hussian.qalandar@yahoo.com">
                    hussian.qalandar@yahoo.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="map-wrapper">
            <div className="row gaper">
              <div className="col-12">
                <div className="contact-main__form  fade-top">
                  <h3>Leave A Message</h3>
                  <form
                    action="#"
                    method="post"
                    className="section__content-cta"
                  >
                    <div className="group-wrapper">
                      <div className="group-input ">
                        <input
                          type="text"
                          name="contact-name"
                          id="contactName"
                          placeholder="Name"
                        />
                      </div>
                      <div className="group-input ">
                        <input
                          type="email"
                          name="contact-email"
                          id="contactEmail"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="group-input drt">
                      <select className="subject">
                        <option data-display="Subject">Select The Topic</option>
                        <option value="1">Istikhara</option>
                        <option value="2">Numerology</option>
                        <option value="3">Wazaif</option>
                        <option value="4">Other Life Issues</option>
                      </select>
                    </div>
                    <div className="group-input ">
                      <textarea
                        name="contact-message"
                        id="contactMessage"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="form-cta justify-content-start">
                      <button type="submit" className="btn btn--primary">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;
