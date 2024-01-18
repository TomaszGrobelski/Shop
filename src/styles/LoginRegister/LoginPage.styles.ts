import tw from 'tailwind-styled-components';

export const LoginPageContainer = tw.div`flex items-center justify-center`;

export const RegisterButton = tw.button`mb-5 mt-1 flex items-center gap-1 self-end font-bold hover:text-purple-700`;

export const DemoBox = tw.div`mt-8`;

export const DemoHeader = tw.h2``;

export const DemoEmail = tw.span`font-bold`;

export const DemoPassword = tw.span`font-bold`;

export const DemoDetails = tw.div`mt-4`;

export const BackGroundImage = tw.img`absolute left-0 top-0 -z-10 h-full w-full object-cover`;
