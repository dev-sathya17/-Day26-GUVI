import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="link" to="/courses/all">
            All
          </Link>
        </li>
        <li>
          <Link className="link" to="/courses/fsd">
            Full Stack Development
          </Link>
        </li>
        <li>
          <Link className="link" to="/courses/data-science">
            Data Science
          </Link>
        </li>
        <li>
          <Link className="link" to="/courses/cyber-security">
            Cyber Security
          </Link>
        </li>
        <li>
          <Link className="link" to="/courses/careers">
            Career
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
