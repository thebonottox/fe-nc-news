import "./App.css";
import { Header } from "./components/header";
import { NavBar } from "./components/nav_bar";
import { Articles } from "./components/articles";
import { Route, Routes } from "react-router-dom";
import { SingleArticle } from "./components/single_article";
import { Topics } from "./components/ArticlesByTopic";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/coding" element={<Topics />} />
        <Route path="/cooking" element={<Topics />} />
        <Route path="/football" element={<Topics />} />
      </Routes>
    </div>
  );
}

export default App;
