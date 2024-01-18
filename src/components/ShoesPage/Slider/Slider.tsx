import { useEffect, useState } from 'react';

import { SliderContainer } from '../../../styles/ShoePage/Slider.styles';

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
    <SliderContainer>
      <div
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
        className='flex items-center justify-center  duration-500 '>
        {messages.map((message, index) => (
          <p className=' w-screen text-center' key={index}>
            {message}
          </p>
        ))}
      </div>
    </SliderContainer>
  );
}

export default Slider;
