import { Shoe } from "../ShoesPage/Products/interfaceShoe";

interface SizeShoeDetailProps {
  shoeDetails: Shoe;
  onSizeSelect: (size: number) => void;
  selectedSize: number | null | false;
}

function SizeShoeDetail({
  shoeDetails,
  onSizeSelect,
  selectedSize,
}: SizeShoeDetailProps) {
  const allSizes = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13];

  return (
    <div className="my-10">
      <div className="flex justify-between text-[16px]">
        <span className={selectedSize === false ? " text-red-500" : ""}>
          Select Size
        </span>
        <button className="opacity-60">Size Guide</button>
      </div>
      <div
        className={
          "grid grid-cols-2 gap-1 md:grid-cols-3 " +
          (selectedSize === false
            ? " rounded-l border-[1px] border-red-500"
            : "")
        }>
        {allSizes.map((size) => (
          <button
            key={size}
            className={`rounded-lg border p-2 ${
              shoeDetails.sizes.includes(size) ? "text-black" : "text-gray-400"
            } ${selectedSize === size ? "bg-gray-300" : ""}`}
            disabled={!shoeDetails.sizes.includes(size)}
            onClick={() => onSizeSelect(size)}>
            {size}
          </button>
        ))}
      </div>
      {selectedSize === false ? (
        <p className=" text-red-500">Please select a size.</p>
      ) : null}
    </div>
  );
}

export default SizeShoeDetail;
