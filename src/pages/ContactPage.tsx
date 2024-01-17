<<<<<<< HEAD
import Navbar from "../components/Navigation/Navbar";
import ContactSection from "../components/ContactPage/ContactSection";
import FooterSection from "../components/Footer/FooterSection";

function ContactPage() {
  return (
    <div>
      <Navbar />
      <ContactSection />
      <FooterSection />
    </div>
=======
import ContactSection from "../components/ContactPage/ContactSection";
import FooterSection from "../components/Footer/FooterSection";
import Navbar from "../components/Navigation/Navbar";

function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactSection />
      <FooterSection />
    </>
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
  );
}

export default ContactPage;
