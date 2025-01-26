import { Menu, Search, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "../styles/Navbar.css"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-inner">
          {/* Logo */}
          <div className="logo">
            <img src="/Images/logo.png" alt="Pizzateria Logo" className="logo-img" />
            <span className="logo-text">Pizzateria</span>
          </div>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <Link href="/">
              <span className="menu-item">Why Pizzateria?</span>
            </Link>
            <Link href="/about">
              <span className="menu-item">About Us</span>
            </Link>
            <div className="dropdown">
              <button onClick={() => setShowDropdown(!showDropdown)} className="dropdown-btn">
                Sections
                <ChevronDown className={`dropdown-icon ${showDropdown ? "open" : ""}`} />
              </button>
              {showDropdown && (
                <div className="dropdown-menu">
                  <Link href="/reservation">
                    <span className="dropdown-item">Reservation</span>
                  </Link>
                  <Link href="/event">
                    <span className="dropdown-item">Event</span>
                  </Link>
                  <Link href="/menu">
                    <span className="dropdown-item">Menu</span>
                  </Link>
                </div>
              )}
            </div>
            <Link href="/contact">
              <span className="menu-item">Contact</span>
            </Link>
            <button className="icon-btn">
              <Search className="icon" />
            </button>
            <button className="login-btn">Login</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-btn">
            <button onClick={() => setIsOpen(!isOpen)} className="icon-btn">
              {isOpen ? <X className="icon" /> : <Menu className="icon" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <Link href="/">
            <span className="mobile-menu-item">Why Pizzateria?</span>
          </Link>
          <Link href="/about">
            <span className="mobile-menu-item">About Us</span>
          </Link>
          <button onClick={() => setMobileDropdown(!mobileDropdown)} className="dropdown-btn">
            Sections
            <ChevronDown className={`dropdown-icon ${mobileDropdown ? "open" : ""}`} />
          </button>
          {mobileDropdown && (
            <div className="mobile-dropdown-menu">
              <Link href="/reservation">
                <span className="mobile-dropdown-item">Reservation</span>
              </Link>
              <Link href="/event">
                <span className="mobile-dropdown-item">Event</span>
              </Link>
              <Link href="/menu">
                <span className="mobile-dropdown-item">Menu</span>
              </Link>
            </div>
          )}
          <Link href="/contact">
            <span className="mobile-menu-item">Contact</span>
          </Link>
          <div className="mobile-login">
            <button className="icon-btn">
              <Search className="icon" />
            </button>
            <button className="login-btn">Login</button>
          </div>
        </div>
      )}
    </nav>
  );
}
