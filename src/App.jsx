import './App.css'
import { HashRouter} from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";

function App() {

  return (
    <HashRouter>
      <Home />
      <AboutMe />
    </HashRouter>
  )
}

export default App
