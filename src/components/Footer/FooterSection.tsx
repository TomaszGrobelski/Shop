import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { TiSocialInstagram, TiSocialYoutubeCircular } from "react-icons/ti";

function FooterSection() {
  return (
    <footer className=" flex flex-col bg-darkNika p-4 text-[14px] text-white ">
      <div className="justify-between sm:flex">
        <div className="flex ">
          <ul className="flex flex-col gap-3 font-bold">
            <li>GIFT CARD</li>
            <li>PROMOTIONS</li>
            <li>FIND A STORE</li>
            <li>BECOME A MEMBER</li>
            <li>NIKA JOURNAL</li>
            <li>SEND US FEEDBACK</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="border-t-[1px] font-bold sm:border-t-0">GET HELP</div>
          <div className="font-bold">ABOUT NIKA</div>
        </div>
        <div className="my-4 flex gap-3">
          <AiFillTwitterCircle size={35} />
          <BiLogoFacebook size={35} />
          <TiSocialYoutubeCircular size={35} />
          <TiSocialInstagram size={35} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <ul className="flex flex-col gap-4 text-[12px] opacity-60 sm:flex-row sm:justify-end">
            <li>Guides</li>
            <li>Terms of Sale</li>
            <li>Terms of Use</li>
            <li>Nike Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
          <span className="opacity-60">
            © 2023 Nika, Inc. All Rights Reserved
          </span>
          <div className="flex gap-2">
            <span className="opacity-60">Projected by</span>
            <a href="">Tomasz Grobelski</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
