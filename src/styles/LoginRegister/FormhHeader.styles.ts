import tw from 'tailwind-styled-components';

export const FormContainer = tw.div`flex h-screen items-center justify-center`;

export const FormFlexBox = tw.div`flex justify-center backdrop-blur-sm`;

export const FormTitle = tw.h1`self-start text-[24px]`;

export const Form = tw.form`flex h-[400px] w-[300px] flex-col items-center rounded-xl bg-white p-4  text-black opacity-[80%]`;
