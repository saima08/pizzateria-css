import React from "react";
import Link from "next/link"; // Importing Link from next/link
import Image from "next/image"; // Importing Image from next/image
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
              <li>
                <Link href="#" className="link">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="link">
                  Attributes
                </Link>
              </li>
              <li>
                <Link href="#" className="link">
                  Updates
                </Link>
              </li>
              <li>
                <Link href="#" className="link">
                  Selection
                </Link>
              </li>
            </ul>
          </div>
          {/* Enterprise Section */}
          <div>
            <h3 className="heading">Enterprise</h3>
            <ul className="list">
              <li>
                <Link href="/" className="link">
                  Why Pizzaterio?
                </Link>
              </li>
              <li>
                <Link href="#" className="link">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="#" className="link">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="link">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          {/* Assistance Section */}
          <div>
            <h3 className="heading">Assistance</h3>
            <ul className="list">
              <li>
                <Link href="#" className="link">
                  Account
                </Link>
              </li>
              <li>
                <Link href="#" className="link">
                  Support Center
                </Link>
              </li>
              <li>
                <Link href="#" className="link">
                  Feedback
                </Link>
              </li>
              <li>
                <Link href="#" className="link">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="link">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
          {/* Get in Touch Section */}
          <div>
            <h3 className="heading">Get in Touch</h3>
            <p className="description">
              Have a question or feedback?
              <br />
              We&apos;re eager to hear from you.
            </p>
            <div className="logo-container">
              <Image
                src="/Images/logo.png"
                alt="Pizzateria Logo"
                width={120} // Replace with your actual logo width
                height={50} // Replace with your actual logo height
                className="logo"
              />
              <p className="mission">
                Our mission is to satisfy your hunger with tasty food, delivered
                quickly and at no charge
              </p>
              <div className="social-icons">
                <Link href="#" className="icon">
                  <Instagram size={20} />
                </Link>
                <Link href="#" className="icon">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="icon">
                  <Twitter size={20} />
                </Link>
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
