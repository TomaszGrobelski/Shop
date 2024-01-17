interface DiscountFilterProps {
  setDiscount: React.Dispatch<React.SetStateAction<string | null>>;
}

const DiscountFilter: React.FC<DiscountFilterProps> = ({ setDiscount }) => {
  const handleDiscountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiscount(event.target.checked ? "discounted" : null);
  };

  return (
<<<<<<< HEAD
    <div className="py-6 border-b-[1px] border-gray-200 ">
=======
    <div className="border-b-[1px] border-gray-200 py-6 ">
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
      <p className="mb-4">Sale & Offers</p>
      <div className="flex items-center gap-2 ">
        <input
          type="checkbox"
          name="Sale"
          id="Sale"
          onChange={handleDiscountChange}
<<<<<<< HEAD
          className="w-5 h-5 cursor-pointer  checked:accent-black "
=======
          className="h-5 w-5 cursor-pointer  checked:accent-black "
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
        />
        <label htmlFor="Sale" className="cursor-pointer hover:opacity-80">
          Discounted
        </label>
      </div>
    </div>
  );
};

export default DiscountFilter;
