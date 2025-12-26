import React from "react";
import "./Auto-Insurance.css";
import autoinsurance from "../assets/Auto-Insurance.jpg";
import { FaBolt, FaCalendarAlt, FaCarCrash, FaCheckCircle, FaClock, FaDollarSign, FaFileAlt, FaFlag, FaGift, FaHeadset, FaMoneyBillWave, FaShieldAlt, FaTags, FaTools, FaTrophy, FaUserCog, FaUsers } from "react-icons/fa";
import carImg from "../assets/Auto-Insurance.jpg"
import { Link } from "react-router-dom";
export default function HeroAutoInsurance() {

    const features = [
        {
            icon: <FaFileAlt />,
            color: "blue",
            title: "Policy Management",
            desc: "Manage policies, track coverage, and access documents anytime.",
            active: true,
        },
        {
            icon: <FaClock />,
            color: "purple",
            title: "Quick Claims",
            desc: "Fast and transparent claim processing with minimal paperwork.",
        },
        {
            icon: <FaCalendarAlt />,
            color: "orange",
            title: "Renewal Alerts",
            desc: "Timely reminders so you never miss policy renewals.",
        },
        {
            icon: <FaDollarSign />,
            color: "green",
            title: "Affordable Premiums",
            desc: "Budget-friendly plans without compromising coverage.",
        },
        {
            icon: <FaCarCrash />,
            color: "red",
            title: "Roadside Assistance",
            desc: "24/7 support for breakdowns, towing, and emergencies.",
        },
        {
            icon: <FaTools />,
            color: "teal",
            title: "Cashless Garages",
            desc: "Access a wide network of cashless repair garages.",
        },
        {
            icon: <FaShieldAlt />,
            color: "indigo",
            title: "Third-Party Coverage",
            desc: "Protects against third-party injury and property damage.",
        },
        {
            icon: <FaGift />,
            color: "pink",
            title: "No Claim Bonus",
            desc: "Earn discounts on premiums for claim-free years.",
        },
    ];

    return (
        <main>
            <section
                className="auto-hero-dark"
                style={{ backgroundImage: `url(${autoinsurance})` }}
            >
                {/* Overlay */}
                <div className="auto-hero-overlay"></div>

                <div className="container">
                    <div className="auto-hero-content text-center">

                        <h1>
                            Drive with <span>Future-Ready</span>
                            <br />
                            Auto Insurance Protection
                        </h1>

                        <p>
                            Auto insurance is essential for protecting your vehicle, finances,
                            and peace of mind. With comprehensive coverage, fast claims, and
                            expert support, you stay protected against accidents, theft, and
                            unexpected risks — today and tomorrow.
                        </p>


                    </div>
                </div>
            </section>




            <section className="auto-features">
                <div className="container text-center">

                    <span className="features-badge">AUTO INSURANCE</span>

                    <h2 className="features-title">
                        Smart & Reliable Auto Insurance Coverage
                    </h2>

                    <p className="features-desc">
                        Our auto insurance solutions are designed to keep you protected on
                        every journey with comprehensive coverage and modern benefits.
                    </p>

                    <div className="features-wrapper">
                        <div className="row g-4">
                            {features.map((item, index) => (
                                <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                                    <div className={`feature-card ${item.active ? "active" : ""}`}>
                                        <div className={`icon ${item.color}`}>
                                            {item.icon}
                                        </div>
                                        <h5>{item.title}</h5>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>





            <section className="auto-why-hub">
                <div className="container text-center">

                    {/* Heading */}
                    <h2 className="auto-why-title">Why choose us?</h2>
                    <p className="auto-why-desc">
                        From routine protection to complete coverage, we’ve got you
                        covered with reliable and friendly service.
                    </p>

                    <div className="row align-items-center gy-5">

                        {/* LEFT FEATURES */}
                        <div className="col-lg-4">
                            <div className="auto-why-feature left">
                                <FaUserCog />
                                <h5>Expert Advisors</h5>
                                <p>
                                    Our insurance experts guide you to the best policy
                                    based on your needs.
                                </p>
                            </div>

                            <div className="auto-why-feature left">
                                <FaBolt />
                                <h5>Fast Claims</h5>
                                <p>
                                    Quick claim settlements with minimal paperwork
                                    and zero hassle.
                                </p>
                            </div>
                        </div>

                        {/* CENTER IMAGE */}
                        <div className="col-lg-4">
                            <div className="auto-why-image">
                                <img src={carImg} alt="Auto Insurance" />
                                <Link to="/contact" className="auto-why-btn text-decoration-none">
                                    Get a Free Quote
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT FEATURES */}
                        <div className="col-lg-4 ">
                            <div className="auto-why-feature right">
                                <FaTags />
                                <h5>Affordable Pricing</h5>
                                <p>
                                    Budget-friendly premiums with transparent
                                    pricing and no hidden costs.
                                </p>
                            </div>

                            <div className="auto-why-feature right">
                                <FaTools />
                                <h5>All-in-One Coverage</h5>
                                <p>
                                    From accidents to third-party liability,
                                    we cover it all.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            <section className="auto-cta-section">
                <div className="container">
                    <div className="auto-cta-box">

                        {/* Left Content */}
                        <div className="auto-cta-content">
                            <span className="auto-cta-badge">
                                SECURE • FAST • RELIABLE
                            </span>

                            <h2>
                                Get the right auto insurance <br />
                                <span>before your next drive</span>
                            </h2>

                            <p>
                                Protect your vehicle with comprehensive coverage, affordable
                                premiums, and fast claim assistance all in one place.
                            </p>
                        </div>

                        {/* Right CTA */}
                        <div className="auto-cta-actions">
                            <Link to="/contact" className="auto-cta-btn primary">
                                Get Free Quote
                            </Link>

                            <a href="tel:+918423811106" className="auto-cta-btn secondary">
                                Talk to an Expert
                            </a>

                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
