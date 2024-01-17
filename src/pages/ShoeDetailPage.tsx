import FooterSection from '../components/Footer/FooterSection';
import Navbar from '../components/Navigation/Navbar';
import ShoeDetailSection from '../components/ShoeDetailPage/ShoeDetailSection';
import Slider from '../components/ShoesPage/Slider/Slider';

function ShoeDetailPage() {
  return (
    <>
      <Navbar />
      <Slider />
      <ShoeDetailSection />
      <FooterSection />
    </>
  );
}

export default ShoeDetailPage;
