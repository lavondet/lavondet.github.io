import './App.css';
import React from "react";
import Navbar from './Navbar';
import Welcome from './Welcome';
import About from './About';
import Journey from './Journey';
import Skills from './Skills';
import Projects from './Projects';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Welcome />

      <div class="subsections">

        <About />

        <Journey />

        <Skills />

        <Projects />

      </div>

    </div>
  );
}

export default App;
