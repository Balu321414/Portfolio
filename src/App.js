import Navbar from "./Componenets/Navbar/navbar";
import Introduction from "./Componenets/Introduction/introduction";
import About from "./Componenets/About/about";
import Education from "./Componenets/Education/education";
import Skills from "./Componenets/Skills/skills";
import Experience from "./Componenets/Experience/experience";
import Project from "./Componenets/Projects/project";
import Contact from "./Componenets/Contact/contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
