import { SizeFilterProps } from '../../../../types/ShoesPage/shoePage.types';

const SizeFilter = ({ selectedSize, setSelectedSize }: SizeFilterProps) => {
  return (
    <div className='border-b-[1px] border-gray-200 py-6'>
      <p className='mb-4'>Sizes</p>
      <div className='grid grid-cols-3 items-center gap-2'>
        {Array.from({ length: 13 }).map((_, index) => {
          const size = 7 + index * 0.5;
          if (size > 13) return null;
          const isActive = size === selectedSize;

          return (
            <div key={size} className={`text-center`}>
              <button
                className={`h-10 w-12 border ${
                  isActive ? 'border-black' : ''
                } rounded hover:border-black`}
                onClick={() => setSelectedSize(isActive ? null : size)}>
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
