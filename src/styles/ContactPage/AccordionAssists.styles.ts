import tw from 'tailwind-styled-components';

export const AccordionContainer = tw.div`border-b-[1px] md:border-b-0`;

export const AccordionToggle = tw.button`my-4 flex w-full items-center justify-between p-4 md:p-0`;

export const AccordionTitle = tw.p`text-[18px] font-bold opacity-[85%]`;

export const IconContainer = tw.div`md:hidden`;

export const AccordionContent = tw.div`flex flex-col gap-2 pl-4 md:hidden`;

export const StaticAccordionContent = tw.div`hidden font-bold opacity-70 md:flex md:flex-col md:gap-2`;
