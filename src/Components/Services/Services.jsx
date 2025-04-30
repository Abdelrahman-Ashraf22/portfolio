import { Fragment } from "react";
import Card from "./Card";
import { FaPalette } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { FiFigma } from "react-icons/fi";
import { useDarkMode } from "../../context/ThemeContext";

export default function Services() {
  const { isDarkMode } = useDarkMode();

  const items = ["Web Development", "Web Design", "UI Design"];
  const desc = [
    "Developing web-pages using programming languages such as JavaScript, and React",
    "Design a responsive web-pages through code as a Frontend Developer",
    "As a UI designer, I passionately create mobile app screens and pages using Adobe XD and Figma",
  ];
  const icons = [<FaCode />, <FaPalette />, <FiFigma />];
  return (
    <Fragment>
      <div
        className="services w-[900px] my-[20px] mx-[auto] relative [@media(max-width:1199px)]:w-[80%] [@media(max-width:992px)]:w-[90%]"
        id="services"
      >
        <h2 className="center-title  [@media(max-width:1199px)]:text-[36px]  [@media(max-width:992px)]:text-[32px]  [@media(max-width:576px)]:text-[28px]">
          Services
        </h2>
        <div className="card-item flex  flex-col w-[900px] my-[10px] mx-[auto] font-sans   [@media(max-width:992px)]:w-[auto]  [@media(max-width:768px)]:w-[auto]  [@media(max-width:576px)]:w-[auto] ">
          {items.map((item, i) => (
            <Card
              key={i}
              text={item}
              index={i}
              desc={desc[i]}
              icons={icons[i]}
            />
          ))}
        </div>
      </div>
      <hr className={`${isDarkMode ? "" : "text-[#4c4c4c]"}`} />
    </Fragment>
  );
}
