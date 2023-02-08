import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="nav_bar">
      <Link className="nav_link" to="/">
        Home
      </Link>
    </nav>
  );
};
