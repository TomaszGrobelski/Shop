interface DiscountFilterProps {
    setDiscount: React.Dispatch<React.SetStateAction<string | null>>;
  }
  
  const DiscountFilter: React.FC<DiscountFilterProps> = ({ setDiscount }) => {
    const handleDiscountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDiscount(event.target.checked ? "discounted" : null);
    };
  
    return (
      <div className="py-6 border-b-[1px] border-gray-200 ">
        <p className="mb-4">Sale & Offers</p>
        <div className="flex items-center gap-2 ">
          <input 
            type="checkbox" 
            name="Sale" 
            id="Sale" 
            onChange={handleDiscountChange}
            className="w-5 h-5 cursor-pointer  checked:accent-black " />
          <label htmlFor="Sale" className="cursor-pointer hover:opacity-80">
            Discounted
          </label>
        </div>
      </div>
    );
  };
  
  export default DiscountFilter;