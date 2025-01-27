import { MapPin, Menu, ChevronRight, Pizza, Coffee, IceCream, Utensils } from "lucide-react";
import React from "react";
import Image from "next/image"; // Importing Image from next/image
import "../styles/Pizzatria.css";

export default function Pizzateria() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col lg:flex-row items-center justify-between">
                {/* Left Column */}
                <div className="lg:w-1/2 space-y-8">
                    <div className="flex items-center space-x-2">
                        <span className="text-red-500 uppercase font-medium">
                            Download App
                        </span>
                        <span className="animate-bounce">👋</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                        Begin Your Pizzateria Journey Now!
                    </h1>

                    <p className="text-gray-600 text-lg">
                        Explore cuisine anytime, anywhere, and enjoy swift delivery of your
                        food
                    </p>

                    <button className="bg-red-500 text-white px-8 py-3 rounded-full font-medium hover:bg-red-600 transition-colors">
                        Get Started
                    </button>
                </div>

                {/* Right Column */}
                <div className="lg:w-1/2 mt-12 lg:mt-0">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-8">
                            <Menu className="h-6 w-6" />
                            <div className="flex items-center space-x-2">
                                <MapPin className="h-5 w-5 text-red-500" />
                                <span>Milan, Italy</span>
                            </div>
                        </div>

                        <div className="bg-orange-50 rounded-xl p-4 mb-8">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-medium">The Quickest Food</p>
                                    <p className="text-gray-600">Delivery Service</p>
                                </div>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm">
                                    Order Now
                                </button>
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-medium">Categories</h3>
                            </div>
                            <div className="flex space-x-4 overflow-x-auto pb-2">
                                <CategoryButton icon={<Utensils />} label="Burger" active />
                                <CategoryButton icon={<Pizza />} label="Pizza" />
                                <CategoryButton icon={<Coffee />} label="Coffee" />
                                <CategoryButton icon={<div>Sushi</div>} label="Sushi" />
                                <CategoryButton icon={<IceCream />} label="Dessert" />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-medium">Popular Now</h3>
                                <button className="text-red-500 text-sm flex items-center">
                                    View All <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <FoodCard
                                    image="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300"
                                    name="Classic Burger"
                                    price="$8.99"
                                />
                                <FoodCard
                                    image="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=300"
                                    name="Double Cheese"
                                    price="$10.99"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

// CategoryButton Component
interface CategoryButtonProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
}

function CategoryButton({ icon, label, active = false }: CategoryButtonProps) {
    return (
        <button
            className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap ${
                active ? "bg-red-500 text-white" : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
            {icon}
            <span>{label}</span>
        </button>
    );
}

// FoodCard Component
interface FoodCardProps {
    image: string;
    name: string;
    price: string;
}

function FoodCard({ image, name, price }: FoodCardProps) {
    return (
        <div className="bg-red-100 rounded-xl p-4 transition-transform hover:scale-105">
            {/* Replace <img> with <Image /> */}
            <Image
                src={image}
                alt={name}
                width={300} // Adjust width
                height={128} // Adjust height for object-cover
                className="w-full h-32 object-cover rounded-lg mb-3"
            />
            <h4 className="font-medium">{name}</h4>
            <p className="text-red-500 font-medium">{price}</p>
        </div>
    );
}
