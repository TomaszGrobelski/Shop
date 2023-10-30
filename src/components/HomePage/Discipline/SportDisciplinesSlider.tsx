import disciplineList from "./disciplineList";

function SportDisciplinesSlider() {
  const disciplineBoxes = disciplineList.map((disciplin, index) => {
    return (
      <div key={index} className="relative w-[300px] flex-shrink-0">
        <img src={disciplin.img} alt={disciplin.name} className="" />
        <div className="absolute text-white text-center right-4 top-4 w-10 bg-gray-800 rounded-xl">{disciplin.number}/8</div>
        <p>{disciplin.name}</p>
      </div>
    );
  });

  return (
    <div>
      <h2>Browse by sport discipline</h2>
      <div className="flex flex-nowrap gap-3 overflow-hidden overflow-x-hidden">{disciplineBoxes}</div>
    </div>
  );
}

export default SportDisciplinesSlider;
