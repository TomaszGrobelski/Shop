import tw from 'tailwind-styled-components';

export const Nav = tw.nav`flex justify-between items-center h-[70px] px-4 z-50 bg-white w-[100%] max-w-[1300px]  `;

export const UlNavBarFlexBox = tw.ul`hidden gap-4  sm:flex`;

export const IconPositioning = tw.div`hidden items-center gap-4 sm:flex`;

export const ButtonBurger = tw.button`absolute left-[90%] mr-4 sm:hidden`;

export const LiNavigation = tw.li`text-[16px] font-semibold tracking-[1px]`;
