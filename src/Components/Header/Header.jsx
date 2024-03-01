import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header>
        <Link className="logo">Abdelrahman</Link>
        <nav className="navigation">
          <Link
            to="/"
            onClick={() =>
              document
                .querySelector("#services")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Services
          </Link>
          <Link
            to="/"
            onClick={() =>
              document
                .querySelector("#projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </Link>
          <Link
            to="/"
            onClick={() =>
              document
                .querySelector("#stats")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Stats
          </Link>
          <Link
            to="/"
            onClick={() =>
              document
                .querySelector("#contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
}
