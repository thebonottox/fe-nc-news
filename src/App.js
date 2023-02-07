import "./App.css";
import { Header } from "./components/header";
import { NavBar } from "./components/nav_bar";
import { Articles } from "./components/articles";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Articles/>
    </div>
  );
}

export default App;
