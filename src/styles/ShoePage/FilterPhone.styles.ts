import tw from 'tailwind-styled-components';

export const ModelListContainer = tw.div`border-b-[1px] pb-2 pl-10`;

export const FilterButton = tw.button`flex items-center gap-2 rounded-full border-[1px] px-4 text-[18px] hover:border-black`;

export const FilterModal = tw.div`fixed left-0 top-0 z-50 h-full w-full overflow-y-auto bg-white p-6`;

export const FilterHeader = tw.h2`border-b-[1px] pb-2`;

export const CloseButton = tw.button`fixed right-6 top-6`;

export const ModelListBox = tw.div`flex items-center justify-between px-10  py-2`;

export const ModelResultTitle = tw.p`text-[18px] opacity-80`;

export const ModelList = tw.ul`flex flex-wrap gap-6 overflow-hidden whitespace-nowrap font-bold opacity-90`;
