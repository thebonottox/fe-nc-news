import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="nav_bar">
      <Link className="nav_link" to="/">
        Home
      </Link>
      <Link className="nav_link" to="/Coding">
        Coding
      </Link>
      <Link className="nav_link" to="/Football">
        Football
      </Link>
      <Link className="nav_link" to="/Cooking">
        Cooking
      </Link>
    </nav>
  );
};
