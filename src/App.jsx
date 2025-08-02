import React from 'react'
import './App.css'

const App = () => {
  return(
    <>
    <div className='cv'>
      <div className='about-me'>
        <div className='profile'>
          <h1 className='name'>Saljagring B Marak</h1>
        </div>
          <div className='status'><i class="fa-solid fa-briefcase"></i> <span>M.Sc Chemistry</span></div>
          <div className='location'><i class="fa-solid fa-house"></i> <span>Tura, Meghalaya</span></div>
          <div className='email'><i class="fa-solid fa-envelope"></i> <span>saljgringmarak569vlog@gmail.com</span></div>
          <div className='phone'><i class="fa-solid fa-phone"></i> <span>8011918952</span></div>

          <div className='skills'>
            Skills
            <p className='tech-skills'><i class="fa-solid fa-code"></i>Technical Skills</p>
            <ul>
              <li><i class="fa-brands fa-html5"></i>HTML</li>
              <li><i class="fa-brands fa-css3-alt"></i>CSS</li>
              <li><i class="fa-brands fa-js"></i>JavaScript</li>
              <li><i class="fa-brands fa-react"></i>React Js</li>
              <li><i class="fa-brands fa-node-js"></i>Express Js</li>
              <li><i class="fa-brands fa-node-js"></i>Node Js</li>
              <li><i class="fa-solid fa-database"></i>SQL</li>
              <li><i class="fa-brands fa-python"></i>Python</li>
              <li><i class="fa-solid fa-table"></i>Excel</li>
            </ul>
            <p className='soft-skills'><i class="fa-solid fa-lightbulb"></i>Soft Skills</p>
            <ul>
              <li><i class="fa-solid fa-people-arrows"></i>Communication</li>
              <li><i class="fa-solid fa-people-group"></i>Teamwork</li>
              <li><i class="fa-solid fa-question"></i>Problem solving</li>
            </ul>
          </div>
          <div className='languages'></div>
      </div>
      <div className='education'>
        <p className='heading'>Education</p>
        <div className='college'>
          <p className='institution'>Nagaland University</p>
          <p className='duration'><i class="fa-solid fa-calendar-days"></i> <span>2023 - 2026</span></p>
          <p className='description'>Master of Science in Physics (Pursuing)</p>
        </div>
        <div className='school'>
          <p className='institution'>Tura Government College, Tura</p>
          <p className='duration'><i class="fa-solid fa-calendar-days"></i> <span>2022 - 2025</span></p>
          <p className='description'>Completed</p>
        </div>
      </div>
      <div className='projects'>
        <p className='heading'>Current Projects</p>
        <p className='project-name'>Garo2</p>
        <p className='project-details'>Garo2 is a digital English-to-Garo dictionary developed to preserve and promote the Garo language, primarily spoken in Meghalaya and neighboring regions. The platform helps users, especially students and language learners, to easily look up English words and find their Garo translations, along with definitions and usage examples.</p>
        <p className='project-name'>Kaderik</p>
        <p className='project-details'>Kaderik is a traditional products selling website that promotes and supports local artisans and producers. It provides a platform to showcase and sell handmade and culturally significant Garo items, helping to preserve indigenous crafts and boost local economy through digital means.</p>
      </div>
    </div>
    <div className='footer'>
      <p>&copy; Saljagring B Marak's CV.</p>
    </div>
    </>
  );
};

export default App;