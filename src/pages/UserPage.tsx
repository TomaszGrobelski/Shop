<<<<<<< HEAD
import Navbar from "../components/Navigation/Navbar";
import UserSection from "../components/UserPage/UserSection";
import FooterSection from "../components/Footer/FooterSection";

function UserPage() {
  return (
    <div>
      <Navbar />
      <UserSection />
      <FooterSection />
    </div>
=======
import FooterSection from "../components/Footer/FooterSection";
import Navbar from "../components/Navigation/Navbar";
import UserSection from "../components/UserPage/UserSection";

function UserPage() {
  return (
    <>
      <Navbar />
      <UserSection />
      <FooterSection />
    </>
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
  );
}

export default UserPage;
