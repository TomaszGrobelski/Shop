import { useState} from "react";
import { motion } from "framer-motion";
import disciplineList from "./disciplineList";

function SportDisciplinesSlider() {
  const [x, setX] = useState(0);

  const handleDrag = (e, info) => {
    setX(info.offset.x);
  };

  const disciplineBoxes = disciplineList.map((disciplin, index) => {
    return (
      <motion.div
        drag="x"
        dragElastic={0.8}
        dragConstraints={{ left: 0, right: 0 }}
        onDrag={handleDrag}
        className="w-[500px] relative flex-row"
        style={{ transform: `translate3d(${x}px, 0, 0)` }}
        key={index}
      >
        <img src={disciplin.img} alt={disciplin.name} className=" grayscale" />
        <div className="absolute text-white text-center right-4 top-4 w-10 bg-gray-800 rounded-xl">
          {disciplin.number}/8
        </div>
        <p>{disciplin.name}</p>
      </motion.div>
    );
  });

  return (
    <div>
      <h2>Browse by sport discipline</h2>
      <div className="relative w-[1400px] h-[300px] overflow-hidden">
        {disciplineBoxes}
      </div>
    </div>
  );
}

export default SportDisciplinesSlider;
