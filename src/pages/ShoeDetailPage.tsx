import Navbar from "../components/Navigation/Navbar";
import Slider from "../components/ShoesPage/Slider/Slider";
import ShoeDetailSection from "../components/ShoeDetailPage/ShoeDetailSection";
import FooterSection from "../components/Footer/FooterSection";

function ShoeDetailPage() {
  return (
    <div>
      <Navbar />
      <Slider />
      <ShoeDetailSection />
      <FooterSection />
    </div>
  );
}

export default ShoeDetailPage;
