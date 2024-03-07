import React, { useState } from "react";
import navbar from "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import logo from "../../assets/logo.svg";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#gpt3">What</a>
    </p>
    <p>
      <a href="#possiblity">OpenAi</a>
    </p>
    <p>
      <a href="#Features">Case Studies </a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gptLogo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gptLinkContainer">
          <Menu />
        </div>
      </div>
          <div className="gpt3__navbarSign">
            <button>Sign In</button>
            <button>Sign Up</button>
          </div>

          <div className="NavbarMenu">
            {toggleMenu ? (
              <RiCloseLine
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className="containerNavbar scale-up-center">
                <div className="containerNavbarLinks">
                  <Menu />
                  <div className="gpt3__navbarSign-menu">
                    <button>Sign In</button>
                    <button>Sign Up</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
  );
};

export default Navbar;
