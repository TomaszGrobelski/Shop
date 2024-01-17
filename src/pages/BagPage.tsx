<<<<<<< HEAD
import Navbar from "../components/Navigation/Navbar";
import BagSection from "../components/BagPage/BagSection";
import FooterSection from "../components/Footer/FooterSection";

function BagPage() {
  return (
    <div>
      <Navbar />
      <BagSection />
      <FooterSection />
    </div>
=======
import BagSection from "../components/BagPage/BagSection";
import FooterSection from "../components/Footer/FooterSection";
import Navbar from "../components/Navigation/Navbar";

function BagPage() {
  return (
    <>
      <Navbar />
      <BagSection />
      <FooterSection />
    </>
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
  );
}

export default BagPage;
