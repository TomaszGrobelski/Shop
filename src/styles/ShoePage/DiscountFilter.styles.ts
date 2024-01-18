import tw from 'tailwind-styled-components';

export const DiscountContainer = tw.div`border-b-[1px] border-gray-200 py-6`;

export const DiscountTitle = tw.p`mb-4`;

export const DiscountBox = tw.div`flex items-center gap-2`;

export const DiscountInput = tw.input`h-5 w-5 cursor-pointer  checked:accent-black`;

export const DiscountLabel = tw.label`cursor-pointer hover:opacity-80`;
