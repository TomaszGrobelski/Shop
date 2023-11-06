import { useState } from "react";
import { CiSearch } from "react-icons/ci";

function PickUp() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleOut = () => {
    setIsFocused(false);
    setSearchValue("");
  };
  return (
    <div className="" >
      <h2 className="my-4">Select a store location</h2>
      <div className="relative flex flex-col space-y-1 border-2 rounded-xl p-1 w-full">
        <label
          htmlFor="storeSearch"
          className={`absolute ${
            isFocused ? "left-3 -top-3 text-[20px] " : "left-10 top-3"
          }  transition-all duration-300  z-40 text-sm font-medium text-gray-700 bg-white`}
        >
          Enter address or postal code<span className="text-red-500">*</span>
        </label>
        <div className="flex items-center">
          <CiSearch />
          <input
            type="text"
            name="storeSearch"
            id="storeSearch"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="block w-full pl-2 p-1 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            autoComplete="off"
            aria-required="true"
            aria-invalid="false"
            onFocus={handleFocus}
            onBlur={handleOut}
          />
        </div>
      </div>
    </div>
  );
}

export default PickUp;
