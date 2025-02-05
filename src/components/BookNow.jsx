import React from 'react'
import Container from './Container'
import Image from 'next/image'

export default function BookNow() {
  return (
    <Container >
      <div className="relative h-[200px] md:h-[400px] my-10 rounded-lg overflow-hidden">
        <Image
          src="/booknow.avif"
          alt="Book Now Banner"
          fill
          className=""
          priority
        />
      </div>

    </Container>
  )
}
