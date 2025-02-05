"use client";

import Image from "next/image";
const countries = [
  { name: "Indonesia", color: "bg-emerald-500" },
  { name: "Malaysia", color: "bg-rose-500" },
  { name: "Denmark", color: "bg-amber-500" },
  { name: "US", color: "bg-sky-500" },
  { name: "UK", color: "bg-pink-500" },
  { name: "Netherlands", color: "bg-blue-500" },
];

export default function WorldMap() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row bg-gradient-to-r py-8 sm:py-12 lg:py-16 rounded-xl">
        {/* Map Container */}
        <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-4 mx-4 lg:mx-8">
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
            <Image
              src="/map2.webp"
              alt="World Map"
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 bg-white p-6 sm:p-8 rounded-lg shadow-lg mx-4 lg:mx-8 mt-6 lg:mt-0">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              There&apos;s an OYO around. Always.
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              More Destinations. More Ease. More Affordable.
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-baseline gap-4 sm:gap-6 lg:gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                35+
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                Countries
              </p>
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-300">
              /
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                174,000+
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                Hotels & Homes
              </p>
            </div>
          </div>

          {/* Countries Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {countries.map((country) => (
              <div key={country.name} className="flex items-center gap-2">
                <div
                  className={`w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full ${country.color}`}
                />
                <button className="text-xs sm:text-sm lg:text-base text-gray-600 hover:text-gray-900 transition-colors">
                  {country.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
