import tw from 'tailwind-styled-components';

export const ProductDetails = tw.div`my-3 flex gap-2`;

export const ProductImage = tw.img`w-[100px]`;

export const ProductGender = tw.p`opacity-80`;

export const ProductSelectedSize = tw.p`opacity-80`;

export const ModalContentContainer = tw.div`fixed right-0 top-0 z-50 h-[250px] w-full bg-white md:w-[400px]`;

export const ModalBackground = tw.div`fixed left-0 top-0 h-full w-full bg-gray-900 opacity-80`;

export const ModalHeader = tw.h2`flex items-center gap-3 font-bold`;

export const ModalBox = tw.div`flex items-center justify-between`;

export const ButtonsBox = tw.div`flex gap-4`;
