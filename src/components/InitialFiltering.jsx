"use client";

import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BsCalendar3 } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { MdMyLocation } from "react-icons/md";

export default function InitialFiltering() {
  const [location, setLocation] = useState("Andheri-East");
  const [dates, setDates] = useState("Thu, 30 Jan — Fri, 31 Jan");
  const [guests, setGuests] = useState("1 Room, 1 Guest");

  return (
    <div className="bg-gradient-to-b from-black/50 to-black/50 bg-cover bg-center min-h-[300px] w-full">
      {/* Main Container */}
      <div className="container mx-auto px-4 py-12">
        {/* Heading */}
        <h1 className="text-white text-2xl md:text-3xl font-semibold text-center mb-8">
          Over 174,000+ hotels and homes across 35+ countries
        </h1>

        {/* Search Form */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg flex flex-col md:flex-row">
            {/* Location Field */}
            <div className="flex items-center flex-1 p-3 border-b md:border-b-0 md:border-r border-gray-200">
              <IoLocationOutline className="text-gray-400 text-xl flex-shrink-0" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Search by city, hotel, or neighborhood"
                className="w-full px-3 outline-none text-gray-700"
              />
              <button className="flex flex-col items-center text-gray-400 hover:text-gray-600">
                <MdMyLocation className="text-xl" />
                <span className="text-xs">Near me</span>
              </button>
            </div>

            {/* Date Field */}
            <div className="flex items-center flex-1 p-3 border-b md:border-b-0 md:border-r border-gray-200">
              <BsCalendar3 className="text-gray-400 text-xl flex-shrink-0" />
              <input
                type="text"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
                placeholder="Check-in — Check-out"
                className="w-full px-3 outline-none text-gray-700"
              />
            </div>

            {/* Guests Field */}
            <div className="flex items-center p-3 border-b md:border-b-0 md:border-r border-gray-200">
              <HiOutlineUser className="text-gray-400 text-xl flex-shrink-0" />
              <input
                type="text"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                placeholder="Rooms & Guests"
                className="w-full px-3 outline-none text-gray-700"
              />
            </div>

            {/* Search Button */}
            <button className="bg-[#5cba47] hover:bg-[#4a9939] text-white px-8 py-3 m-2 rounded-lg font-medium transition-colors">
              Search
            </button>
          </div>

          {/* Search Tags */}
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="text-white">Continue your search</span>
            <div className="flex gap-3">
              <button className="px-4 py-1.5 rounded-full border border-white text-white text-sm hover:bg-white/10 transition-colors">
                Andheri-East - Guests
              </button>
              <button className="px-4 py-1.5 rounded-full border border-white text-white text-sm hover:bg-white/10 transition-colors">
                All Localities - 1 Guest
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
