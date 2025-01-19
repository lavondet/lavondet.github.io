import React from 'react';

function About() {
    return(
        <header id="about" class="about">
            <div class="title-container-odd">
            <h2 class="section-title">
                About
            </h2>
            </div>
          <div class="about-container">
            <div class="about-image">
              <img src="/about-img.png" alt="picture"/>
            </div>
            <div class="about-content">
              <p>
                I'm a first-year student at MIT, majoring in Computer Science and Engineering (Course 6-3).
                Born and raised in Japan, I'm passionate about bridging cultures and technologies between my home
                and the U.S. I'm eager to explore opportunities in software engineering, combining my love for
                problem-solving with my global perspective to create impactful solutions.
              </p>
              <p>
                When I'm not coding or studying, I love to swim 🏊‍♂️, listen to music 🎵, and travel 🌎. I am also currently
                on the <a href="https://mitathletics.com/sports/mens-swimming-and-diving/roster/louis-avondet/13243"
                target="_blank" className="roster-link">
                MIT varsity swim and dive</a> team where I specialize in butterfly.
              </p>
            </div>
          </div>
        </header>
    );
}

export default About;
