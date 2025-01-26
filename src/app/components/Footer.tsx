import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";
import "../styles/Footer.css"; // Import the CSS file

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-container">
          {/* Regarding Section */}
          <div>
            <h3 className="heading">Regarding</h3>
            <ul className="list">
              <li><a href="#" className="link">Our Story</a></li>
              <li><a href="#" className="link">Attributes</a></li>
              <li><a href="#" className="link">Updates</a></li>
              <li><a href="#" className="link">Selection</a></li>
            </ul>
          </div>
          {/* Enterprise Section */}
          <div>
            <h3 className="heading">Enterprise</h3>
            <ul className="list">
              <li><a href="/" className="link">Why Pizzaterio?</a></li>
              <li><a href="#" className="link">Partner With Us</a></li>
              <li><a href="#" className="link">FAQ</a></li>
              <li><a href="#" className="link">Blog</a></li>
            </ul>
          </div>
          {/* Assistance Section */}
          <div>
            <h3 className="heading">Assistance</h3>
            <ul className="list">
              <li><a href="#" className="link">Account</a></li>
              <li><a href="#" className="link">Support Center</a></li>
              <li><a href="#" className="link">Feedback</a></li>
              <li><a href="#" className="link">Contact Us</a></li>
              <li><a href="#" className="link">Accessibility</a></li>
            </ul>
          </div>
          {/* Get in Touch Section */}
          <div>
            <h3 className="heading">Get in Touch</h3>
            <p className="description">
              Have a question or feedback?
              <br />
              We're eager to hear from you.
            </p>
            <div className="logo-container">
              <img
                src="/Images/logo.png"
                alt="Pizzateria Logo"
                className="logo"
              />
              <p className="mission">
                Our mission is to satisfy your hunger with tasty food, delivered
                quickly and at no charge
              </p>
              <div className="social-icons">
                <a href="#" className="icon"><Instagram size={20} /></a>
                <a href="#" className="icon"><Facebook size={20} /></a>
                <a href="#" className="icon"><Twitter size={20} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>2019 Pruto Inc. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
