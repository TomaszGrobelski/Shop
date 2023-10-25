
type InterestDataItem = { name: string };
type InterestData = InterestDataItem[];

interface SelectedDivProps {
  selectedList: InterestData;
}

function SelectedDiv({ selectedList }: SelectedDivProps) {
  return (
    <div>
      <ul className="max-h-60 overflow-y-auto">
        {selectedList.map((item, index) => (
          <label
            htmlFor={`checkbox-${index}`}
            key={index}
            className="flex justify-between items-center border-b-[1px] py-4 mx-10 cursor-pointer"
          >
            <span>{item.name}</span>
            <input id={`checkbox-${index}`} type="checkbox" className="w-4 h-4 checked:accent-black" />
          </label>
        ))}
      </ul>
    </div>
  );
}

export default SelectedDiv;
