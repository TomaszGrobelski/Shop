import Slider from "../ShoesPage/Slider/Slider";
import ButtonCustom from "../Buttons/ButtonCustom";
import Hero from "../../images/Home/Hero.jpg";

function HomeSection() {
  return (
    <section>
      <Slider />
      <div className="relative text-[18px] font-bold text-white">
        <img className=" aspect-video blur-[2px]" src={Hero} alt="HeroPage" />
        <div className="absolute bottom-[10%] left-[5%] mix-blend-exclusion ">
          <h1 className="text-[28px] sm:text-[38px]">OWN THE FLOOR</h1>
          <p className="text-[20px] sm:text-[28px] my-2">Show the world your style with iconic sneakers and fresh looks.</p>
          <ButtonCustom className="text-black h-[40px] w-[100px]"> Shop </ButtonCustom>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
