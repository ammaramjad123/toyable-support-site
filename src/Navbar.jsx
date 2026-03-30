import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const menuRef = useRef(null);
  const lastScrollY = useRef(0);

  // Hide on scroll down / show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on outside click or escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 backdrop-blur-xl bg-brand-beige/85 border-b border-brand-brown/10 transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="/NavLogo.png"
              alt="Toyable Logo"
              className="h-38 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#sponsors">Sponsors</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#privacy-policy">Privacy Policy</NavLink>

            {/* Contact Button */}
            <a
              href="#contact"
              className="bg-brand-orange hover:bg-brand-red text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-brand-brown cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={menuRef}
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-4 bg-brand-beige border-t border-brand-brown/10 flex flex-col gap-6">

          <MobileLink href="#features" onClick={() => setIsOpen(false)}>
            Features
          </MobileLink>

          <MobileLink href="#sponsors" onClick={() => setIsOpen(false)}>
            Sponsors
          </MobileLink>

          <MobileLink href="#faq" onClick={() => setIsOpen(false)}>
            FAQ
          </MobileLink>

          <MobileLink href="#privacy-policy" onClick={() => setIsOpen(false)}>
            Privacy Policy
          </MobileLink>

          {/* Contact Button */}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-brand-orange hover:bg-brand-red text-white text-center py-3 rounded-full font-semibold transition-all duration-300"
          >
            Contact Us
          </a>

        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="relative text-brand-brown font-medium transition duration-300 group"
    >
      {children}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
};

const MobileLink = ({ href, children, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-brand-brown text-lg font-medium transition duration-300 hover:text-brand-orange"
    >
      {children}
    </a>
  );
};

export default Navbar;