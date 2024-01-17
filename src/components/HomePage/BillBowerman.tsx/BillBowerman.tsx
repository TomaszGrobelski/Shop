import dirtyBoots from "../../../images/Home/BillBowerman/dirtyBoots.jpg";

function BillBowerman() {
  return (
<<<<<<< HEAD
    <div className="flex flex-col my-10 sm:flex-row bg-gray-100">
      <div className="sm:w-[50%] p-6 text-[28px]">
        <p className="py-4">"Good shoes must meet three requirements. Be light, comfortable and durable"</p>
        <span className=" text-gray-900">-Bill Bowerman</span>
      </div>
      <img className=" object-fill sm:object-fill sm:w-[50%] grayscale " src={dirtyBoots} alt="Dirty Boots" />
=======
    <div className="my-10 flex flex-col bg-gray-100 sm:flex-row">
      <div className="p-6 text-[28px] sm:w-[50%]">
        <p className="py-4">
          "Good shoes must meet three requirements. Be light, comfortable and
          durable"
        </p>
        <span className=" text-gray-900">-Bill Bowerman</span>
      </div>
      <img
        className=" object-fill grayscale sm:w-[50%] sm:object-fill "
        src={dirtyBoots}
        alt="Dirty Boots"
      />
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
    </div>
  );
}

export default BillBowerman;
