import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="title">Projects</h2>
      <div className="content">
        <div className="project-card">
          <div className="project-img">
            <img
              src="/portfolio/imgs/1.webp"
              alt="e-commerce-web-app"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="project-info">
            <p className="project-category">
              An E-Commerce-Web-App designed with HTML,CSS, and ReactJs.
            </p>
            <b className="project-title">
              <span>E-Commerce</span>
              <Link
                to="https://abdelrahman-ashraf22.github.io/e-commerce-web-app/"
                target="_blank"
                className="more-details"
              >
                More Details
              </Link>
            </b>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img
              src="/portfolio/imgs/2.webp"
              alt="to-do-list"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="project-info">
            <p className="project-category">
              Design to do list as you can organize your work by listing it.
            </p>
            <b className="project-title">
              <span>to do list</span>
              <Link
                to="https://abdelrahman-ashraf22.github.io/To-do-list/"
                target="_blank"
                className="more-details"
              >
                More Details
              </Link>
            </b>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img
              src="/portfolio/imgs/3.webp"
              alt="weather-app"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="project-info">
            <p className="project-category">
              Weather app that show you the weather of any city in the world.
            </p>
            <b className="project-title">
              <span>weather-app</span>
              <Link
                to="https://abdelrahman-ashraf22.github.io/Weather-App/"
                target="_blank"
                className="more-details"
              >
                More Details
              </Link>
            </b>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img
              src="/portfolio/imgs/4.webp"
              alt="quotes-generator"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="project-info">
            <p className="project-category">
              Random quots generator using React and an external API.
            </p>
            <b className="project-title">
              <span>random quotes </span>
              <Link
                to="https://abdelrahman-ashraf22.github.io/Random-quotes-generator/"
                target="_blank"
                className="more-details"
              >
                More Details
              </Link>
            </b>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img
              src="/portfolio/imgs/5.webp"
              alt="youtube-clone"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="project-info">
            <p className="project-category">
              &quot;Youtube clone&quot; Build with a pure HTML and CSS with
              responsive design.
            </p>
            <b className="project-title">
              <span>Youtube Clone</span>
              <Link
                to="https://abdelrahman-ashraf22.github.io/Youtube-clone/"
                target="_blank"
                className="more-details"
              >
                More Details
              </Link>
            </b>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img
              src="/portfolio/imgs/6.webp"
              alt="twitter-clone"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="project-info">
            <p className="project-category">
              &quot;Twitter clone&quot; A responsive design with pure HTML and
              CSS
            </p>
            <b className="project-title">
              <span>Twitter clone</span>
              <Link
                to="https://abdelrahman-ashraf22.github.io/Twitter-clone-dark-mode/"
                target="_blank"
                className="more-details"
              >
                More Details
              </Link>
            </b>
          </div>
        </div>
      </div>
    </section>
  );
}
