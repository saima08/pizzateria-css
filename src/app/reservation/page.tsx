"use client";

import React from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image"; // Importing next/image for image optimization
import "../styles/Reservation.css";

export default function Reservation() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full">
        <section className="bg-[#FF4D4D]">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-white uppercase text-sm font-medium tracking-wider mb-4">
                    Reservation
                  </h2>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                    Turn your dining dreams into reality by booking a table with us
                  </h1>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-black">
                    Reservation <span className="text-white">Now!</span>
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="sr-only">
                        Orderer&apos;s name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Orderer&apos;s name"
                        className="w-full px-4 py-3 rounded-md bg-white placeholder-gray-500"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="sr-only">
                          Phone number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          placeholder="Phone number"
                          className="w-full px-4 py-3 rounded-md bg-white placeholder-gray-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="people" className="sr-only">
                          Number of people
                        </label>
                        <input
                          type="number"
                          id="people"
                          placeholder="Number of people"
                          className="w-full px-4 py-3 rounded-md bg-white placeholder-gray-500"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-900 transition-colors duration-200"
                    >
                      Reservation
                    </button>
                  </form>
                </div>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/Images/dining.png"
                  alt="Top view of a round restaurant table with chairs"
                  width={600} // Set the appropriate width for the image
                  height={400} // Set the appropriate height for the image
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Continue the rest of the code as it was */}
        
        <Footer />
      </main>
    </>
  );
}
