import { Star, StarHalf } from "lucide-react";
import React from "react";
import "../styles/TestimonialSection.css";

export default function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        {/* Header Section */}
        <div className="testimonial-header">
          <h2 className="testimonial-subheading">Customer Testimonials</h2>
          <h3 className="testimonial-title">
            What Customers Have to Say About Us
          </h3>
        </div>

        {/* Testimonial Grid */}
        <div className="testimonial-grid">
          {/* Testimonial Block */}
          <div className="testimonial-block">
            <blockquote className="testimonial-quote">
              <svg
                className="testimonial-quote-icon"
                viewBox="0 0"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p>
                "Pizzateria is exceptional. With a wide array of delicious meals
                and excellent service, including remarkably fast delivery, I
                wholeheartedly recommend Pizzateria to you."
              </p>
            </blockquote>

            {/* Author Section */}
            <div className="testimonial-author">
              <img
                className="author-image"
                src="/Images/xaviera.png"
                alt="Portrait of Aracelly Xaviera"
                loading="lazy"
              />
              <div className="author-details">
                <h4 className="author-name">Aracelly Xaviera</h4>
                <p className="author-title">Culinary Enthusiast</p>
              </div>
            </div>

            {/* Rating Section */}
            <div className="rating-stars">
              <Star className="star-icon" />
              <Star className="star-icon" />
              <Star className="star-icon" />
              <Star className="star-icon" />
              <StarHalf className="star-icon" />
              <span className="rating-score">4.8</span>
            </div>
          </div>

          {/* Image Section */}
          <div className="testimonial-image">
            <img
              className="testimonial-img"
              src="/Images/pizza.png"
              alt="Delicious pizza on a wooden serving board"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
