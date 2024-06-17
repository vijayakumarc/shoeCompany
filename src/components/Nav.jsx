import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constant";

const Nav = () => {
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const headerOffset = 140; // Adjust based on your header height
    const element = document.getElementById(id);
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };
  return (
    <header className="padding-x py-8 z-40 w-full fixed bg-white shadow-sm">
      <nav className="flex justify-between items-center max-container">
        <a href="">
          <img src={headerLogo} alt="header logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden lg:pr-10">
          {navLinks.map((item, i) => (
            <li key={i}>
              <a
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.value)}
                className="font-montserrat leading-normal text-lg text-slate-gray"

              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="max-lg:block hidden">
            <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
