import modelsList from "./Lists/modelsList";

interface FilterPhoneProps {
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
}

function FilterPhone({ setFilterType }: FilterPhoneProps) {
  const models = modelsList.map((model, index) => {
    return (
      <li key={index}>
        <button onClick={() => setFilterType(model.name)}>{model.name}</button>
      </li>
    );
  });

  return (
    <div className="pl-10 md:hidden">
      <ul className="flex flex-wrap gap-6 font-bold opacity-90 overflow-hidden whitespace-nowrap ">{models}</ul>
    </div>
  );
}

export default FilterPhone;
