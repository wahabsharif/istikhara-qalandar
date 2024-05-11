import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "public/images/logo/istikhara-qalandar-landscape-white.webp";
import logoLight from "public/images/logo/istikhara-qalandar-landscape-white.webp";
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
                <nav className="navbar">
                  <div className="navbar__logo">
                    <Link href="/" aria-label="go to home" prefetch={false}>
                      <Image
                        src={logoSrc}
                        priority
                        width={100}
                        height={50}
                        alt="istikhara-qalandar-logo"
                      />
                    </Link>
                  </div>
                  <div className="navbar__menu">
                    <ul>
                      <li className="navbar__item nav-fade">
                        <Link
                          href="/"
                          className="navbar__item__link"
                          prefetch={false}
                        >
                          Home
                        </Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link
                          href="about"
                          className="navbar__item__link"
                          prefetch={false}
                        >
                          About
                        </Link>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          <Link href="istikhara" prefetch={false}>
                            Istikhara
                          </Link>
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="marriage" prefetch={false}>
                              Marriage
                            </Link>
                          </li>
                          <li>
                            <Link href="black-magic" prefetch={false}>
                              Black Magic
                            </Link>
                          </li>
                          <li>
                            <Link href="love-magic-spell" prefetch={false}>
                              Love Magic Spell
                            </Link>
                          </li>
                          <li>
                            <Link href="cure-black-magic" prefetch={false}>
                              Cure Black Magic
                            </Link>
                          </li>
                          <li>
                            <Link href="job" prefetch={false}>
                              Job
                            </Link>
                          </li>
                          <li>
                            <Link href="choosing-field" prefetch={false}>
                              Choosing Field
                            </Link>
                          </li>
                          <li>
                            <Link href="court-case" prefetch={false}>
                              Court Case
                            </Link>
                          </li>
                          <li>
                            <Link href="migration" prefetch={false}>
                              Migration
                            </Link>
                          </li>
                          <li>
                            <Link href="health" prefetch={false}>
                              Health
                            </Link>
                          </li>
                          <li>
                            <Link href="healing" prefetch={false}>
                              Healing
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          <Link href="numerology" prefetch={false}>
                            Numerology
                          </Link>
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="travel-migration" prefetch={false}>
                              Travel/Migration
                            </Link>
                          </li>
                          <li>
                            <Link href="perfect-life-partner" prefetch={false}>
                              Perfect Life Partner
                            </Link>
                          </li>
                          <li>
                            <Link href="new-born-baby" prefetch={false}>
                              Name For New Born Baby
                            </Link>
                          </li>
                          <li>
                            <Link href="stone-and-colors" prefetch={false}>
                              Stones & Colors In Life
                            </Link>
                          </li>
                          <li>
                            <Link href="carrier-counselling" prefetch={false}>
                              Carrier Counselling
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link
                          href="wazaif"
                          className="navbar__item__link"
                          prefetch={false}
                        >
                          Wazaif
                        </Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link
                          href="contact"
                          className="navbar__item__link"
                          prefetch={false}
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="navbar__options">
                    <div className="navbar__mobile-options d-none d-sm-flex">
                      <Link
                        href="contact"
                        className="btn btn--secondary"
                        prefetch={false}
                      >
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
