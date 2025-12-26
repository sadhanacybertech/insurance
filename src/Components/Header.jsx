import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    closeNavbar();
  };

  const closeNavbar = () => {
    const navbar = document.getElementById("mainNavbar");
    if (navbar && navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-insurance sticky-top shadow-sm">
      <div className="container">

        {/* Logo */}
        <Link
          className="navbar-brand d-flex align-items-center gap-2"
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            closeNavbar();
          }}
        >
          <span className="logo-icon">🛡️</span>
          <span className="logo-text">Insurance</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="mainNavbar">

          <ul className="navbar-nav mx-auto align-items-lg-center gap-lg-3">

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  closeNavbar();
                }}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <button
                className="nav-link btn-link"
                onClick={() => scrollToSection("services")}
              >
                Services
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link btn-link"
                onClick={() => scrollToSection("about")}
              >
                About
              </button>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/autoinsurance"
                onClick={closeNavbar}
              >
                Auto Insurance
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/lifeinsurance"
                onClick={closeNavbar}
              >
                Life Insurance
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                onClick={closeNavbar}
              >
                Contact
              </NavLink>
            </li>

          </ul>

          {/* RIGHT CTA */}
          <div className="d-lg-flex ms-lg-3">
            <NavLink
              className="btn btn-quote text-white"
              to="/contact"
              onClick={closeNavbar}
            >
              Get a Quote
            </NavLink>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Header;
