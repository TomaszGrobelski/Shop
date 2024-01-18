import { ContactSectionContainer, ContactSectionHeader } from '../../styles/ContactPage/ContactSection.styles';
import ContactUs from './ContactUs.tsx/ContactUs';
import QuickAssists from './QuickAssists.tsx/QuickAssists';

function ContactSection() {
  return (
    <ContactSectionContainer>
      <ContactSectionHeader>GET HELP</ContactSectionHeader>
      <ContactUs />
      <QuickAssists />
    </ContactSectionContainer>
  );
}

export default ContactSection;
