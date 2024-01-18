import tw from 'tailwind-styled-components';

export const GenderContainer = tw.div`border-b-[1px] border-gray-200 py-6`;

export const GenderTitle = tw.p`mb-4`;

export const GenderList = tw.ul`flex flex-col gap-3`;

export const GenderItem = tw.li`flex items-center gap-2`;

export const GenderInput = tw.input`h-5 w-5 cursor-pointer  checked:accent-black`;

export const GenderLabel = tw.label`cursor-pointer hover:opacity-80`;
