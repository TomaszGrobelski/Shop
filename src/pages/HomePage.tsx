import Navbar from "../components/Navigation/Navbar";
import HomeSection from '../components/HomePage/HomeSection'
import FooterSection from "../components/Footer/FooterSection";
import SportDisciplinesSlider from "../components/HomePage/Discipline/SportDisciplinesSlider";

function HomePage() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <SportDisciplinesSlider />
      <FooterSection />
    </>
  );
}

export default HomePage;
