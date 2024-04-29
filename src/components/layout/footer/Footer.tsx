import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo/istikhara-qalandar-logo-dark.svg";
// import devIcon from "public/images/logo/developer-icon.ico";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="footer section pb-0"
      style={{ backgroundImage: "url('/images/footer/footer-bg.png')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3 col-xl-3">
            <Link href="/" className="logo">
              <Image src={logo} width={150} alt="Image" />
            </Link>
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
              <Link
                href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                target="_blank"
              >
                <i className="fa-sharp fa-solid fa-location-dot"></i>
                901 N Pitt Str., Suite 170 Alexandria, USA
              </Link>
              <Link href="tel:406-555-0120">
                <i className="fa-sharp fa-solid fa-phone-volume"></i>
                (406) 555-0120
              </Link>
              <Link href="mailto:info@istikhara-qalandar.com">
                <i className="fa-sharp fa-solid fa-envelope"></i>
                info@istikhara-qalandar.com
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
