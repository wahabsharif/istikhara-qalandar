import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "public/images/logo/istikhara-qalandar-landscape-white.svg";
import logoLight from "public/images/logo/istikhara-qalandar-landscape-white.svg";
import Offcanvas from "./Offcanvas";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const Header = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const defaultClasses = "primary-navbar cmn-nav";

  const combinedClasses = `${
    scrolled ? " navbar-active" : " "
  } ${defaultClasses}`;

  let logoSrc = logo;

  const router = useRouter();
  if (router.pathname === "/index-two-light") {
    logoSrc = logoLight;
  }

  return (
    <>
      <header className="header">
        <div className={combinedClasses}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__logo">
                    <Link href="/" aria-label="go to home">
                      <Image
                        src={logoSrc}
                        priority
                        width={150}
                        alt="istikhara-qalandar-logo"
                      />
                    </Link>
                  </div>
                  <div className="navbar__menu">
                    <ul>
                      <li className="navbar__item nav-fade">
                        <Link href="/" className="navbar__item__link">
                          Home
                        </Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="about" className="navbar__item__link">
                          About
                        </Link>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          <a href="istikhara">Istikhara</a>
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="marriage">Marriage</Link>
                          </li>
                          <li>
                            <Link href="job">Job</Link>
                          </li>
                          <li>
                            <Link href="choosing-field">Choosing Field</Link>
                          </li>
                          <li>
                            <Link href="court-case">Court Case</Link>
                          </li>
                          <li>
                            <Link href="migration">Migration</Link>
                          </li>
                          <li>
                            <Link href="health">Health</Link>
                          </li>
                          <li>
                            <Link href="healing">Healing</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          <a href="numerology">Numerology</a>
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="travel-migration">
                              Travel/Migration
                            </Link>
                          </li>
                          <li>
                            <Link href="perfect-life-partner">
                              Perfect Life Partner
                            </Link>
                          </li>
                          <li>
                            <Link href="new-born-baby">
                              Name For New Born Baby
                            </Link>
                          </li>
                          <li>
                            <Link href="stone-and-colors">
                              Stones & Colors In Life
                            </Link>
                          </li>
                          <li>
                            <Link href="carrier-counselling">
                              Carrier Counselling
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="wazaif" className="navbar__item__link">
                          Wazaif
                        </Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="contact" className="navbar__item__link">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="navbar__options">
                    <div className="navbar__mobile-options d-none d-sm-flex">
                      <Link href="contact" className="btn btn--secondary">
                        Let&apos;s Talk
                      </Link>
                    </div>
                    <button
                      className="open-mobile-menu d-flex d-xl-none"
                      aria-label="toggle mobile menu"
                      onClick={handleNav}
                    >
                      <i className="fa-light fa-bars-staggered"></i>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
};

export default Header;
