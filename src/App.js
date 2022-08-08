import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "./Components/Header";
import { About } from "./Components/About";
import { Projects } from "./Components/Projects";
import { Courosel } from "./Components/Courosel";
import { Footer } from "./Components/Footer";
// import ScrollToTop from './scrolltotop';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Courosel />
      <Projects />
      <Footer />
      {/* <Routes>
          <Route  path="/" element={<About/>} />
          <Route  path="/" element={<Projects/>} />
          <Route  path="/" element={<Skills/>} />
          <Route  path="/" element={<Footer/>} />
          </Routes>
      </Router> */}
    </div>
  );
}

export default App;
