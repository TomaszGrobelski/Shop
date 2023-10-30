import { useState } from "react";
import { motion } from "framer-motion";
import Dance from '../../../images/Home/discipline/Dance.jpg';
import Football from '../../../images/Home/discipline/Football.jpg';

const images = [
  Dance,
  Football,
];

const SliderD = () => {
  const [[x, y], setPosition] = useState([0, 0]);

  const handleDrag = (e, info) => {
    setPosition([info.offset.x, y]);
  };

  const containerWidth = images.length * 3000;

  return (
    <div
      style={{
        width: "1400px",
        height: "400px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: -300, right: 400 }}
        dragElastic={0.8}
        onDrag={handleDrag}
        style={{
          width: containerWidth,
          display: "flex",
          flexDirection: "row",
          transform: `translate3d(${x}px, 0, 0)`,
        }}
      >
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`slide-${index}`}
            draggable="false" // This line prevents the image from being draggable
            style={{ width: "300px", height: "300px", objectFit: "cover" }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SliderD;
