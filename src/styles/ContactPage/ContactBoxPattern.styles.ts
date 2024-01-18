import tw from 'tailwind-styled-components';

export const ContactBoxContainer = tw.div`m-4 mt-14 flex items-center md:flex-col`;

export const ImageContainer = tw.div`flex justify-center`;

export const ContactImage = tw.img`aspect-square w-28 object-fill`;

export const ContentContainer = tw.div`flex flex-col gap-2  font-bold opacity-80 md:items-center`;

export const ContactTitle = tw.h3`md:whitespace-nowrap`;

export const DescriptionText = tw.span`md:whitespace-nowrap`;
