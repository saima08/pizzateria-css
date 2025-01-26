import { Heart, ChevronRight, Plus, ChevronLeft } from "lucide-react";
import React from "react";
import "../styles/Selection.css"

export default function MenuSection() {
  const menuItems = [
    {
      id: 1,
      name: "Sausage Pizza",
      price: 7.49,
      image: "/Images/pizza1.png",
      rating: 4,
    },
    {
      id: 2,
      name: "Margherita pizza",
      price: 6.4,
      image: "/Images/pizza2.png",
      rating: 4,
    },
    {
      id: 3,
      name: "Meatlovers pizza",
      price: 9.17,
      image: "/Images/pizza3.png",
      rating: 4,
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-red-500 font-semibold uppercase tracking-wider mb-4">
            OUR SELECTION
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            A Menu That Will Always
            <br />
            Capture Your Heart
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
            <img src="/Images/burger.png" alt="Burger" className="w-6 h-6" />
            <span>Burger</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-red-500 text-white">
            <img src="/Images/pizzaslice.png" alt="Pizza" className="w-6 h-6" />
            <span>Pizza</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
            <img src="/Images/cupcake.png" alt="Cup Cake" className="w-6 h-6" />
            <span>Cup Cake</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
            <img src="/Images/ramen.png" alt="Ramen" className="w-6 h-6" />
            <span>Ramen</span>
          </button>
          <button className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors">
                    <Heart className="w-6 h-6 fill-current" />
                  </button>
                  <button className="absolute bottom-4 right-4 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                    <Plus className="w-6 h-6" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold">${item.price.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < item.rating ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <button className="text-red-500 font-semibold hover:text-red-600 transition-colors">
                    read more
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="hidden md:flex absolute -left-12 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center">
            <ChevronLeft className="w-6 h-6 text-red-500" />
          </button>
          <button className="hidden md:flex absolute -right-12 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center">
            <ChevronRight className="w-6 h-6 text-red-500" />
          </button>
        </div>
      </div>
    </section>
  );
}
