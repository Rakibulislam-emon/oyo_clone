import Image from "next/image";
import Container from "./Container";

export default function ValueHotels() {
  return (
    <Container >
    <div className="relative h-[200px] md:h-[400px] my-10 rounded-lg overflow-hidden">
      <Image
        src="/hotelBookingBanner.avif"
        alt="Book Now Banner"
        fill
        // className=" object-cover lg:object-left "
        priority
      />
    </div>
  </Container>
  )
}
