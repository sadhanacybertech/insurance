import React, { useEffect, useState } from "react";
import "./Home.css";

import img1 from "../assets/banner.webp";
import img2 from "../assets/benner3.webp";
import img3 from "../assets/banner3.webp";
import insuranceImg from "../assets/affordable-health.webp";
import imgMain from "../assets/insurance-main.webp";
import imgSmall from "../assets/insurance-small.webp";
import { FaArrowRight, FaAward, FaBriefcase, FaBriefcaseMedical, FaCalendarAlt, FaCar, FaCheckCircle, FaClipboardCheck, FaClock, FaDollarSign, FaExchangeAlt, FaFileAlt, FaFileContract, FaFileInvoiceDollar, FaHandsHelping, FaHeart, FaHeartbeat, FaHome, FaHospital, FaHospitalAlt, FaRocket, FaShieldAlt, FaSyncAlt, FaUserCheck, FaUserShield, FaWallet } from "react-icons/fa";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import autoImg from "../assets/auto-insurance.webp";
// import your logos
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";
import logo5 from "../assets/logo5.svg";


import WhatsAppChat from "../Components/WhatsappChat";

import lifeImg from "../assets/life-benefits.png";

import dots from "../assets/dots.webp";
const images = [img1, img2, img3];

const Home = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 1000); // ⏱️ every 1 second

        return () => clearInterval(interval);
    }, []);

    return (
        <main>
            <WhatsAppChat/>
            <section id="home"
                className="hero-bg-img"
                style={{ backgroundImage: `url(${images[currentImage]})` }}
            >
                <div className="hero-overlay"></div>

                <div className="container hero-content">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-xl-8 text-center">

                            {/* Badge */}
                            <div className="hero-badge">
                                Trusted Insurance & Risk Advisory
                            </div>

                            {/* Heading */}
                            <h1 className="hero-title">
                                Grow with <span> Future-Proof </span>
                                Insurance Protection
                            </h1>

                            {/* Description */}
                            <p className="hero-desc">
                                Insurance solutions are essential for managing risk and securing sustainable
                                business growth. By offering protection against operational, financial,
                                and strategic risks, insurance helps businesses minimize losses
                                and maintain confidence during uncertain times. Tailored coverage and
                                expert advisory ensure organizations remain resilient and prepared for the future.
                            </p>

                            {/* Actions */}
                            <div className="hero-actions">
                                <button className="btn btn-outline-light">
                                    Explore Solutions
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


    <section className="insurance-services-section" id="services">
      <div className="container">

        {/* SECTION HEADER */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <span className="services-tag">Our Services</span>
            <h2 className="services-title fw-bold" style={{fontFamily:"-moz-initial"}}>
              Insurance Solutions Tailored for You
            </h2>
            <p className="services-desc">
              We offer comprehensive and affordable insurance plans designed to
              protect what matters most to you your life, health, vehicle, home,
              and business.
            </p>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="row g-4">

          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-icon blue">
                <FaHeartbeat />
              </div>
              <h5>Health Insurance</h5>
              <p>
                Cashless hospitalization and medical coverage to keep you and
                your family protected.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-icon green">
                <FaUserShield />
              </div>
              <h5>Life Insurance</h5>
              <p>
                Secure your family’s future with flexible life insurance plans
                and long-term benefits.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-icon orange">
                <FaCar />
              </div>
              <h5>Auto Insurance</h5>
              <p>
                Comprehensive coverage for your vehicle against accidents,
                theft, and damages.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-icon purple">
                <FaHome />
              </div>
              <h5>Home Insurance</h5>
              <p>
                Protect your home and belongings from unexpected risks and
                natural disasters.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-icon cyan">
                <FaBriefcaseMedical />
              </div>
              <h5>Business Insurance</h5>
              <p>
                Tailored insurance solutions to safeguard your business assets
                and operations.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-icon red">
                <FaHandsHelping />
              </div>
              <h5>Claims Assistance</h5>
              <p>
                Dedicated support to ensure smooth and fast claim settlements
                without hassle.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>



            <section className="health-services" id="about">
                <div className="container">

                    {/* Heading */}
                    <div className="health-head text-center">

                        <h2 className="health-title" style={{ fontFamily: "-moz-initial" }}>Budget-Friendly Health Plans</h2>

                        <p>
                            Budget-friendly health plans provide essential medical coverage at affordable premiums,
                            ensuring access to quality healthcare without financial stress. These plans help individuals
                            and families stay protected against unexpected medical expenses while
                            maintaining a balanced budget and peace of mind.
                        </p>
                    </div>

                    {/* Boxes */}
                    <div className="row g-4 health-box-wrapper">

                        <div className="col-lg-3 col-md-6">
                            <div className="health-box">
                                <div className="health-icon">
                                    <FaHeartbeat />
                                </div>
                                <h5>Basic Care</h5>
                                <p>
                                    Essential coverage for everyday medical needs and
                                    preventive healthcare.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="health-box">
                                <div className="health-icon">
                                    <FaUserShield />
                                </div>
                                <h5>Family Protection</h5>
                                <p>
                                    Comprehensive family health plans with cashless
                                    hospitalization benefits.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="health-box">
                                <div className="health-icon">
                                    <FaHospital />
                                </div>
                                <h5>Senior Care</h5>
                                <p>
                                    Specially designed plans for senior citizens covering
                                    critical illnesses.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="health-box">
                                <div className="health-icon">
                                    <FaHandsHelping />
                                </div>
                                <h5>24/7 Assistance</h5>
                                <p>
                                    Dedicated support to help you with claims, renewals,
                                    and medical queries.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>





            <section className="insurance-section">
                <div className="container">

                    {/* SECTION HEADING */}
                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto text-center">
                            <span className="section-tag">Affordable & Accessible</span>

                            <h2 className="section-title mt-2" style={{fontFamily:"-moz-initial"}}>
                                Affordable and Accessible <br />
                                Insurance Coverage for Everyone
                            </h2>
                        </div>
                    </div>

                    {/* MAIN CONTENT */}
                    <div className="row align-items-center g-5">

                        {/* LEFT IMAGE */}
                        <div className="col-lg-6">
                            <div className="image-wrap">
                                <img src={imgMain} alt="Affordable Insurance" className="main-img" />
                                <img src={imgSmall} alt="Customer Support" className="small-img" />

                                <div className="experience-badge">
                                    <h3>30</h3>
                                    <span>Years of<br />Trust</span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="col-lg-6">

                            <h6 className="content-subtitle">
                                Why Choose Our Plans
                            </h6>


                            <p className="section-desc">
                                Our insurance solutions are built to make quality coverage
                                affordable, transparent, and easy to access. We focus on
                                simplifying policies while keeping premiums budget-friendly,
                                ensuring peace of mind for individuals and families alike.
                            </p>

                            <ul className="feature-list">
                                <li><MdSubdirectoryArrowRight /> Cost-effective plans with flexible premiums</li>
                                <li><MdSubdirectoryArrowRight /> Simple documentation and transparent pricing</li>
                                <li><MdSubdirectoryArrowRight /> Easy access to a wide network of hospitals</li>
                                <li><MdSubdirectoryArrowRight /> Reliable support for claims and renewals</li>
                            </ul>

                            <button className="btn btn-primary px-4">
                                View Affordable Plans
                            </button>

                        </div>

                    </div>

                    {/* AWARD BADGE */}
                    <div className="award-badge">
                        <FaAward />
                        <h4>+68</h4>
                        <span>Trusted Industry Recognition</span>
                    </div>

                </div>
            </section>




            <section className="feature-cards-section" id="auto-insurance">
                <div className="container">

                    {/* SECTION HEADING */}
                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto text-center">
                            <span className="feature-tag">Auto Insurance</span>

                            <h2 className="feature-title fw-bold" style={{fontFamily:"-moz-initial"}}>
                                Smart & Reliable Auto Insurance Coverage
                            </h2>

                            <p className="feature-desc">
                                Our auto insurance solutions are designed to keep you protected on
                                every journey. From affordable premiums to fast claims and easy
                                policy management, we make vehicle protection simple and stress-free.
                            </p>
                        </div>
                    </div>

                    {/* CARDS BACKGROUND */}
                    <div className="cards-bg-wrap">
                        <div className="row g-4">

                            <div className="col-lg-3 col-md-6">
                                <div className="feature-card">
                                    <div className="icon-box blue">
                                        <FaClipboardCheck />
                                    </div>
                                    <h5>Policy Management</h5>
                                    <p>
                                        Manage policies, track coverage, and access documents anytime.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="feature-card">
                                    <div className="icon-box purple">
                                        <FaClock />
                                    </div>
                                    <h5>Quick Claims</h5>
                                    <p>
                                        Fast and transparent claim processing with minimal paperwork.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="feature-card">
                                    <div className="icon-box orange">
                                        <FaCalendarAlt />
                                    </div>
                                    <h5>Renewal Alerts</h5>
                                    <p>
                                        Get timely reminders so you never miss your policy renewal.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="feature-card">
                                    <div className="icon-box green">
                                        <FaDollarSign />
                                    </div>
                                    <h5>Affordable Premiums</h5>
                                    <p>
                                        Budget-friendly auto insurance plans without compromising coverage.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </section>





            <section className="logo-slider-section">
                <div className="container">

                    {/* Heading */}
                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto text-center">
                            <h6 className="logo-subtitle">Trusted By</h6>

                            <h2 className="logo-title fw-bold" style={{ fontFamily: "-moz-initial" }}>
                                Leading Insurance Partners & Clients
                            </h2>

                            <p className="logo-desc">
                                We proudly collaborate with trusted insurers, financial institutions,
                                and corporate partners to deliver reliable, transparent, and customer-focused
                                insurance solutions across industries.
                            </p>
                        </div>
                    </div>


                    {/* Slider */}
                    <div className="logo-slider">
                        <div className="logo-track">

                            {/* Duplicate logos for smooth loop */}
                            {[logo1, logo2, logo3, logo4, logo5,
                                logo1, logo2, logo3, logo4, logo5].map(
                                    (logo, index) => (
                                        <div className="logo-slide" key={index}>
                                            <img src={logo} alt="Partner Logo" />
                                        </div>
                                    )
                                )}

                        </div>
                    </div>

                </div>
            </section>


            <section className="life-insurance-section" id="life-insurance">
                <div className="container">

                    {/* Heading */}
                    <div className="row mb-5">
                        <div className="col text-center">
                            <span className="life-tag">Life Insurance</span>
                            <h2 className="life-heading fw-bold" style={{ fontFamily: "-moz-initial" }}>
                                Secure Your Family’s Future <br />
                                with Trusted Life Insurance
                            </h2>
                            <p className="life-subtext">
                                Our life insurance plans are designed to provide long-term
                                financial security, peace of mind, and protection for your loved
                                ones at every stage of life.
                            </p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="row align-items-center g-5">

                        {/* Left Content */}
                        <div className="col-lg-6">
                            <div className="life-feature">
                                <FaShieldAlt />
                                <div>
                                    <h5>Comprehensive Protection</h5>
                                    <p>
                                        Coverage that safeguards your family against life’s
                                        uncertainties with reliable financial support.
                                    </p>
                                </div>
                            </div>

                            <div className="life-feature">
                                <FaUserCheck />
                                <div>
                                    <h5>Flexible Policy Options</h5>
                                    <p>
                                        Choose plans that match your financial goals, lifestyle,
                                        and long-term needs.
                                    </p>
                                </div>
                            </div>

                            <div className="life-feature">
                                <FaHeart />
                                <div>
                                    <h5>Lifetime Peace of Mind</h5>
                                    <p>
                                        Assurance that your loved ones are protected even when
                                        you’re not around.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="col-lg-6 text-center">
                            <div className="life-image-wrap">
                                <img src={lifeImg} alt="Life Insurance" />
                            </div>
                        </div>

                    </div>

                </div>
            </section>



            <section className="cta-light-section">
                <div className="container">
                    <div className="row align-items-center">

                        {/* LEFT CONTENT */}
                        <div className="col-lg-8 text-center text-lg-start">
                            <span className="cta-light-tag">Get Started Today</span>

                            <h2 className="cta-light-title">
                                Secure Your Future with <br />
                                Trusted Insurance Solutions
                            </h2>

                            <p className="cta-light-desc">
                                Choose affordable, transparent, and reliable insurance plans
                                designed to protect you, your family, and your business
                                without complexity or hidden costs.
                            </p>
                        </div>

                        {/* RIGHT CTA */}
                        <div className="col-lg-4 text-center text-lg-end mt-4 mt-lg-0">
                            <a href="/contact" className="cta-light-btn">
                                Get Free Quote <FaArrowRight />
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
