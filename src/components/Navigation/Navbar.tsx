import { Nav } from "./Navbar.styles";
import LogOut from "./LogOut/LogOut";
import MobileNav from "./MobileNav";
import logoNika from "../../images/Logo/logoNika.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import navigationLinks from "./navigationLinks";
import iconList from "./iconList";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";



function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [navVisible, setNavVisible] = useState(false);


  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    windowWidth > 640 ? setNavVisible(false) : null;

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const navList = navigationLinks.map((link, index) => (
    <li className=" font-semibold tracking-[1px] text-[16px]" key={index}>
      <Link to={link.path}>{link.name}</Link>
    </li>
  ));

  const iconsList = iconList.map((icon, index) => (
    <Link key={index} to={icon.path}>
      {icon.icon}
    </Link>
  ));

  const navClick = () => {
    setNavVisible(!navVisible);
  };

  return (
    <Nav>
      <Link to="/home">
        <img className="max-w-[100px]" src={logoNika} width={1103} height={338} alt="Logo" />
      </Link>
      <ul className="hidden sm:flex  gap-4">{navList}</ul>
      <div className="hidden sm:flex items-center gap-4 ">
        {iconsList}
        <LogOut />
      </div>
      {!navVisible && (
        <button onClick={navClick} className=" absolute left-[90%] mr-4 sm:hidden">
          <AiOutlineMenu size={26} />
        </button>
      )}
      <AnimatePresence>{navVisible && <MobileNav navVisible={navVisible} visible={navClick} />}</AnimatePresence>
    </Nav>
  );
}

export default Navbar;
