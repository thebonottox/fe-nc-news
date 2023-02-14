import "./App.css";
import { Header } from "./components/header";
import { NavBar } from "./components/nav_bar";
import { Articles } from "./components/articles";
import { Route, Routes } from "react-router-dom";
import { SingleArticle } from "./components/single_article";
import { Coding } from "./components/topic_coding";
import { Football } from "./components/topic_football";
import { Cooking } from "./components/topic_cooking";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/coding" element={<Coding />} />
        <Route path="/cooking" element={<Cooking />} />
        <Route path="/football" element={<Football />} />
      </Routes>
    </div>
  );
}

export default App;
