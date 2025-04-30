import { Fragment, useEffect, useState, useCallback, useMemo } from "react";
import { FaAngleUp } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";
import { IoMenu } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

import { useDarkMode } from "../../context/ThemeContext";

function Navbar() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarClassName, setNavbarClassName] = useState("");
  const [showScrollUpButton, setShowScrollUpButton] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY);
    window.scrollY <= 10 && setActiveItem("");
  }, []);

  useEffect(() => {
    const handleScrollDebounced = () => {
      requestAnimationFrame(handleScroll);
    };
    window.addEventListener("scroll", handleScrollDebounced);
    return () => {
      window.removeEventListener("scroll", handleScrollDebounced);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (scrollPosition > 10) {
      setNavbarClassName(
        "fixed top-0 left-0 right-0 mx-auto w-[90%] max-w-[900px] z-50"
      );
      setShowScrollUpButton(true);
    } else {
      setNavbarClassName("");
      setShowScrollUpButton(false);
    }
  }, [scrollPosition]);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setMenuOpen(false); // Close the menu when an item is clicked
  };

  const handleScrollUp = () => {
    scroll.scrollToTop({ smooth: true });
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = (event) => {
    if (
      menuOpen &&
      !event.target.closest(".navbar") &&
      !event.target.closest(".menu-toggle")
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [menuOpen]);

  const menuItems = useMemo(
    () => ["services", "skills", "portfolio", "contact"],
    []
  );

  return (
    <Fragment>
      <div
        className={`${navbarClassName} ${
          isDarkMode ? "" : "text-[#4c4c4c]"
        } flex justify-between items-center mx-auto my-[20px] px-[30px] py-[10px] border-[1px] border-solid border-[#ffffff59] uppercase  bg-[rgba(255,255,255,0.1)] rounded-[10px] shadow-lg transition-colors duration-300 w-[900px] [@media(max-width:1199px)]:w-[90%] [@media(max-width:768px)]:p-[10px] [@media(max-width:480px)]:p-[8px]  [@media(max-width:480px)]:my-[15px] navbar`}
      >
        <span
          className={`menu-toggle hidden [@media(max-width:768px)]:flex ${
            isDarkMode ? "" : "text-[#4c4c4c]"
          }"`}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <IoMenu />
        </span>
        <h3 className="[@media(max-width:480px)]:text-[20px]">
          Abdelrahman Ashraf
        </h3>
        <ul
          className={`list flex justify-between items-center transition-all duration-400 ease-in-out list-none text-white my-[10px]  ${
            menuOpen
              ? `[@media(max-width:768px)]:flex-col [@media(max-width:768px)]:w-[90%] [@media(max-width:768px)]:absolute ${
                  navbarClassName
                    ? "[@media(max-width:768px)]:top-[40px] [@media(max-width:768px)]:w-[100%]"
                    : "[@media(max-width:768px)]:top-[60px]"
                } [@media(max-width:768px)]:left-[0] [@media(max-width:768px)]:right-[0] [@media(max-width:768px)]:bg-[rgba(255,_255,_255,_0.1)] [@media(max-width:768px)]:rounded-[10px] [@media(max-width:768px)]:px-[0] [@media(max-width:768px)]:py-[10px] [@media(max-width:768px)]:z-10  [@media(max-width:768px)]:mx-auto [@media(max-width:768px)]:shadow-lg [@media(max-width:768px)]:backdrop-blur-[3px]`
              : "[@media(max-width:768px)]:hidden"
          } `}
        >
          {menuItems.map((item) => (
            <li
              key={item}
              className={`mx-[15px] my-[0] relative text-[#fff] hover:text-[#33a5e4]  cursor-pointer [@media(max-width:768px)]:mx-[0] [@media(max-width:768px)]:my-[5px] [@media(max-width:768px)]:text-center  [@media(max-width:480px)]:text-[14px] `}
            >
              <Link
                to={item}
                smooth={true}
                href={item}
                duration={500}
                onClick={() => handleItemClick(item)}
                spy={true}
                onSetActive={() => setActiveItem(item)}
                className={`no-underline relative after:content-[""] after:block after:h-[2px] after:bg-[#33a5e4] after:w-0 after:transition-all after:ease-in-out after:duration-400 after:absolute after:left-[50%] after:bottom-[-5px] after:transform after:-translate-x-1/2  hover:after:w-[100%] ${
                  isDarkMode ? "" : "text-[#33a5e4]"
                } ${
                  activeItem === item
                    ? "text-[#33a5e4] hover:after:w-[100%] after:w-[100%]"
                    : ""
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={toggleDarkMode}
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              className={`border-[1px] border-solid text-[12px] ${
                isDarkMode
                  ? "bg-[#444] text-[#fff] hover:bg-[#666] hover:text-[#fff] border-[#666]"
                  : "bg-[#f0f0f0] text-[#333] hover:bg-[#d0d0d0] hover:text-[#000] border-[#d0d0d0]"
              } p-1.5 rounded-2xl cursor-pointer transition duration-300 ease-in-out`}
            >
              {isDarkMode ? (
                <MdSunny className="text-[#ffcc00] hover:text-[#fff] font-bold" />
              ) : (
                <FaMoon className="text-[#555]" />
              )}
            </button>
          </li>
        </ul>
      </div>
      {showScrollUpButton && (
        <button
          className={`${
            isDarkMode
              ? "text-[#fff] hover:text-[#fff]"
              : "text-[#000] hover:text-[#000]"
          } scroll-up w-[30px] h-[30px] fixed bottom-[20px] right-[20px] bg-transparent rounded-xl size-[20px] weight-[700] outline-0 border-[2px] border-solid border-[#33a5e4] flex justify-center items-center cursor-pointer hover:bg-[#33a5e4]  transition-colors duration-300 z-99`}
          onClick={handleScrollUp}
          aria-label="Scroll to top"
        >
          <FaAngleUp />
        </button>
      )}
    </Fragment>
  );
}

export default Navbar;
