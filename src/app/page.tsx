
"use client"

import React from "react";
import Navbar from "./components/Navbar";
import MenuSection from "./components/Selection";
import TestimonialSection from "./components/TestimonialSection";
import Pizzateria from "./components/Pizzatria";
import { Footer } from "./components/Footer";
import "./styles/Home.css"

export default function HomePage() {
  return (
    <>
    <div className="navbar-container">
      <Navbar />
    </div>

      <div className="hero-section">
        <div className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
            alt="Pizza Background"
            className="hero-image"
          />
          <div className="hero-overlay" />
        </div>

        <div className="hero-content">
          <div className="promo-badge">
            <span className="promo-text">Beyond Speedy 🍕</span>
          </div>

          <h1 className="hero-heading">
            Ensure Your <span className="highlight">Food</span> is
            <br className="sm:block" /> Delivered with Speed
          </h1>

          <p className="hero-description">
            Our mission is to satisfy your appetite with delectable dishes,
            delivered swiftly and at no extra cost
          </p>

          <button className="cta-button">
            Get Started
          </button>
        </div>
      </div>

      <section className="offerings-section">
        <div className="offerings-decor" />
        <div className="offerings-decor-2" />
        <div className="offerings-decor-3" />
        <div className="offerings-decor-4" />

        <div className="offerings-container">
          <div className="offerings-header">
            <p className="offerings-subheading">OUR OFFERINGS</p>
            <h2 className="offerings-title">
              Your Preferred Food
              <br />
              Delivery Companion
            </h2>
          </div>

          <div className="offerings-grid">
            <div className="offering-card">
              <div className="offering-image">
                <img
                  src="/Images/ordering.png"
                  alt="Convenient Ordering"
                  className="offering-img"
                />
              </div>
              <h3 className="offering-title">
                Convenient Ordering
              </h3>
              <p className="offering-description">
                Ordering food requires just a few simple steps
              </p>
            </div>

            <div className="offering-card highlighted">
              <div className="offering-image">
                <img
                  src="/Images/delivery.png"
                  alt="Quickest Delivery"
                  className="offering-img"
                />
              </div>
              <h3 className="offering-title">
                Quickest Delivery
              </h3>
              <p className="offering-description">
                Consistently Timely Delivery, Even Faster
              </p>
            </div>

            <div className="offering-card">
              <div className="offering-image">
                <img
                  src="/Images/quality.png"
                  alt="Superior Quality"
                  className="offering-img"
                />
              </div>
              <h3 className="offering-title">
                Superior Quality
              </h3>
              <p className="offering-description">
                For us, quality is paramount, not just speed
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <MenuSection />
          <TestimonialSection />
          <Pizzateria />
        </div>
        <Footer />
      </section>
    </>
  );
}
