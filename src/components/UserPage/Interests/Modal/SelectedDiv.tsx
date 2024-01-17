import { SelectedDivProps } from '../../../../types/UserPage/userPage.types';

function SelectedDiv({ selectedList }: SelectedDivProps) {
  return (
    <div>
      <ul className='max-h-60 overflow-y-auto'>
        {selectedList.map((item, index) => (
          <label
            htmlFor={`checkbox-${index}`}
            key={index}
            className='mx-10 flex cursor-pointer items-center justify-between border-b-[1px] py-4'>
            <span>{item.name}</span>
            <input
              id={`checkbox-${index}`}
              type='checkbox'
              className='h-4 w-4 checked:accent-black'
            />
          </label>
        ))}
      </ul>
    </div>
  );
}

export default SelectedDiv;
