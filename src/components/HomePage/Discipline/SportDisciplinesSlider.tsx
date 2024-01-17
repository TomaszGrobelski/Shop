import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import disciplineList from './disciplineList';

function SportDisciplinesSlider() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(
        carousel.current.scrollWidth - (carousel.current.offsetWidth || 0),
      );
    }
  }, []);

  return (
    <div>
      <motion.div ref={carousel} className=' cursor-grab overflow-hidden py-16'>
        <motion.div
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: 'grabbing' }}
          className='flex '>
          {disciplineList.map((disciplin) => {
            return (
              <motion.div
                key={disciplin.name}
                className='relative min-h-[20rem] min-w-[20rem] p-4 font-bold'>
                <img
                  loading='lazy'
                  src={disciplin.img}
                  alt={disciplin.name}
                  className='pointer-events-none h-full w-full rounded-xl grayscale'
                />
                <p className='p-2'>{disciplin.name}</p>
                <div className='absolute right-8 top-8 w-10 rounded-2xl border-[1px] border-black bg-white  text-center '>
                  {disciplin.number}/8
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SportDisciplinesSlider;
