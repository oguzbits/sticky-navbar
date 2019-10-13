import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import "./navBar.css";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    setSticky(ref.current.getBoundingClientRect().top <= 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pageLink = (to, name) => {
    return (
      <div>
        <Link
          activeClass="active"
          to={to}
          spy={true}
          smooth={true}
          offset={0}
          duration={600}>
          <div>
            <p>{name}</p>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div className={`sticky-wrapper${isSticky ? " sticky" : ""}`} ref={ref}>
      <nav>
        <div className="nav-links">
          {toggle && (
            <div>
              <div className="nav-order">
                <div className="home-link">{pageLink("home", "Home")}</div>
                <div className="about-link"> {pageLink("about", "About")}</div>
                <div className="contact-link">
                  {pageLink("contact", "Contact")}
                </div>
              </div>
              <style jsx="true">
                {`
                  .line1 {
                    transform: rotate(-45deg) translate(-6px, 6px);
                  }
                  .line2 {
                    opacity: 0;
                  }
                  .line3 {
                    transform: rotate(45deg) translate(-8px, -8px);
                  }
                `}
              </style>
            </div>
          )}
          <div className="burger" onClick={() => setToggle(!toggle)}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
