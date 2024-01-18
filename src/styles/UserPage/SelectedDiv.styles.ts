import tw from 'tailwind-styled-components';

export const SelectedList = tw.ul`max-h-60 overflow-y-auto`;

export const SelectedLabel = tw.label`mx-10 flex cursor-pointer items-center justify-between border-b-[1px] py-4`;

export const SelectedInput = tw.input`h-4 w-4 checked:accent-black`;
