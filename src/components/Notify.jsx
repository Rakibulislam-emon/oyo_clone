"use client"
import React, { useState } from "react";
import { FaFire } from "react-icons/fa";
import Container from "./Container";


export default function Notify() {
  const [email, setEmail] = useState("");

  return (
   <Container>
        <div className="flex flex-col md:flex-row items-center p-4 md:p-8 my-4 bg-white rounded-lg shadow border border-gray-200 space-y-4 md:space-y-0">
          {/* Flame Icon */}
          <div className="flex-shrink-0 md:mr-8">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <FaFire className="text-orange-500" size={30}  />
            </div>
          </div>
    
          {/* Content */}
          <div className="flex-grow text-center md:text-left">
            <h2 className="text-lg font-semibold text-gray-800">
              Get access to exclusive deals
            </h2>
            <p className="text-sm text-gray-600">
              Only the best deals reach your inbox
            </p>
          </div>
    
          {/* Email Input and Button */}
          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g., john@email.com"
              className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <button className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              Notify me
            </button>
          </div>
        </div>
   </Container>
  );
}
