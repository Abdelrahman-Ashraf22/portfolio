import { useDarkMode } from "../../context/ThemeContext";

function Footer() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="max-w-[900px] w-[100%] mx-[auto] my-[20px]">
      <p
        className={`text-center ${
          isDarkMode ? "text-[#fff]" : "text-[#0d0d0d]"
        }`}
      >
        &copy; 2025 all rights reserved{" "}
        <img
          src={!isDarkMode ? "/light-logo.jpg" : "dark-logo.jpg"}
          className="w-[17px] h-[17px] inline rounded-xl m-[1px]"
          alt="abdo-ashraf-logo"
          loading="lazy"
        />
        , Abdelrahman Ashraf
      </p>
    </div>
  );
}

export default Footer;
