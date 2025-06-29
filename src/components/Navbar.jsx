import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav
      className="navbar navbar-expand-lg text-white shadow-sm"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "#131110",
      }}
    >
      <div className="container p-2">
        {/* Logo + Heading */}
        <Link
          className="navbar-brand d-flex align-items-center text-white"
          to="/"
        >
          <img src="./99-Vihar-Logo.png" alt="logo" width={70} />
          <div className="ms-3">
            <h4 className="mb-0 fw-bold">99 VIHAR</h4>
            <small className="fw-semibold">
              वही प्रॉपर्टी दिखेगा जो सही होगा
            </small>
          </div>
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link text-white ${
                  location.pathname === "/" ? "fw-bold text-warning" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-white ${
                  location.pathname === "/AboutPage"
                    ? "fw-bold text-warning"
                    : ""
                }`}
                to="/AboutPage"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-white ${
                  location.pathname === "/PropertyPage"
                    ? "fw-bold text-warning"
                    : ""
                }`}
                to="/PropertyPage"
              >
                Property
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-white ${
                  location.pathname === "/contact" ? "fw-bold text-warning" : ""
                }`}
                to="/NavContactPage"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Link Hover Style */}
      <style>{`
        .nav-link {
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          color: #ff9933 !important;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
