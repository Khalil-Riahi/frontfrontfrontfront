

"use client"
import React from "react";
import Container from "./Container";
import { MyCarousel2 } from "./MCarousel2";

export default function Benefits({images}) {
  return (
    <Container className="mb-10 w-10/12">
      <div className="w-full flex flex-col items-center text-center space-y-6">
        <p className="text-sm text-indigo-600 font-semibold uppercase">
          
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-950">
        A space that adapts to you
        
        </h2>
        <p className="max-w-3xl text-gray-500 text-base sm:text-lg">
        Our open space offers a bright, modern, and flexible environment where creativity flows freely.
        Whether you're working solo, collaborating with a team, or networking with others, you'll find the
        perfect balance of focus and connection to thrive throughout your day.
        </p>
      </div>

      <div className="flex justify-center w-full mt-12">
        <MyCarousel2 images={images}/>
      </div>
    </Container>
  );
}
