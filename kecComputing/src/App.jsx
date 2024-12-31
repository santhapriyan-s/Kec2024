import "./App.css";
import About from "./Components/FunctionalComponents/About";
import Contact from "./Components/FunctionalComponents/Contact";
import Gallery from "./Components/FunctionalComponents/Gallery";
import Home from "./Components/FunctionalComponents/Home";
import NavBar from "./Components/FunctionalComponents/NavBar";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element= {<About college = "Kongu Engineering" clg1 = "Kongu Arts" clg2 = "Naturopathy"/>} />
          <Route path="/gallery" element = {<Gallery />} />
          <Route path="/contact" element = {<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
