import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/all">All</Link>
        </li>
        <li>
          <Link to="/fsd">Full Stack Development</Link>
        </li>
        <li>
          <Link to="/data-science">Data Science</Link>
        </li>
        <li>
          <Link to="/cyber-security">Cyber Security</Link>
        </li>
        <li>
          <Link to="/careers">Career</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
