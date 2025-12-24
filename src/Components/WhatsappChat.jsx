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

    // auto close popup
    const hideTimer = setTimeout(() => {
      setShowPopup(false);
    }, 4200);

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
         
          <div className="wa-popup-body">
            👋 Hi!  
            <br />
            Need help with Life, Health, or Auto Insurance?  
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
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

export default WhatsAppChat;
