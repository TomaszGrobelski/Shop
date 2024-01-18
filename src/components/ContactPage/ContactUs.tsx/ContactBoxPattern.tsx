import {
  ContactBoxContainer,
  ContactImage,
  ContactTitle,
  ContentContainer,
  DescriptionText,
  ImageContainer,
} from '../../../styles/ContactPage/ContactBoxPattern.styles';
import { ContactBoxPatternProps } from '../../../types/ContactPage/contactPage.types';

function ContactBoxPattern({ image, title, description, times, days }: ContactBoxPatternProps) {
  return (
    <ContactBoxContainer>
      <ImageContainer>
        <ContactImage src={image} alt={title} />
      </ImageContainer>
      <ContentContainer>
        <ContactTitle>{title}</ContactTitle>
        <DescriptionText>{description}</DescriptionText>
        <span>{times}</span>
        <span>{days}</span>
      </ContentContainer>
    </ContactBoxContainer>
  );
}

export default ContactBoxPattern;
