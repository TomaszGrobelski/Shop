import Hero from '../../images/Home/Hero.jpg';
import PrimaryButton from '../Buttons/PrimaryButton';
import Slider from '../ShoesPage/Slider/Slider';
import BillBowerman from './BillBowerman.tsx/BillBowerman';
import SportDisciplinesSlider from './Discipline/SportDisciplinesSlider';
import { HeroContainer, HeroDescription, HeroImage, HeroTextContainer, HeroTitle } from '../../styles/HomePage/HomeSection.styles';

function HomeSection() {
  return (
    <section>
      <Slider />
      <HeroContainer>
        <HeroImage src={Hero} alt='HeroPage' />
        <HeroTextContainer>
          <HeroTitle>OWN THE FLOOR</HeroTitle>
          <HeroDescription>Show the world your style with iconic sneakers and fresh looks.</HeroDescription>
          <PrimaryButton className='h-[40px] w-[100px] text-black'> Shop </PrimaryButton>
        </HeroTextContainer>
      </HeroContainer>
      <SportDisciplinesSlider />
      <BillBowerman />
    </section>
  );
}

export default HomeSection;
