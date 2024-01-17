import Hero from '../../images/Home/Hero.jpg';
import PrimaryButton from '../Buttons/PrimaryButton';
import Slider from '../ShoesPage/Slider/Slider';
import BillBowerman from './BillBowerman.tsx/BillBowerman';
import SportDisciplinesSlider from './Discipline/SportDisciplinesSlider';

function HomeSection() {
  return (
    <section>
      <Slider />
      <div className='relative text-[18px] font-bold text-white'>
        <img className=' aspect-video blur-[2px]' src={Hero} alt='HeroPage' />
        <div className='absolute bottom-[10%] left-[5%] mix-blend-exclusion '>
          <h1 className='text-[28px] sm:text-[38px]'>OWN THE FLOOR</h1>
          <p className='my-2 text-[20px] sm:text-[28px]'>
            Show the world your style with iconic sneakers and fresh looks.
          </p>
          <PrimaryButton className='h-[40px] w-[100px] text-black'>
            {' '}
            Shop{' '}
          </PrimaryButton>
        </div>
      </div>
      <SportDisciplinesSlider />
      <BillBowerman />
    </section>
  );
}

export default HomeSection;
