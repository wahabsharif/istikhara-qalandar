import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo/istikhara-qalandar-landscape-white.svg";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
}

const Offcanvas = ({ openNav, setOpenNav }: HeaderProps) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [openNestedMenu, setOpenNestedMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const handleNestedmenu = (nestmenu: string) => {
    if (nestmenu === openNestedMenu) {
      setOpenNestedMenu(null);
    } else {
      setOpenNestedMenu(nestmenu);
    }
  };

  const isNestedMenuOpen = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? " nav__dropdown-active" : " ";
  };

  const isNestedMenuButton = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? " navbar__item-active" : " ";
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? " nav__dropdown-active" : " ";
  };

  const isSubMenuButton = (submenu: string) => {
    return submenu === openSubMenu ? " navbar__item-active" : " ";
  };

  // window resize
  useEffect(() => {
    const handleResizeHeader = (): void => {
      setOpenNav(false);
      setOpenSubMenu(null);
    };

    window.addEventListener("resize", handleResizeHeader);

    return () => {
      window.removeEventListener("resize", handleResizeHeader);
    };
  }, []);

  const closeNav = () => {
    setOpenNav(false);
    setOpenSubMenu(null);
  };

  return (
    <div className="offcanvas-nav">
      <div
        className={"offcanvas-menu" + (openNav ? " show-offcanvas-menu" : " ")}
      >
        <nav className="offcanvas-menu__wrapper" data-lenis-prevent>
          <div className="offcanvas-menu__header nav-fade">
            <div className="logo">
              <Link href="/">
                <Image
                  src={logo}
                  width={100}
                  alt="istikhara-qalandar-logo"
                  title="istikhara-qalandar-logo"
                  priority
                />
              </Link>
            </div>
            <button
              aria-label="close offcanvas menu"
              className="close-offcanvas-menu"
              onClick={closeNav}
            >
              <i className="fa-light fa-xmark-large"></i>
            </button>
          </div>
          <div className="offcanvas-menu__list">
            <div className="navbar__menu">
              <ul>
                <li className="navbar__item nav-fade">
                  <Link href="/">Home</Link>
                </li>
                <li className="navbar__item nav-fade">
                  <Link href="about">About</Link>
                </li>
                <li className="navbar__item navbar__item--has-children nav-fade">
                  <button
                    aria-label="dropdown menu"
                    className={`navbar__dropdown-label ${isSubMenuButton(
                      "istikhara"
                    )}`}
                    onClick={() => handleSubmenu("istikhara")}
                  >
                    Istikhara
                  </button>
                  <ul
                    className={`navbar__sub-menu ${isSubMenuOpen("istikhara")}`}
                  >
                    <li>
                      <Link href="istikhara">Istikhara</Link>
                    </li>
                    <li>
                      <Link href="marriage">Marriage</Link>
                    </li>
                    <li>
                      <Link href="black-magic">Black Magic</Link>
                    </li>
                    <li>
                      <Link href="love-magic-spell">Love Magic Spell</Link>
                    </li>
                    <li>
                      <Link href="cure-black-magic">Cure Black Magic</Link>
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
                    className={`navbar__dropdown-label ${isSubMenuButton(
                      "numerology"
                    )}`}
                    onClick={() => handleSubmenu("numerology")}
                  >
                    Numerology
                  </button>
                  <ul
                    className={`navbar__sub-menu ${isSubMenuOpen(
                      "numerology"
                    )}`}
                  >
                    <li>
                      <Link href="numerology">Numerology</Link>
                    </li>
                    <li>
                      <Link href="travel-migration">Travel/Migration</Link>
                    </li>
                    <li>
                      <Link href="perfect-life-partner">
                        Perfect Life Partner
                      </Link>
                    </li>
                    <li>
                      <Link href="new-born-baby">Name For New Born Baby</Link>
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
                  <Link href="wazaif">Wazaif</Link>
                </li>
                <li className="navbar__item nav-fade">
                  <Link href="contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="offcanvas-menu__options nav-fade">
            <div className="offcanvas__mobile-options d-flex">
              <Link href="contact" className="btn btn--secondary">
                Let&apos;s Talk
              </Link>
            </div>
          </div>
          <div className="offcanvas-menu__social social nav-fade">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              aria-label="share us on facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link
              href="https://www.twitter.com/"
              target="_blank"
              aria-label="share us on twitter"
            >
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link
              href="https://www.pinterest.com/"
              target="_blank"
              aria-label="share us on pinterest"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              aria-label="share us on instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Offcanvas;
