import { ContactUsBox, ContactUsContainer, ContactUsTitle } from '../../../styles/ContactPage/ContactUs.styles';
import ContactBoxPattern from './ContactBoxPattern';
import contactList from './contactList';

function ContactUs() {
  const contactBox = contactList.map((contact, index) => {
    return (
      <ContactBoxPattern
        key={index}
        image={contact.img}
        title={contact.title}
        description={contact.description}
        times={contact.times}
        days={contact.days}
      />
    );
  });

  return (
    <ContactUsContainer>
      <ContactUsTitle>CONTACT US</ContactUsTitle>
      <ContactUsBox>{contactBox}</ContactUsBox>
    </ContactUsContainer>
  );
}

export default ContactUs;
