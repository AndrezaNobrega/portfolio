import Header from "./components/Header/Index";

import "./styles/theme.css";
import "./styles/global.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <Hero />
        <About />
        <Contact />
        <Projects />
        <Experience />
      </main>
    </div>
  );
};

export default App;
