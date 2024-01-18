import tw from 'tailwind-styled-components';

export const ShoeDetailContainer = tw.div`my-10 col-span-1  grid grid-cols-1 md:grid-cols-2`;

export const ShoeImage = tw.img`aspect-square w-full object-fill md:sticky md:top-10`;

export const ProductInfoContainer = tw.div`p-6 pl-16 text-[18px] font-bold md:w-[500px]`;

export const ProductHeader = tw.h1`text-[24px] opacity-90`;

export const ProductOldPrice = tw.p`text-gray-500 line-through`;

export const DiscountCodeInfo = tw.p`text-[16px] text-green-700 opacity-90`;
