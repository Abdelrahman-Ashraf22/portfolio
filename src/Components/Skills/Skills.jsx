import React, { Fragment } from "react";
import { useDarkMode } from "../../context/ThemeContext";

const Skills = React.memo(() => {
  const img = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
    "/9.png",
    "/10.png",
    "/11.png",
    "/12.webp",
    "/13.png",
    "/14.png",
    "/15.png",
    "/16.png",
  ];
  const { isDarkMode } = useDarkMode();

  return (
    <Fragment>
      <div
        className="skills w-[900px] my-[50px] mx-[auto] p-[20px]  [@media(max-width:1199px)]:w-[80%] [@media(max-width:992px)]:w-[90%] "
        id="skills"
      >
        <h3 className="center-title [@media(max-width:1199px)]:text-[36px] [@media(max-width:768px)]:text-[30px] [@media(max-width:576px)]:text-[28px]">
          Skills
        </h3>
        <p className="text-center text-[26px] my-[20px] mx-[auto] [@media(max-width:1199px)]:text-[24px] [@media(max-width:768px)]:text-[20px] [@media(max-width:576px)]:text-[18px]">
          The skills, tools and technologies I use:
        </p>
        <ul className="flex flex-wrap justify-between items-center flex-row [@media(max-width:992px)]:w-[100%] [@media(max-width:992px)]:justify-center  [@media(max-width:576px)]:items-center ">
          {img.map((imgSrc, id) => (
            <li
              key={id}
              className="my-[20px] mx-[auto] [@media(max-width:992px)]:m-[10px] [@media(max-width:576px)]:my-[5px] [@media(max-width:576px)]:mx-[0] "
            >
              <img
                src={imgSrc}
                className="skill-image clear-both w-[45px] m-[2px] [@media(max-width:768px)]:w-[35px]"
                loading="lazy"
                alt={`Skill ${id + 1}`}
                width="640"
                height="400"
              />
            </li>
          ))}
        </ul>
      </div>
      <hr className={`${isDarkMode ? "" : "text-[#4c4c4c]"}`} />
    </Fragment>
  );
});

export default Skills;
