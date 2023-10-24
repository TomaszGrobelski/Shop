import { useState } from "react";
import interestsList from "../listOfInterests/interestsList";
import { motion } from "framer-motion";
import { SetStateAction, Dispatch } from "react";

interface InterestsProps {
  setInterest: Dispatch<SetStateAction<string>>;
}

function Interests({ setInterest }:InterestsProps) {
  const [activeInterest, setActiveInterest] = useState<number | null>(0);
  const [spanPosition, setSpanPosition] = useState(0);
  const [spanWidth, setSpanWidth] = useState(45);

  const rangeTab = [
    { rage: 0, width: 45 },
    { rage: 60, width: 75 },
    { rage: 150, width: 94 },
    { rage: 260, width: 74 },
    { rage: 350, width: 87 },
    { rage: 455, width: 67 },
  ];

  const handleButtonClick = (index: number) => {
    setActiveInterest(index);
    if (rangeTab[index]) {
      setSpanPosition(rangeTab[index].rage);
      setSpanWidth(rangeTab[index].width);
    }
  };

  const interestsCategory = interestsList.map((interest, index) => {
    const isActive = activeInterest === index;
    return (
      <li key={index}>
        <button
          onClick={() => {
            handleButtonClick(index);
            setInterest(interest.name)
          }}
          style={{ border: isActive ? "1px solid black" : "none" }}
          className={`font-bold p-3 rounded-xl ${isActive ? "text-black" : "text-gray-500"}`}
        >
          {interest.name}
        </button>
      </li>
    );
  });

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-[24px] font-bold opacity-90">Interests</h2>
      <div className="flex flex-col gap-4">
        <ul className="flex gap-4 flex-wrap">{interestsCategory}</ul>
        <div className="relative">
          <p className="border-[1px]"></p>
          <motion.span
            animate={{ x: spanPosition, width: spanWidth }}
            transition={{ duration: 0.2, type: "tween" }}
            className="hidden sm:block absolute -top-[3px] h-[3px] bg-black"
          ></motion.span>
        </div>
      </div>
    </div>
  );
}

export default Interests;
