import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import "./WhatsappChat.css";

const WhatsAppChat = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // show popup after page load
    const showTimer = setTimeout(() => {
      setShowPopup(true);
    }, 1200);

    // auto hide popup
    const hideTimer = setTimeout(() => {
      setShowPopup(false);
    }, 6000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {/* MESSAGE POPUP */}
      {showPopup && (
        <div className="wa-popup">
          <button
            className="wa-close"
            onClick={() => setShowPopup(false)}
            aria-label="Close"
          >
            <FaTimes />
          </button>

          <div className="wa-popup-body">
            <span className="wa-wave">👋</span> Hi!
            <br />
            Need help with <strong>Life, Health,</strong> or{" "}
            <strong>Auto Insurance</strong>?
            <br />
            Our experts are here to assist you.
          </div>
        </div>
      )}

      {/* FLOATING WHATSAPP ICON */}
      <a
        href="https://wa.me/918423811106?text=Hi%20I%20need%20insurance%20assistance"
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

export default WhatsAppChat;
