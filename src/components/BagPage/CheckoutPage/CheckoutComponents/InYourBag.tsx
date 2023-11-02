import { BiMinus } from "react-icons/bi";
import Summary from "../../Summary/Summary";
import { useState, useEffect } from "react";

function InYourBag() {
  const [summary, setSummary] = useState(true);

  const handleSummary = () => {
    if (window.innerWidth < 768) {
      setSummary(!summary);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSummary(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="max-w-[640px] my-4">
      <button onClick={handleSummary} className="flex justify-between items-center w-full">
        <h2 className="text-[20px]">In Your Bag</h2>
        <BiMinus className="md:hidden" />
      </button>
      {summary&&<Summary totalPrice={125} visible={false} />}
    </div>
  );
}

export default InYourBag;
