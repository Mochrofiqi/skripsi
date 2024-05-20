import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const NavBar = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const location = useLocation();

  return (
    <div className="sticky top-0 z-30 w-full transition-all duration-300 ease-in-out bg-transparent lg:mb-0">
      <nav className="z-10 flex items-center justify-between w-full transition-all duration-300 ease-in-out bg-white shadow-2xl lg:py-1 lg:px-16 xl:px-24 2xl:px-32">
        <Link to="/">
          <img src="/fit-aja-logo.svg" alt="FIT AJA LOGO" />
        </Link>
        <ul className="hidden gap-10 text-xl font-normal text-primary-200 font-roboto lg:flex lg:pl-4">
          <NavItem to="/" active={location.pathname === "/"}>
            Home
          </NavItem>
          <NavItem to="/fitur" active={location.pathname === "/fitur"}>
            Fitur
          </NavItem>
          <NavItem to="/about" active={location.pathname === "/about"}>
            Tentang
          </NavItem>
          <NavItem to="/news" active={location.pathname === "/news"}>
            Cerita
          </NavItem>
          <NavItem
            to="/contact-us"
            active={location.pathname === "/contact-us"}
          >
            Hubungi Kami
          </NavItem>
        </ul>

        <div className="block lg:hidden">
          <div
            className="relative"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
            onClickOutside={() => setOpenMobileMenu(false)}
          >
            <div>
              <button className="inline-flex items-center py-2 text-sm font-medium leading-4 text-gray-500 transition-all duration-300 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="20"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
                  </svg>
                </div>
              </button>
            </div>

            {openMobileMenu && (
              <div className="w-screen overflow-hidden h-screen fixed top-0 text-white bg-primary-200 z-50 48 shadow-lg origin-top-right right-0">
                <div className="w-full h-screen overflow-hidden max-w-mdbg-primary-200">
                  <div className="flex items-center justify-between w-full px-4 mb-2 border-b border-white">
                    <Link to="/">
                      <img src="/fitaja-white.svg" alt="FIT AJA LOGO WHITE" />
                    </Link>
                    <button
                      id="mobileButton"
                      onClick={() => setOpenMobileMenu(false)}
                      className="inline-flex items-center px-3 text-2xl font-bold leading-4 text-white transition-all duration-300 ease-in-out border border-transparent rounded-md bg-primary-200 focus:outline-none"
                    >
                      <div>✕</div>
                    </button>
                  </div>
                  <NavItemMobile to="/" active={location.pathname === "/"}>
                    Home
                  </NavItemMobile>
                  <NavItemMobile
                    to="/about"
                    active={location.pathname === "/about"}
                  >
                    Tentang
                  </NavItemMobile>
                  <NavItemMobile
                    to="/fitur"
                    active={location.pathname === "/fitur"}
                  >
                    Fitur
                  </NavItemMobile>
                  <NavItemMobile
                    to="/news"
                    active={location.pathname === "/news"}
                  >
                    Cerita
                  </NavItemMobile>
                  <NavItemMobile
                    to="/contact-us"
                    active={location.pathname === "/contact-us"}
                  >
                    Hubungi Kami
                  </NavItemMobile>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

// Component for navigation item in desktop view
function NavItem({ to, active, children }) {
  return (
    <Link to={to}>
      <li
        className={`px-6 py-2 transition-all font-medium duration-300 ${
          active ? "font-semibold" : "hover:bg-primary-200 hover:text-white hover:rounded-lg hover:font-bold"
        }`}
      >
        {children}
      </li>
    </Link>
  );
}

// Component for navigation item in mobile view
function NavItemMobile({ to, active, children }) {
  return (
    <Link
      to={to}
      className={`flex items-center justify-between py-4 pl-2 mx-6 text-xl font-extrabold transition-all duration-300 cursor-pointer ${
        active ? "text-white" : "text-primary-200"
      }`}
    >
      {children}
    </Link>
  );
}

export default NavBar;
