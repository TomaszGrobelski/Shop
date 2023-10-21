import { Shoe } from "../ShoesPage/Products/interfaceShoe";

interface SizeShoeDetailProps {
    shoeDetails: Shoe;
}


function SizeShoeDetail({ shoeDetails} :SizeShoeDetailProps) {
  const allSizes = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13];
  return (
    <div className="my-10">
      <div className="flex justify-between text-[16px]">
        <span>Select Size</span>
        <button className="opacity-60">Size Guide</button>
      </div>
      <div className="grid grid-cols-4 gap-1">
        {allSizes.map((size) => (
          <button
            key={size}
            className={`p-2 rounded-lg border ${shoeDetails.sizes.includes(size) ? "text-black" : "text-gray-400"}`}
            disabled={!shoeDetails.sizes.includes(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SizeShoeDetail;
