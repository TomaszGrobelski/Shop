import genderList from "../Lists/genderList";

interface GenderFilterProps {
  setGenderFilter: React.Dispatch<React.SetStateAction<string | null>>;
  genderFilter: string | null;
}

const GenderFilter: React.FC<GenderFilterProps> = ({ setGenderFilter, genderFilter }) => {
  const handleCheckboxChange = (genderType: string) => {
    if (genderFilter === genderType) {
      setGenderFilter(null);
    } else {
      setGenderFilter(genderType);
    }
  };

  return (
    <div className="py-6 border-b-[1px] border-gray-200 ">
      <p className="mb-4">Gender</p>
      <ul className="flex flex-col gap-3">
        {genderList.map((sex, index) => {
          const inputId = `gender-${index}`;
          return (
            <li key={index} className="flex items-center gap-2 ">
              <input
                id={inputId}
                type="checkbox"
                checked={genderFilter === sex.type}
                onChange={() => handleCheckboxChange(sex.type)}
                className="w-5 h-5 cursor-pointer  checked:accent-black "
              />
              <label htmlFor={inputId} className="cursor-pointer hover:opacity-80 ">
                {sex.type}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GenderFilter;
