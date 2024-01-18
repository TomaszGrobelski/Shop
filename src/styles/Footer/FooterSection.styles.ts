import tw from 'tailwind-styled-components';

export const FooterSectionContainer = tw.footer`flex flex-col bg-darkNika p-4 text-[14px] text-white`;

export const FooterTopSection = tw.div`justify-between sm:flex`;

export const LinksList = tw.ul`flex flex-col gap-3 font-bold`;

export const LinksContainer = tw.div`flex`;

export const HelpAboutContainer = tw.div`flex flex-col gap-4 sm:flex-row`;

export const GetHelpSection = tw.div`border-t-[1px] font-bold sm:border-t-0`;

export const AboutSection = tw.div`font-bold`;

export const SocialMediaContainer = tw.div`my-4 flex gap-3`;

export const FooterBottomSection = tw.div`flex flex-col gap-4`;

export const BottomLinksList = tw.ul`flex flex-col gap-4 text-[12px] opacity-60 sm:flex-row sm:justify-end`;

export const CopyrightText = tw.span`opacity-60`;

export const DesignerInfo = tw.div`flex gap-2 opacity-60`;

export const DesignerContainer = tw.div`flex flex-col gap-2 sm:flex-row sm:justify-between`;
