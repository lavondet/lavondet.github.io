import './App.css';
import React from 'react';

function Journey() {
    return(
        <header id="journey" class="journey">
          <h2 class="section-title">
            Journey
          </h2>

          <div class="timeline">

            <div class="timeline-item">
              <div class="timeline-node"></div>
              <div class="timeline-content">
                <img src="asij.svg" alt="ASIJ Logo" class="asij-image"></img>
                <h3>The American School in Japan</h3>
                <p>Student | <span class="time">2020 - 2024</span></p>
                <ul>
                  <li>GPA: 3.97/4.0</li>
                  <li>National Merit Commended</li>
                  <li>Math Circle Leader</li>
                  <li>Hands on Tokyo Volunteer Leader</li>
                  <li>Varsity Swimming Captain & MVP</li>
                </ul>
              </div>
            </div>


            <div class="timeline-item">
              <div class="timeline-node"></div>
              <div class="timeline-content">
                <img img src="swiss.svg" alt="Embassy Logo" class="swiss-image"></img>
                <h3>Embassy of Switzerland in Japan</h3>
                <p>Intern | <span class="time">summer of 2021 & 2023</span></p>
                <ul>
                  <li>Designed and developed a website and digital promotional materials for EPFL's eSpace event in Tokyo.</li>
                  <p></p>
                  <li>Edited an interview video for a blog post on nextrends Asia,a platform showcasing upcoming education, research, innovation, and policy trends in the East.</li>
                  <p></p>
                  <hr></hr>
                  <p></p>
                  <li>Researched social media audience and developed a strategy, resulting in a 25% increase in followers for the Science and Technology Office.</li>
                </ul>
              </div>
            </div>


            <div class="timeline-item">
              <div class="timeline-node"></div>
              <div class="timeline-content">
                <img src="mit.svg" alt="MIT Logo" class="mit-image"></img>
                <h3>Massachusetts Institute of Technology</h3>
                <p>Undergraduate Student | <span class="time">2024 - 2028</span></p>
                <ul>
                  <li>Majoring in course 6-3</li>
                  <li>Computer Science and Engineering</li>
                  <li>Varsity Swimming & Diving</li>
                </ul>
              </div>
            </div>
          </div>

        </header>
    );
}

export default Journey;
