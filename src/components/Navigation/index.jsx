import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "../Icon";
import { join } from "../../utils";
import Logo from "../Logo";

import "./_index.scss";
import { useTheme } from "../AppProvider";

const Menu = ({
  show,
  shuffle,
  onClose,
  className,
  onNavigate,
  shuffleComponent,
}) => {
  return (
    <div
      className={join("menu-container-mobile", show, shuffle?.title, className)}
    >
      <button
        aria-label="Close Menu"
        className={join("menu-close", className)}
        onClick={() => onClose(false)}
      >
        {" "}
        <Icon>close</Icon>
      </button>
      <div className="menu-list-items">
        <button
          aria-label="Home page"
          className="menu-item"
          onClick={() => {
            onClose();
            onNavigate("/", "mobile");
          }}
        >
          <p className={join("p", className)}>HOME</p>
        </button>
        <button
          aria-label="About Page"
          className="menu-item"
          onClick={() => {
            onClose();
            onNavigate("about", "mobile");
          }}
        >
          <p className={join("p", className)}>ABOUT</p>
        </button>
        <button
          aria-label="Portfolio page"
          className="menu-item"
          onClick={() => {
            onClose();
            onNavigate("work", "mobile");
          }}
        >
          <p className={join("p", className)}>WORK</p>
        </button>
        <button
          aria-label="Contact"
          className="menu-item"
          onClick={() => {
            onClose();
            onNavigate("/#contact", "mobile");
          }}
        >
          <p className={join("p", className)}>CONTACT</p>
        </button>
        {shuffleComponent}
      </div>
    </div>
  );
};

function Navigation({ shuffleComponent }) {
  const [openSideBar, setOpenSideBar] = useState(false);
  const { shuffle } = useTheme();
  const style = shuffle?.style;
  const className = style ? "dark" : "";

  const navigate = useNavigate();
  const handleExpandMenu = (route, size) => {
    const elemId =
      size === "mobile" ? "navigation-mobile" : "site-logo-container";
    const element = document.getElementById(elemId);
    element.classList.remove(elemId);
    void element.offsetWidth;
    element.classList.add(elemId);
    setTimeout(() => {
      navigate(route);
    }, 500);
  };

  return (
    <>
      <div
        role="navigation"
        id="navigation-mobile"
        className={join(
          "flex-center-xy",
          "navigation-mobile",
          className,
          shuffle?.title
        )}
      >
        <a className={join( "p", "skip-content")} href='#main'>
          Skip To Page Content
        </a>
        <div className={join("navigation-logo-mobile", className)}>
          <Logo />
        </div>
        <div>
          <button
            className={join("menu-button", className)}
            onClick={() => setOpenSideBar(true)}
          >
            <Icon>menu</Icon>
          </button>
        </div>
        <Menu
          shuffle={shuffle}
          className={className}
          show={openSideBar ? "show" : ""}
          onClose={setOpenSideBar}
          onNavigate={handleExpandMenu}
          shuffleComponent={shuffleComponent}
        />
      </div>
      <div
        className="navigation-container"
        role="navigation"
        aria-label="Navigation Desktop"
      >
        <a className={join( "p", "skip-content")} href='#main'>
          Skip To Page Content
        </a>
        <div
          id="site-logo-container"
          className={join("site-logo-container", shuffle.title, className)}
        >
          <div className="navigation-logo">
            <Logo />
          </div>
          {shuffleComponent}
          <button
            aria-label="open Jose Aguilar Linkedin"
            href="https://www.linkedin.com/in/chema-aguilar/"
            target="_blank"
            id="linkedin-button"
            className={join("linkedin-button", shuffle?.title, className)}
          >
            <p>in</p>
          </button>
          <button
            aria-label="go top of the page"
            onClick={() => window.scrollTo(0, 0)}
            id="go-up-button"
            className={join("go-up-button", shuffle?.title, className)}
          >
            <Icon>arrow_drop_up</Icon>
          </button>
        </div>
        <nav className={join("navigation-normal", "flex")}>
          <div
            className={join("navigation-items", "flex-center-xy", className)}
          >
            <button onClick={() => handleExpandMenu("/")}>HOME</button>
            <button onClick={() => handleExpandMenu("about")}>ABOUT ME</button>
            <button onClick={() => handleExpandMenu("work")}>WORK</button>
            <button
              className={join("hire-button", shuffle.title)}
              onClick={() => handleExpandMenu("/#contact")}
            >
              <Icon>arrow_right_alt</Icon>
              CONTACT ME
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
