"use client";

import { ChevronRight } from "lucide-react";
import React from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image"; // Importing Next.js Image
import "../styles/Event.css";

export default function Event() {
  const events = [
    {
      title: "Birthday Party",
      images: [
        "/Images/birthday1.png",
        "/Images/birthday2.png",
        "/Images/birthday1.png",
      ],
    },
    {
      title: "Regular Social Gatherings",
      images: [
        "/Images/rsg1.png",
        "/Images/rsg2.png",
        "/Images/rsg1.png",
      ],
    },
    {
      title: "Dinner with loved ones",
      images: [
        "/Images/dwlo.png",
        "/Images/dwlo.png",
        "/Images/dwlo.png",
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <section className="event-intro">
        <div className="container">
          <h1 className="title">Celebrate your event with deliciousness at the pizzateria</h1>
          <p className="description">
            Pizzateria Event is a comfortable and elegantly designed space, specially designed to host various special events. With charming decorations, warm lighting, and a friendly atmosphere, this event section is suitable for various occasions from birthdays, business meetings, to family parties.
          </p>
        </div>
      </section>

      <main className="events">
        <div className="event-list">
          {events.map((event, index) => (
            <section key={index} className="event-item">
              <h2 className="event-title">{event.title}</h2>
              <div className="event-images">
                {event.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="event-image-wrapper">
                    <Image
                      src={image}
                      alt={`${event.title} ${imgIndex + 1}`}
                      className="event-image"
                      width={300} // Adjust width as needed
                      height={200} // Adjust height as needed
                      loading="lazy"
                    />
                    <div className="overlay"></div>
                    <button className="read-more">
                      read more
                      <ChevronRight className="icon" />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <main className="reservation">
        <section className="reservation-container">
          <div className="reservation-content">
            <div>
              <p className="reservation-header">RESERVATION</p>
              <h1 className="reservation-title">
                Turn your dining dreams into reality by booking a table with us
              </h1>
            </div>
            <div>
              <h2 className="reservation-subtitle">Reservation Now!</h2>
              <form className="reservation-form">
                <input type="text" placeholder="Order's name" className="input" />
                <div className="input-group">
                  <input type="tel" placeholder="Phone number" className="input" />
                  <input type="number" placeholder="Number of people" className="input" />
                </div>
                <button type="submit" className="submit-btn">Reservation</button>
              </form>
            </div>
          </div>
          <div className="reservation-image-wrapper">
            <Image
              src="/Images/dining.png"
              alt="Top view of a round white table with chairs"
              className="reservation-image"
              width={600} // Adjust width as needed
              height={400} // Adjust height as needed
              loading="lazy"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
