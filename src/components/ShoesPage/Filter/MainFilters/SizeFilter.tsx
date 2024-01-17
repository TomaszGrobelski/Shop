interface SizeFilterProps {
  selectedSize: number | null;
  setSelectedSize: React.Dispatch<React.SetStateAction<number | null>>;
}

const SizeFilter = ({ selectedSize, setSelectedSize }: SizeFilterProps) => {
  return (
    <div className="py-6 border-b-[1px] border-gray-200">
      <p className="mb-4">Sizes</p>
      <div className="grid grid-cols-3 items-center gap-2">
        {Array.from({ length: 13 }).map((_, index) => {
          const size = 7 + index * 0.5;
          if (size > 13) return null;
          const isActive = size === selectedSize;

          return (
            <div key={size} className={`text-center`}>
              <button
                className={`w-12 h-10 border ${isActive ? "border-black" : ""} rounded hover:border-black`}
                onClick={() => setSelectedSize(isActive ? null : size)}
              >
                {size}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SizeFilter;
