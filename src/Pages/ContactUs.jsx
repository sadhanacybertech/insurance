import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-insurance-section">

      {/* ================= HERO ================= */}
      <div className="contact-hero">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <span className="contact-tag">Contact Us</span>

              <h1 className="contact-title">
                We’re Here to Help You <br />
                with the Right Insurance
              </h1>

              <p className="contact-desc">
                Have questions about life, health, or auto insurance?
                Our experts are ready to guide you with transparent
                advice and reliable support.
              </p>
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
              <FaPhoneAlt />
              <div>
                <h5>Call Us</h5>
                <p>+91 84238 11106</p>
              </div>
            </div>

            <div className="contact-info-box">
              <FaEnvelope />
              <div>
                <h5>Email Us</h5>
                <p>support@insurancecompany.com</p>
              </div>
            </div>

            <div className="contact-info-box">
              <FaMapMarkerAlt />
              <div>
                <h5>Visit Office</h5>
                <p>
                  2nd Floor, Business Park,<br />
                  New Delhi, India
                </p>
              </div>
            </div>

            <div className="contact-info-box">
              <FaClock />
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

                  <div className="col-12">
                    <button className="contact-btn">
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
