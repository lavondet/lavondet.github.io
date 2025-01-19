import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function particlesInit(main) {
  loadFull(main);
}

function Welcome() {
  function handleScroll() {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header id="home" class="welcome">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true },
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            size: { value: 5, random: true },
            move: { enable: true, speed: 0.5 },
            opacity: { value: 0.5, random: true },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "attract", // Makes particles move away from the cursor
              },
            },
            modes: {
              repulse: {
                distance: 100, // Distance particles move away from the cursor
                duration: 0.4,
              },
              push: {
                quantity: 4, // Number of particles added on click
              },
            },
          },
        }}
      />
      <h1 class="welcome-line1">Hello, I'm Louis.</h1>
      <h5 class="welcome-line2">
        CS @ <span class="mit-text">MIT</span> | Class of 2028
      </h5>
      <button type="button" onClick={handleScroll}>
        Learn more{" "}
      </button>
    </header>
  );
}

export default Welcome;
