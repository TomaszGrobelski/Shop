import { useEffect, useState } from 'react';

function Slider() {
  const messages = [
    'MEMBER DAYS SALE | 20% OFF SELECT STYLES',
    'NEW ARRIVALS',
    'MEMBERS: FREE SHIPPING ON ORDERS $50+',
    'WHY WAIT? TRY STORE PICKUP',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className='mb-4 mt-20 flex min-h-[70px] items-center justify-start overflow-hidden border-b-[1px] border-gray-100 bg-customGray font-bold opacity-70'>
      <div
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
        className='flex items-center justify-center  duration-500 '>
        {messages.map((message, index) => (
          <p className=' w-screen text-center' key={index}>
            {message}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Slider;
