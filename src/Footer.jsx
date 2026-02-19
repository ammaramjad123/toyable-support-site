// src/components/Footer.jsx
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const SOCIALS = {
    instagram: "https://www.instagram.com/toyable_app",
    x: "https://x.com/toyable_app",
  };

  return (
    <footer className="bg-white border-t border-brand-brown/10">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">

          {/* Left: Logo */}
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <img
              src="/logo.png"
              alt="Toyable"
              className="h-14 md:h-12 w-auto"
            />
          </div>

          {/* Center: Tagline */}
          <div className="flex justify-center w-full md:w-auto text-center">
            <p className="text-sm md:text-base text-brand-brown/70 max-w-xl sm:whitespace-nowrap">
              Built by collectors. Powered by community. Designed for serious vintage toy enthusiasts.
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="flex justify-center md:justify-end items-center gap-8 w-full md:w-auto">

            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Toyable Instagram"
              className="group transition-all duration-300"
            >
              <FaInstagram className="text-2xl md:text-xl text-brand-brown/70 group-hover:text-brand-orange transition-colors duration-300" />
            </a>

            <a
              href={SOCIALS.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Toyable X"
              className="group transition-all duration-300"
            >
              <FaXTwitter className="text-2xl md:text-xl text-brand-brown/70 group-hover:text-brand-orange transition-colors duration-300" />
            </a>

          </div>

        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-brand-brown/10 py-4 text-center text-sm text-brand-brown/60">
        © 2026 Toyable. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
