import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Topics } from "./ArticlesByTopic";

export const NavBar = () => {
  const [topic, setTopic] = useState("");

  return (
    <div>
      <nav className="nav_bar">
        <NavLink className="nav_link" to="/" onClick={() => setTopic("")}>
          Home
        </NavLink>
        <NavLink
          className="nav_link"
          to="/coding"
          onClick={() => setTopic("coding")}
        >
          Coding
        </NavLink>
        <NavLink
          className="nav_link"
          to="/cooking"
          onClick={() => setTopic("cooking")}
        >
          Cooking
        </NavLink>
        <NavLink
          className="nav_link"
          to="/football"
          onClick={() => setTopic("football")}
        >
          Football
        </NavLink>
      </nav>

      <Topics topic={topic} />
    </div>
  );
};
