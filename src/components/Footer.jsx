import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#4d4d4d",
        color: "#fff",
        padding: "60px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gradient separator */}
      <div
        style={{
          height: "3px",
          width: "120px",
          background: "linear-gradient(to right, #ff9933, #ffcc66)",
          margin: "0 auto 40px auto",
        }}
      />

      <div className="container">
        <div className="row gy-4">
          {/* Logo & Quote */}
          <div className="col-12 col-md-4 text-center text-md-start">
            <img
              src="./99-Vihar-Logo.png"
              alt="99 Vihar Logo"
              style={{ width: "120px" }}
              className="mb-3"
            />
            <h4 className="fw-bold">99 VIHAR</h4>

            <div
              className="mt-3"
              style={{
                backgroundColor: "#2c2c2c",
                borderLeft: "5px solid #00d084",
                padding: "16px",
                fontSize: "15px",
                borderRadius: "6px",
              }}
            >
              <span style={{ fontSize: "20px", marginRight: "8px" }}>❝</span>
              सभी प्रकार के फ्लैट एवं प्लॉट खरीदना चाहते हैं, संपर्क करें हमारी टीम से — 24x7 सेवा फ्री में।
            </div>

            {/* Social Icons */}
            <div className="mt-4 d-flex justify-content-center justify-content-md-start gap-3">
              {[
                { icon: "facebook-f", link: "https://www.facebook.com/sharer/sharer.php?u=99vihar.in/" },
                { icon: "x-twitter", link: "https://x.com/intent/post?url=99vihar.in%2F" },
                { icon: "instagram", link: "https://www.instagram.com/99vihar?igsh=MXJjYTNhbTR1ZGFscw==" },
                { icon: "youtube", link: "https://www.youtube.com/@99VIHAR-uz9tm" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "#666",
                    color: "#fff",
                    textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#ff9933")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#666")}
                >
                  <i className={`fab fa-${item.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-2 text-center text-md-start">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            {["Home", "About", "Property", "Pricing"].map((link, i) => (
              <p key={i} style={{ marginBottom: "8px" }}>
                <a href="/" style={{ color: "#ccc", textDecoration: "none" }}>
                  {link}
                </a>
              </p>
            ))}
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-3 text-center text-md-start">
            <h6 className="fw-bold mb-3">Contact Us</h6>
            <p>
              <i className="fas fa-map-marker-alt me-2"></i>
              1th Floor Haripur Allouth, Musrigharari, Samastipur, Bihar 848101
            </p>
            <p>
              <i className="fas fa-phone-alt me-2"></i>
              +91 7070501157
            </p>
            <p>
              <i className="fas fa-envelope me-2"></i>
              info@99vihar.in
            </p>
          </div>

          {/* Newsletter */}
          <div className="col-12 col-md-3 text-center text-md-start">
            <h6 className="fw-bold mb-3">Newsletter</h6>
            <p>Get weekly property updates straight to your inbox.</p>
            <div className="d-flex">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                style={{ borderRadius: "4px 0 0 4px", border: "none" }}
              />
              <button
                className="btn"
                style={{
                  backgroundColor: "#ff9933",
                  color: "#fff",
                  borderRadius: "0 4px 4px 0",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        className="text-center mt-5"
        style={{ borderTop: "1px solid #666", paddingTop: "20px", fontSize: "14px" }}
      >
        &copy; {new Date().getFullYear()} 99 Vihar Pvt. Ltd. All rights reserved. <br />
        Developed by ishwar group

      </div>
    </footer>
  );
};

export default Footer;
