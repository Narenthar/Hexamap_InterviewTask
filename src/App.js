import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from "./Components/Header";
import {About} from "./Components/About";
import {Projects} from "./Components/Projects";
import {Skills} from "./Components/Skills";
import {Footer} from "./Components/Footer"


function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
