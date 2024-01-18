import { AiFillTwitterCircle } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { TiSocialInstagram, TiSocialYoutubeCircular } from 'react-icons/ti';

import {
  AboutSection,
  BottomLinksList,
  CopyrightText,
  DesignerContainer,
  DesignerInfo,
  FooterBottomSection,
  FooterSectionContainer,
  FooterTopSection,
  GetHelpSection,
  HelpAboutContainer,
  LinksContainer,
  LinksList,
  SocialMediaContainer,
} from '../../styles/Footer/FooterSection.styles';

function FooterSection() {
  return (
    <FooterSectionContainer>
      <FooterTopSection>
        <LinksContainer>
          <LinksList>
            <li>GIFT CARD</li>
            <li>PROMOTIONS</li>
            <li>FIND A STORE</li>
            <li>BECOME A MEMBER</li>
            <li>NIKA JOURNAL</li>
            <li>SEND US FEEDBACK</li>
          </LinksList>
        </LinksContainer>
        <HelpAboutContainer>
          <GetHelpSection>GET HELP</GetHelpSection>
          <AboutSection>ABOUT NIKA</AboutSection>
        </HelpAboutContainer>
        <SocialMediaContainer>
          <AiFillTwitterCircle size={35} />
          <BiLogoFacebook size={35} />
          <TiSocialYoutubeCircular size={35} />
          <TiSocialInstagram size={35} />
        </SocialMediaContainer>
      </FooterTopSection>
      <FooterBottomSection>
        <>
          <BottomLinksList>
            <li>Guides</li>
            <li>Terms of Sale</li>
            <li>Terms of Use</li>
            <li>Nike Privacy Policy</li>
          </BottomLinksList>
        </>
        <DesignerContainer>
          <CopyrightText>© 2023 Nika, Inc. All Rights Reserved</CopyrightText>
          <DesignerInfo>
            <span>Projected by</span>
            <a href=''>Tomasz Grobelski</a>
          </DesignerInfo>
        </DesignerContainer>
      </FooterBottomSection>
    </FooterSectionContainer>
  );
}

export default FooterSection;
