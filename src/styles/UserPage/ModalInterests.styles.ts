import tw from 'tailwind-styled-components';

export const ModalContainer = tw.div`absolute inset-0 z-50 flex items-center justify-center`;

export const ModalBackGround = tw.div`fixed inset-0 bg-gray-200 opacity-80`;

export const ModalBox = tw.div`fixed flex h-4/5 w-4/5 max-w-[650px] items-center justify-center rounded-3xl bg-white`;
