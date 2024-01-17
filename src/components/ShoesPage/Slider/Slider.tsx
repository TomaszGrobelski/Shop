import { useState, useEffect } from "react";

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
    <div className="flex justify-start opacity-70 bg-customGray font-bold border-b-[1px] border-gray-100 mb-4 mt-20 items-center min-h-[70px] overflow-hidden">
      <div
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
        className="flex justify-center items-center  duration-500 "
      >
        {messages.map((message, index) => (
          <p className=" text-center w-screen" key={index}>
            {message}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Slider;
