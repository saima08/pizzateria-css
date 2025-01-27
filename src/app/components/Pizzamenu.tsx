import React from "react";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image"; // Importing Image from next/image
import "../styles/Pizzamenu.css";

// Define the type for a pizza object
type Pizza = {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
};

const pizzas: Pizza[] = [
  {
    id: 1,
    name: "Sausage Pizza",
    price: 7.49,
    rating: 4,
    image: "/Images/pizza1.png",
  },
  {
    id: 2,
    name: "Cheese Overload",
    price: 8.3,
    rating: 4,
    image: "/Images/pizza2.png",
  },
  {
    id: 3,
    name: "Italian Pizza",
    price: 6.99,
    rating: 3,
    image: "/Images/pizza4.png",
  },
  {
    id: 4,
    name: "Super Supreme",
    price: 7.14,
    rating: 5,
    image: "/Images/pizza5.png",
  },
  {
    id: 5,
    name: "Veggie Garden",
    price: 7.66,
    rating: 4,
    image: "/Images/pizza6.png",
  },
  {
    id: 6,
    name: "American Favorite",
    price: 6.19,
    rating: 3,
    image: "/Images/pizza7.png",
  },
];

// Define the props type for the StarRating component
type StarRatingProps = {
  rating: number;
};

function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? "filled-star" : "empty-star"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

// Define the props type for the PizzaCard component
type PizzaCardProps = {
  name: string;
  price: number;
  rating: number;
  image: string;
};

function PizzaCard({ name, price, rating, image }: PizzaCardProps) {
  return (
    <div className="pizza-card">
      <div className="relative">
        <div className="pizza-image-container">
          {/* Replacing <img> with <Image /> */}
          <Image
            src={image}
            alt={name}
            width={300} // Adjust as per design requirements
            height={300} // Adjust as per design requirements
            className="pizza-image"
          />
          <div className="gradient-overlay" />
        </div>
        <button className="favorite-button">
          <Heart className="heart-icon" fill="currentColor" />
        </button>
        <div className="cart-button-container">
          <div className="cart-button">
            <ShoppingCart className="cart-icon" />
          </div>
        </div>
      </div>
      <div className="pizza-details">
        <h3 className="pizza-name">{name}</h3>
        <div className="price-container">
          <span className="price-symbol">$</span>
          <span className="pizza-price">{price.toFixed(2)}</span>
        </div>
        <StarRating rating={rating} />
        <button className="read-more-button">read more</button>
      </div>
    </div>
  );
}

export default function Pizzamenu() {
  return (
    <div className="pizzamenu">
      <div className="pizza-grid">
        {pizzas.map((pizza) => (
          <PizzaCard key={pizza.id} {...pizza} />
        ))}
      </div>
    </div>
  );
}
