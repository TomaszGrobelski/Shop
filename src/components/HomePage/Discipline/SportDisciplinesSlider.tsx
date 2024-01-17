import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import disciplineList from "./disciplineList";

function SportDisciplinesSlider() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - (carousel.current.offsetWidth || 0));
    }
  }, []);

  return (
    <div>
      <motion.div ref={carousel} className=" cursor-grab overflow-hidden py-16">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
          className="flex "
        >
          {disciplineList.map((disciplin) => {
            return (
              <motion.div key={disciplin.name} className="relative min-h-[20rem] min-w-[20rem] p-4 font-bold">
                <img
                  loading="lazy"
                  src={disciplin.img}
                  alt={disciplin.name}
                  className="w-full h-full rounded-xl pointer-events-none grayscale"
                />
                <p className="p-2">{disciplin.name}</p>
                <div className="absolute text-center w-10 right-8 top-8 bg-white border-[1px] border-black  rounded-2xl ">
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
