<<<<<<< HEAD
import Slider from "../ShoesPage/Slider/Slider";
import PrimaryButton from "../Buttons/PrimaryButton";
=======
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
import Hero from "../../images/Home/Hero.jpg";
import PrimaryButton from "../Buttons/PrimaryButton";
import Slider from "../ShoesPage/Slider/Slider";
import BillBowerman from "./BillBowerman.tsx/BillBowerman";
import SportDisciplinesSlider from "./Discipline/SportDisciplinesSlider";

function HomeSection() {
  return (
    <section>
      <Slider />
      <div className="relative text-[18px] font-bold text-white">
        <img className=" aspect-video blur-[2px]" src={Hero} alt="HeroPage" />
        <div className="absolute bottom-[10%] left-[5%] mix-blend-exclusion ">
          <h1 className="text-[28px] sm:text-[38px]">OWN THE FLOOR</h1>
<<<<<<< HEAD
          <p className="text-[20px] sm:text-[28px] my-2">
            Show the world your style with iconic sneakers and fresh looks.
          </p>
          <PrimaryButton className="text-black h-[40px] w-[100px]"> Shop </PrimaryButton>
=======
          <p className="my-2 text-[20px] sm:text-[28px]">
            Show the world your style with iconic sneakers and fresh looks.
          </p>
          <PrimaryButton className="h-[40px] w-[100px] text-black">
            {" "}
            Shop{" "}
          </PrimaryButton>
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
        </div>
      </div>
      <SportDisciplinesSlider />
      <BillBowerman />
    </section>
  );
}

export default HomeSection;
