import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <p className="footer-title">
        Copyright @ <span>Abdelrahman Ashraf</span>
      </p>
      <div className="social-icons">
        <Link
          to="https://www.facebook.com/AbdoAshraf1252000"
          aria-label="facebook"
        >
          <img
            src="/portfolio/icons/facebook.svg"
            width={30}
            height={30}
            alt="facebook"
          ></img>
        </Link>
        <Link
          aria-label="linkedin"
          to="https://www.linkedin.com/in/abdelrahman-ashraf-883992216"
        >
          <img
            src="/portfolio/icons/linkedin.svg"
            width={30}
            height={30}
            alt="linkedin"
          ></img>
        </Link>
        <Link aria-label="github" to="https://github.com/Abdelrahman-Ashraf22">
          <img
            src="/portfolio/icons/github.svg"
            width={30}
            height={30}
            alt="github"
          ></img>
        </Link>
        <Link aria-label="behance" to="https://www.behance.net/abdoashraf20">
          <img
            src="/portfolio/icons/behance.svg"
            width={30}
            height={30}
            alt="behance"
          ></img>
        </Link>
      </div>
    </footer>
  );
}
