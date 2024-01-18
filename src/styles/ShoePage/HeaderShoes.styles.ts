import tw from 'tailwind-styled-components';

export const ShoeHeader = tw.h1`my-4 text-[20px] font-bold tracking-[2px]`;

export const ToggleFiltersButton = tw.button`flex items-center`;

export const SortByButton = tw.button`flex items-center`;

export const ShoeHeaderContainer = tw.div`sticky top-0 z-30 flex items-center justify-between bg-white pl-10`;

export const ShoeHeaderBox = tw.div`hidden gap-6 pr-10 font-bold opacity-90 md:flex`;
