import tw from 'tailwind-styled-components';

export const ListOrder = tw.ul`flex flex-col gap-8`;

export const ItemOrder = tw.li`flex flex-col gap-1 sm:flex-row sm:gap-10`;

export const ImageOrder = tw.img`max-h-[150px] max-w-[150px]`;

export const ItemDetailsOrder = tw.div`max-w-[160px]`;

export const ItemActionsOrder = tw.div`my-4 flex gap-4`;

export const ItemPricingOrder = tw.div`flex flex-col text-start sm:m-2 sm:text-end`;

export const HeaderOrder = tw.h2``;

export const GenderOrder = tw.p`text-[14px] text-gray-600`;

export const SelectedSizeOrder = tw.div`text-[14px] text-gray-600`;

export const OldPriceOrder = tw.p`text-gray-600 line-through`;
