import About from "./components/About";
import Connect from "./components/Connect";
import Header from "./components/Header";
import ParticlesComponent from "./components/ParticlesComponent";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div>
      <ParticlesComponent id={"tsparticles"} />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Connect />
    </div>
  );
}
