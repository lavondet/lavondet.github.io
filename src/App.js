import './App.css';
import React from "react";
import Navbar from './Navbar';
import Welcome from './Welcome';
import About from './About';
import Journey from './Journey';
import Skills from './Skills';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Welcome />

      <div class="subsections">

        <About />

        <Journey />

        <Skills />

      </div>

    </div>
  );
}

export default App;
