import Image from "next/image";
import React from "react";

const demoData = {
  hotelName: "The Grand Plaza Hotel",
  location: "Downtown Manhattan",
  distance: 2.5,
  rating: 4.5,
  ratingCount: 2453,
  price: 12999,
  originalPrice: 18999,
  discount: 32,
  taxesAndFees: 2100,
  amenities: ["Free WiFi", "Pool", "Spa", "Gym", "Restaurant", "Room Service", "Bar", "Parking"],
  imageUrls: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd",
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a"
  ],
  isWizardMember: true
};

export default function SingleCard({
  hotelName = demoData.hotelName,
  location = demoData.location,
  distance = demoData.distance,
  rating = demoData.rating,
  ratingCount = demoData.ratingCount,
  price = demoData.price,
  originalPrice = demoData.originalPrice,
  discount = demoData.discount,
  taxesAndFees = demoData.taxesAndFees,
  amenities = demoData.amenities,
  imageUrls = demoData.imageUrls,
  isWizardMember = demoData.isWizardMember,
}) {
  return (
    <div className="flex border rounded-lg p-4 gap-4 hover:shadow-lg transition-shadow">
      {/* Image Carousel Section */}
      <div className="relative w-72 h-48">
        <Image
          width={288}
          height={192}
          src={imageUrls[0]}
          alt={hotelName}
          className="w-full h-full object-cover rounded-lg"

        />
        <span className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-sm">
          Mid range
        </span>
      </div>

      {/* Hotel Details Section */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-semibold">{hotelName}</h2>
              <p className="text-gray-600 text-sm">
                {location} • {distance} km
              </p>
            </div>
            <div className="text-right text-sm">
              <span className="bg-green-500 text-white px-2 py-1 rounded">
                {rating} ★
              </span>
              <p className="mt-1 text-gray-600">
                ({ratingCount} Ratings) • Very Good
              </p>
            </div>
          </div>

          {/* Amenities */}
          <div className="flex gap-4 mt-3">
            {amenities.map((amenity, index) => (
              <span key={index} className="text-gray-600 text-sm">
                {amenity}
              </span>
            ))}
            <span className="text-gray-600 text-sm">
              + {amenities.length} more
            </span>
          </div>

          {isWizardMember && (
            <div className="mt-2">
              <span className="border px-2 py-1 rounded text-sm">
                WIZARD MEMBER
              </span>
            </div>
          )}
        </div>

        {/* Pricing Section */}
        <div className="flex items-end justify-between mt-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">₹{price}</span>
              <span className="text-gray-500 line-through">
                ₹{originalPrice}
              </span>
              <span className="text-orange-500">{discount}% off</span>
            </div>
            <p className="text-gray-500 text-sm">
              + ₹{taxesAndFees} taxes & fees • per room per night
            </p>
          </div>
          <div className="flex gap-2">
            <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">
              View Details
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
