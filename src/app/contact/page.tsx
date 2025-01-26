"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="min-h-screen bg-white w-full pt-16">
        <div className="text-center py-12 px-4">
          <h2 className="text-red-500 font-medium mb-4">CONTACT</h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Reach out to us on social media
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold">
            along with our location
          </h2>
        </div>
        <div className="max-w-6xl mx-auto px-4 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Info Section */}
            <div className="bg-red-500 text-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Info</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={20} />
                  <span>pizzateria@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} />
                  <span>+62 858 1999 2983</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} />
                  <span>Bandung, West Java</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                Feel free to drop us a line below
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded-md"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded-md"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                />
                <textarea
                  placeholder="Typing your message here..."
                  className="w-full p-3 border rounded-md h-32"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                />
                <button
                  type="submit"
                  className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-12 h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/Images/worldmap.png"
              alt="City Location"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
