import './App.css';
import React from 'react';

function Welcome() {

  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

    return(
      <header id="home" class="welcome">
        <h1 class="welcome-line1">
          Hello, I'm Louis.
        </h1>
        <h5 class="welcome-line2">
          CS @ <span class="mit-text">MIT</span> | Class of 2028
        </h5>
        <button type="button" onClick={handleScroll}>Learn more </button>
      </header>
    );
}

export default Welcome;
