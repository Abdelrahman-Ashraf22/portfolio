/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Fragment } from "react";
import { useDarkMode } from "../../context/ThemeContext";

function App() {
  const { isDarkMode } = useDarkMode();

  const headings = [
    "Frontend",
    "Developer",
    "I'm Abdelrahman, A ",
    "responsive user interfaces and staying updated on the latest",
    "web technologies to enhance user experience.",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const fileName = "Abdelrahman Ashraf Frontend Developer.pdf";
  const fileUrl = "/Abdelrahman Ashraf Frontend Developer.pdf";

  return (
    <Fragment>
      <motion.div
        className={`home ${
          isDarkMode ? "" : "text-[#4c4c4c]"
        } max-w-[900px] my-[100px] mx-auto h-100vh [@media(max-width:768px)]:px-[50px] [@media(max-width:768px)]:py-[12px] [@media(max-width:768px)]:text-[14px] [@media(max-width:992px)]:w-[90%] [@media(max-width:768px)]:w-[80%]`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          variants={itemVariants}
          className="text-[60px] font-bold uppercase gradient-text leading-[1.1] [@media(max-width:768px)]:text-[40px] [@media(max-width:480px)]:text-[30px]"
        >
          {headings[0]}
          <br />
          {headings[1]}
        </motion.h2>

        <motion.h3
          variants={itemVariants}
          className="my-[30px] mx-auto [@media(max-width:768px)]:text-[16px] [@media(max-width:768px)]:mx-[auto] [@media(max-width:768px)]:my-[20px] [@media(max-width:480px)]:text-[14px]"
        >
          {headings[2]}
          <span className="text-[#33a5e4] capitalize">
            frontend developer
          </span>{" "}
          who enjoys crafting
          <br />
          {headings[3]} <br />
          {headings[4]} <br />
          {headings[5]}
        </motion.h3>

        <motion.button
          className={`view text-center cursor-pointer w-[270px] uppercase outline-0 overflow-hidden relative ${
            isDarkMode ? "text-[#dedede]" : "text-[#4c4c4c]"
          } font-bold text-[18px] bg-transparent px-[80px] py-[20px] mx-auto my-[10px] min-h-[60px] shadow-lg border-[1.5px] border-solid border-[#c23f9d] transition duration-300 ease-in-out [@media(max-width:768px)]:px-[40px] [@media(max-width:768px)]:py-[15px] [@media(max-width:768px)]:text-[16px] [@media(max-width:480px)]:px-[30px] [@media(max-width:480px)]:py-[12px] [@media(max-width:480px)]:text-[14px]`}
          variants={itemVariants}
        >
          <a
            href={fileUrl}
            download={fileName}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            Download my CV
          </a>
        </motion.button>
      </motion.div>
      <hr className={`${isDarkMode ? "" : "text-[#4c4c4c]"}`} />
    </Fragment>
  );
}

export default App;
