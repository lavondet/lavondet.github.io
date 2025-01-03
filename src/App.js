import './App.css';
import React from "react";
import Navbar from './Navbar';
import Welcome from './Welcome';
import About from './About';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Welcome />

      <div class="subsections">

        <About />

      </div>

    </div>
  );
}

export default App;
