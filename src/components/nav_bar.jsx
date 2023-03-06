import { Link } from "react-router-dom";
import { useState } from "react";
import { Topics } from "./ArticlesByTopic";

export const NavBar = () => {
  const [topic, setTopic] = useState("");

  return (
    <div>
      <nav className="nav_bar">
        <Link className="nav_link" to="/" onClick={() => setTopic("")}>
          Home
        </Link>
        <Link
          className="nav_link"
          to="/coding"
          onClick={() => setTopic("coding")}
        >
          Coding
        </Link>
        <Link
          className="nav_link"
          to="/cooking"
          onClick={() => setTopic("cooking")}
        >
          Cooking
        </Link>
        <Link
          className="nav_link"
          to="/football"
          onClick={() => setTopic("football")}
        >
          Football
        </Link>
      </nav>

      <Topics topic={topic} />
    </div>
  );
};
