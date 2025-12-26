import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Life-Insurance.css";
import heroBg from "../assets/life-insurance.webp"; // background image
import { FaArrowRight, FaClock, FaDollarSign, FaHandHoldingHeart, FaHeadset, FaPhoneAlt, FaShieldAlt, FaSlidersH, FaUsers } from "react-icons/fa";

export default function LifeInsuranceHero() {
    return (
        <main>
            <section
                className="life-hero-dark"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                {/* Overlay */}
                <div className="life-hero-overlay"></div>

                {/* Content */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto text-center">

                            <span className="life-hero-pill">
                                TRUSTED LIFE INSURANCE SOLUTIONS
                            </span>

                            <h1 className="life-hero-title">
                                Protect Your Loved Ones with{" "} <br />
                                <span>Future-Ready Life Insurance</span>
                            </h1>

                            <p className="life-hero-desc">
                                Life insurance provides long-term financial security for your
                                family. With comprehensive coverage, flexible plans, and expert
                                guidance, you stay prepared for life’s uncertainties — today and
                                tomorrow.
                            </p>

                            <div className="life-hero-actions">
                                <a href="/contact" className="life-hero-btn primary">
                                    Get a Free Quote
                                </a>

                                <a href="tel:+919876543210" className="life-hero-btn secondary">
                                    Talk to an Expert

                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section className="features-pro">
                <div className="container text-center">

                    {/* Heading */}
                    <span className="features-pro-tag">Our Features</span>
                    <h2 className="features-pro-title">
                        Insurance That Builds a <span>Better Future</span>
                    </h2>
                    <p className="features-pro-desc">
                        Designed to protect what matters most with trust, flexibility,
                        and fast support today and tomorrow.
                    </p>

                    <div className="row g-4 mt-5">

                        <div className="col-lg-3 col-md-6">
                            <div className="feature-pro-card">
                                <div className="icon-glow">
                                    <FaShieldAlt />
                                </div>
                                <h5>Trusted Company</h5>
                                <p>Proven expertise and reliable insurance services.</p>
                                <a href="/">Learn More</a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="feature-pro-card delay-1">
                                <div className="icon-glow">
                                    <FaDollarSign />
                                </div>
                                <h5>Anytime Money Back</h5>
                                <p>Flexible plans with refund and withdrawal options.</p>
                                <a href="/">Learn More</a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="feature-pro-card delay-2">
                                <div className="icon-glow">
                                    <FaSlidersH />
                                </div>
                                <h5>Flexible Plans</h5>
                                <p>Choose coverage that fits your life goals.</p>
                                <a href="/">Learn More</a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="feature-pro-card delay-3">
                                <div className="icon-glow">
                                    <FaHeadset />
                                </div>
                                <h5>24/7 Fast Support</h5>
                                <p>Expert assistance whenever you need it.</p>
                                <a href="/">Learn More</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



           <section className="why-life-section">
      <div className="container">

        {/* HEADER */}
        <div className="text-center mb-5">
          <span className="why-life-tag">WHY CHOOSE US</span>
          <h2 className="why-life-title">
            Why Choose Our <span>Life Insurance</span>
          </h2>
          <p className="why-life-desc">
            Life insurance is a promise to protect your family’s future
            with stability, trust, and long-term financial security.
          </p>
        </div>

        {/* CONTENT */}
        <div className="row align-items-center gy-5">

          {/* LEFT SIDE */}
          <div className="col-lg-4">
            <div className="why-life-point">
              <div className="icon-box">
                <FaShieldAlt />
              </div>
              <div>
                <h5>Guaranteed Financial Security</h5>
                <p>
                  Ensures your loved ones remain financially protected
                  in every situation.
                </p>
              </div>
            </div>

            <div className="why-life-point">
              <div className="icon-box">
                <FaUsers />
              </div>
              <div>
                <h5>Family-Oriented Plans</h5>
                <p>
                  Insurance plans designed around your family’s future goals.
                </p>
              </div>
            </div>
          </div>

          {/* CENTER */}
          <div className="col-lg-4">
            <div className="why-life-highlight text-center">
              <h3>Secure Tomorrow, Starting Today</h3>
              <p>
                Flexible premiums, transparent policies, and reliable
                support — everything you need for a secure future.
              </p>

              <a href="/get-quote" className="why-life-btn">
                Get Life Insurance Quote
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-4">
            <div className="why-life-point right">
              <div className="icon-box">
                <FaClock />
              </div>
              <div>
                <h5>Fast & Transparent Claims</h5>
                <p>
                  Hassle-free and quick claim settlement during critical times.
                </p>
              </div>
            </div>

            <div className="why-life-point right">
              <div className="icon-box">
                <FaHandHoldingHeart />
              </div>
              <div>
                <h5>Lifetime Expert Support</h5>
                <p>
                  Dedicated advisors support you throughout the policy lifecycle.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>






        <section className="life-cta-light">
      <div className="container">
        <div className="row align-items-center gy-4">

          {/* LEFT CONTENT */}
          <div className="col-lg-8">
            <span className="life-cta-light-tag">
              SECURE YOUR FUTURE
            </span>

            <h2 className="life-cta-light-title">
              Protect Your Family’s Tomorrow, <br />
              <span> Starting Today</span>
            </h2>

            <p className="life-cta-light-desc">
              Choose a life insurance plan that provides long-term financial
              security, peace of mind, and reliable protection for your loved ones.
            </p>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="col-lg-4 text-lg-end text-center">
            <div className="life-cta-light-actions">
              <a href="/contact" className="life-cta-light-btn primary">
                Get Free Quote <FaArrowRight />
              </a>

              <a href="tel:+919876543210" className="life-cta-light-btn secondary">
                <FaPhoneAlt />Talk To an Expert 
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
        </main>
    );
}
