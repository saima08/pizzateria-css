"use client";

import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import Image from "next/image"; // Importing next/image for image optimization
import "../styles/About.css";

export default function About() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      {/* Adding padding to ensure the content starts below the navbar */}
      <main className="about-main">
        <section className="about-container">
          <div className="about-header">
            <p className="about-subheading">ABOUT US</p>
            <h1 className="about-title">
              Let&apos;s delve deeper into
              <br />
              understanding Pizzateria
            </h1>
            <p className="about-description">
              Pizzateria is a comfortable and friendly place, offering a wide
              selection of delicious pizzas served with a variety of fresh
              toppings. With a warm atmosphere and attractive decoration,
              Pizzateria is a suitable place to gather with friends and family
              while enjoying delicious dishes...
            </p>
          </div>
          <div className="about-image-container">
            <Image
              src="/Images/largepizza.png"
              alt="Delicious pizza with olives, bell peppers, and melted cheese"
              width={600} // Set a suitable width for the image
              height={400} // Set a suitable height for the image
              className="about-image"
            />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
