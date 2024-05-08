import React from "react";
import Link from "next/link";

const FloatingSocialIcons = () => {
  return (
    <div>
      <div className="floating-socials">
        <div className="mainop">
          <i id="addIcon" className="material-icons fa-brands fa-plus"></i>
        </div>
        <div id="forms" className="minifloating-socials">
          <Link
            href="https://www.facebook.com/istikharaqalandar/"
            target="_blank"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </Link>
        </div>
        <div id="forms" className="minifloating-socials">
          <Link href="#" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </div>
        <div id="forms" className="minifloating-socials">
          <Link href="https://wa.me/+923000701999" target="_blank">
            <i className="fa-brands fa-whatsapp"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FloatingSocialIcons;
