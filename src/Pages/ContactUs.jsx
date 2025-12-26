import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-insurance-section">

      {/* ================= HERO ================= */}
      <div className="contact-hero">
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>

        <div className="container">
          <div className="row">
            <div className="col text-center">

              <span className="contact-tag">CONTACT US</span>

              <h1 className="contact-title">
                Let’s Talk About <br />
                <span>Your Insurance Needs</span>
              </h1>

              <p className="contact-desc">
                Whether it’s life, health, or auto insurance — our licensed
                experts are ready to guide you with clarity, confidence,
                and transparent advice.
              </p>

              <div className="contact-hero-actions">
                <a href="/contact" className="hero-btn primary">
                  Get a Free Quote
                </a>

                <a href="tel:+918423811106" className="hero-btn secondary">
                  Talk to an Expert
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container contact-content">
        <div className="row g-5 align-items-stretch">

          {/* LEFT INFO */}
          <div className="col-lg-5">

            <div className="contact-info-box">
              <div className="icon-wrap"><FaPhoneAlt /></div>
              <div>
                <h5>Call Us</h5>
                <p>
                  <a href="tel:+918423811106" className="contact-link">
                    +91 84238 11106
                  </a>
                </p>
              </div>

            </div>

            <div className="contact-info-box">
              <div className="icon-wrap"><FaEnvelope /></div>
              <div>
                <h5>Email Us</h5>
                <p>
                  <a
                    href="mailto:support@insurancecompany.com"
                    className="contact-link"
                  >
                    support@insurancecompany.com
                  </a>
                </p>
              </div>

            </div>

            <div className="contact-info-box">
              <div className="icon-wrap"><FaMapMarkerAlt /></div>
              <div>
                <h5>Visit Office</h5>
                <p>
                  2nd Floor, Business Park,<br />
                  New Delhi, India
                </p>
              </div>
            </div>

            <div className="contact-info-box">
              <div className="icon-wrap"><FaClock /></div>
              <div>
                <h5>Working Hours</h5>
                <p>Mon – Sat: 9:00 AM – 6:00 PM</p>
              </div>
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="col-lg-7">
            <div className="contact-form-box">
              <h4>Send Us a Message</h4>
              <p className="form-subtext">
                Fill out the form and our team will contact you shortly.
              </p>

              <form>
                <div className="row g-3">

                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>

                  <div className="col-md-6">
                    <input type="email" className="form-control" placeholder="Email Address" />
                  </div>

                  <div className="col-md-6">
                    <input type="tel" className="form-control" placeholder="Phone Number" />
                  </div>

                  <div className="col-md-6">
                    <select className="form-control">
                      <option>Select Insurance Type</option>
                      <option>Life Insurance</option>
                      <option>Health Insurance</option>
                      <option>Auto Insurance</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Your Message"
                    ></textarea>
                  </div>

                  <div className="col-12 text-start">
                    <button type="submit" className="contact-btn-sm">
                      Submit Inquiry
                 
                    </button>
                  </div>


                </div>
              </form>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default ContactUs;
