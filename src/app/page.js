import BookNow from "@/components/BookNow";
import SingleCard from "@/components/CardComponents/SingleCard";
import Footer from "@/components/Footer";
import InitialFiltering from "@/components/InitialFiltering";
import Navbar from "@/components/Navbar";
import Notify from "@/components/Notify";
import ValueHotels from "@/components/ValueHotels";
import WorldMap from "@/components/WorldMap";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <InitialFiltering />
      <SingleCard />
      <BookNow />
      <ValueHotels />
      <Notify />
      <WorldMap />
      <Footer />
    </div>
  );
}
