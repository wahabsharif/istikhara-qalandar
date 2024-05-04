import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo/istikhara-qalandar-logo-white.svg";
// import devIcon from "public/images/logo/developer-icon.ico";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="footer section pb-0"
      style={{ backgroundImage: "url('/images/footer/footer-bg.webp')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3 col-xl-3 text-center">
            <div className="logo">
              <Link href="/">
                <Image
                  src={logo}
                  width={200}
                  alt="istikhara-qalandar-footer-logo"
                />
              </Link>
            </div>
            <div className="footer__single">
              <div className="align-align-items-center">
                <div className="social justify-content-center justify-content-lg-start">
                  <Link href="https://www.facebook.com/" target="_blank">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link href="https://www.twitter.com/" target="_blank">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link href="https://www.pinterest.com/" target="_blank">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                  <Link href="https://www.instagram.com/" target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-xl-3">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>Our Services</h5>
              </div>
              <div className="footer__single-content">
                <ul>
                  <li>
                    <Link href="istikhara">Istikhara</Link>
                  </li>
                  <li>
                    <Link href="numerology">numerology</Link>
                  </li>
                  <li>
                    <Link href="wazaif">Wazaif</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-xl-3">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>Useful Links</h5>
              </div>
              <div className="footer__single-content">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="about">About</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-xl-3">
            <div className="footer__single-intro">
              <h5>Contact Us</h5>
            </div>
            <div className="footer__single-meta">
              <Link href="tel:+923000701999">
                <i className="fa-sharp fa-solid fa-phone-volume"></i>
                +92 300 0701999
              </Link>
              <Link href="mailto:hussian.qalandar@yahoo.com">
                <i className="fa-sharp fa-solid fa-envelope"></i>
                hussian.qalandar@yahoo.com
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__copyright">
              <div className="row align-items-center gaper">
                <div className="footer__copyright-text text-center text-lg-start">
                  <p>
                    Copyright &copy;
                    <span id="copyYear">{currentYear}</span> Istikhara Qalandar.
                    All Rights Reserved
                    {/* <Link
                      href="https://wahabsharif.me/"
                      className=""
                      target="_blank"
                    >
                      <Image src={devIcon} width={32} alt="Image" />
                    </Link> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
