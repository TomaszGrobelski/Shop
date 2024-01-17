import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

function PickUp() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleOut = () => {
    setIsFocused(false);
    setSearchValue('');
  };
  return (
    <>
      <h2 className='my-4'>Select a store location</h2>
      <div className='relative flex w-full flex-col space-y-1 rounded-xl border-2 p-1'>
        <label
          htmlFor='storeSearch'
          className={`absolute ${
            isFocused ? '-top-3 left-3 text-[20px] ' : 'left-10 top-3'
          }  z-40 bg-white  text-sm font-medium text-gray-700 transition-all duration-300`}>
          Enter address or postal code<span className='text-red-500'>*</span>
        </label>
        <div className='flex items-center'>
          <CiSearch />
          <input
            type='text'
            name='storeSearch'
            id='storeSearch'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className='block w-full rounded-md p-1 pl-2 shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500'
            autoComplete='off'
            aria-required='true'
            aria-invalid='false'
            onFocus={handleFocus}
            onBlur={handleOut}
          />
        </div>
      </div>
    </>
  );
}

export default PickUp;
