import { Link } from "react-router-dom";

export default function Main() {
  return (
    <section className="main">
      <div>
        <h2 className="name">Hello, I&apos;m Abdelrahman</h2>
        <h2>
          <span rel="preload">Front-end developer</span>
        </h2>
        <h3>Designing responsive web pages</h3>
        <Link
          to="/"
          onClick={() =>
            document
              .querySelector("#projects")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="main-btn"
        >
          View my projects
        </Link>
        <div className="social-icons">
          <Link
            to="https://www.facebook.com/AbdoAshraf1252000"
            aria-label="facebook"
            target="_blank"
          >
            <img
              src="/icons/facebook.svg"
              width={30}
              height={30}
              alt="facebook"
            ></img>
          </Link>
          <Link
            to="https://www.linkedin.com/in/abdelrahman-ashraf-883992216"
            target="_blank"
            aria-label="linkedin"
          >
            <img
              src="/icons/linkedin.svg"
              width={30}
              height={30}
              alt="linkedin"
            ></img>
          </Link>
          <Link
            to="https://github.com/Abdelrahman-Ashraf22"
            aria-label="github"
            target="_blank"
          >
            <img
              src="/icons/github.svg"
              width={30}
              height={30}
              alt="github"
            ></img>
          </Link>
          <Link
            to="https://www.behance.net/abdoashraf20"
            aria-label="behance"
            target="_blank"
          >
            <img
              src="/icons/behance.svg"
              width={30}
              height={30}
              alt="behance"
            ></img>
          </Link>
        </div>
      </div>
    </section>
  );
}
