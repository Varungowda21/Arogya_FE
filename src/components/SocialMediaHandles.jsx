import React from 'react';
import { FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa';

const SocialMediaHandles = () => {
  return (
    <div className="flex justify-center gap-6 mt-6">
      <a
        href="https://www.instagram.com/arogya_mandya?igsh=MWxha240ZWJhcjloYQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 text-2xl transition-transform hover:scale-110"
      >
        <FaInstagram />
      </a>
      <a
        href="https://wa.me/919916045591"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 text-2xl transition-transform hover:scale-110"
      >
        <FaWhatsapp />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61575630644614"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-2xl transition-transform hover:scale-110"
      >
        <FaFacebookF />
      </a>
    </div>
  );
};

export default SocialMediaHandles;
