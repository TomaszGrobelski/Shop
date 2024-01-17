<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b

function Slider() {
  const messages = [
    "MEMBER DAYS SALE | 20% OFF SELECT STYLES",
    "NEW ARRIVALS",
    "MEMBERS: FREE SHIPPING ON ORDERS $50+",
    "WHY WAIT? TRY STORE PICKUP",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
<<<<<<< HEAD
    <div className="flex justify-start opacity-70 bg-customGray font-bold border-b-[1px] border-gray-100 mb-4 mt-20 items-center min-h-[70px] overflow-hidden">
      <div
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
        className="flex justify-center items-center  duration-500 "
      >
        {messages.map((message, index) => (
          <p className=" text-center w-screen" key={index}>
=======
    <div className="mb-4 mt-20 flex min-h-[70px] items-center justify-start overflow-hidden border-b-[1px] border-gray-100 bg-customGray font-bold opacity-70">
      <div
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
        className="flex items-center justify-center  duration-500 ">
        {messages.map((message, index) => (
          <p className=" w-screen text-center" key={index}>
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
            {message}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Slider;
