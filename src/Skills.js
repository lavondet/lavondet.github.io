import './App.css';
import React from 'react';

function Skills() {
    return(
        <header id="skills" class="skills">
          <h2 class="section-title">
            Skills
          </h2>
          <div class="types">
            <div class="languages">
              <p class="subheader">Languages</p>
              <div class="skill">
                <img src="python.svg" alt="Python Logo" class="skill-logo"></img>
                <p>Python</p>
              </div>
              <hr></hr>
              <div class="skill">
                <img src="js.svg" alt="JavaScript Logo" class="skill-logo"></img>
                <p>JavaScript</p>
              </div>
              <hr></hr>
              <div class="skill">
                <img src="html.svg" alt="HTML Logo" class="skill-logo"></img>
                <p>HTML</p>
              </div>
              <hr></hr>
              <div class="skill">
                <img src="css.svg" alt="CSS Logo" class="skill-logo"></img>
                <p>CSS</p>
              </div>
              <hr></hr>
            </div>
            <div class="libraries">
              <p class="subheader">Frameworks & Libraries</p>
              <div class="skill">
                <img src="react.svg" alt="react logo" class="skill-logo"></img>
                <p>React</p>
              </div>
              <hr></hr>
              <div class="skill">
                <img src="node.svg" alt="node.js logo" class="skill-logo"></img>
                <p>Node.js</p>
              </div>
              <hr></hr>
              <div class="skill">
                <img src="numpy.svg" alt="NumPy logo" class="skill-logo"></img>
              <p>NumPy</p>
              </div>
              <hr></hr>
              <div class="skill">
                <img src="pandas.svg" alt="Pandas logo" class="skill-logo"></img>
                <p>Pandas</p>
              </div>
              <hr></hr>
            </div>
            {/* <div class="tools">
            <p class="subheader">Tools</p>
            <p>Git</p>
            <p>VS Code</p>
            <p>Placeholder</p>
            <p>Placeholder</p>
            </div> */}
          </div>
        </header>
    );
}

export default Skills;
