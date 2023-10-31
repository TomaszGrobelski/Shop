import { Nav } from "./Navbar.styles";
import LogOut from "./LogOut/LogOut";
import MobileNav from "./MobileNav";
import logoNika from "../../images/Logo/logoNika.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import navigationLinks from "./navigationLinks";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import getIconList from "./LogOut/getIconList";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [navVisible, setNavVisible] = useState(false);
  const [bagItemCount, setBagItemCount] = useState(0);

  useEffect(() => {
    const bagItems = JSON.parse(localStorage.getItem("bagItems") || "[]");
    setBagItemCount(bagItems.length);

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

  const iconsList = getIconList(bagItemCount).map((icon, index) => (
    <Link key={index} to={icon.path}>
      {icon.icon}
    </Link>
  ));

  const navClick = () => {
    setNavVisible(!navVisible);
  };
  /////////////dsadsadsadsa
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    setPrevScrollpos(currentScrollPos);
    setVisible(visible);
  }, [prevScrollpos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Nav style={{ top: visible ? 0 : "-100px", position: "fixed", transition: "top 0.2s" }}>
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
