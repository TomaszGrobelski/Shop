import tw from 'tailwind-styled-components';

export const HeroContainer = tw.div`relative text-[18px] font-bold text-white`;

export const HeroImage = tw.img`aspect-video blur-[2px]`;

export const HeroTextContainer = tw.div`absolute bottom-[10%] left-[5%] mix-blend-exclusion`;

export const HeroTitle = tw.h1`text-[28px] sm:text-[38px]`;

export const HeroDescription = tw.p`my-2 text-[20px] sm:text-[28px]`;
