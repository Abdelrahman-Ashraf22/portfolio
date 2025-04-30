import React, { Fragment } from "react";
import { useDarkMode } from "../../context/ThemeContext";

function Portfolio() {
  const { isDarkMode } = useDarkMode();
  return (
    <Fragment>
      <div
        className="projects flex justify-center flex-wrap mx-[100px] mt-[50px] p-[20px]"
        id="portfolio"
      >
        <h2 className="center-title">Portfolio</h2>
        <div className="works flex items-center justify-center flex-wrap my-[10px] mx-[auto]">
          {[
            {
              imgSrc: "/project1.png",
              alt: "cabin-haven",
              title: "Cabin",
              subtitle: "Haven",
              description: "Manage hotel rooms and cabin rentals.",
              link: "https://cabin-haven.vercel.app/login",
            },
            {
              imgSrc: "/project2.png",
              alt: "e-commerce",
              title: "E-commerce",
              subtitle: "web app",
              description:
                "An E-Commerce-Web-App designed with HTML,CSS, and React.",
              link: "https://store-up-six.vercel.app/",
            },
            {
              imgSrc: "/project3.jpg",
              alt: "to-do-list",
              title: "To Do",
              subtitle: "List",
              description:
                "Design to do list as you can organize your work by listing it.",
              link: "https://abdelrahman-ashraf22.github.io/To-do-list/",
            },
            {
              imgSrc: "/project4.png",
              alt: "weather-app",
              title: "Weather",
              subtitle: "App",
              description:
                "Weather app that show you the weather of any city in the world.",
              link: "https://abdelrahman-ashraf22.github.io/Weather-App/",
            },
            {
              imgSrc: "/project5.jpg",
              alt: "random-quots-generator",
              title: "Random",
              subtitle: "Quotes",
              description:
                "Random quots generator using React and an external API.",
              link: "https://abdelrahman-ashraf22.github.io/Random-quotes-generator/",
            },
            {
              imgSrc: "/project6.png",
              alt: "twitter-clone",
              title: "Typing-speed",
              subtitle: "test",
              description: "A responsive design with pure HTML and CSS",
              link: "https://abdelrahman-ashraf22.github.io/Typing-Speed-Game/",
            },
          ].map(({ imgSrc, alt, title, subtitle, description, link }) => (
            <figure className="fig" key={alt}>
              <img
                src={imgSrc}
                alt={alt}
                loading="lazy"
                width="640"
                height="400"
              />
              <div className="title">
                <div>
                  <h2>{title}</h2>
                  <h3>{subtitle}</h3>
                </div>
              </div>
              <figcaption>
                <p>{description}</p>
              </figcaption>
              <a aria-label={alt} href={link}></a>
            </figure>
          ))}
        </div>
      </div>
      <hr className={`${isDarkMode ? "" : "text-[#4c4c4c]"}`} />
    </Fragment>
  );
}

export default Portfolio;
