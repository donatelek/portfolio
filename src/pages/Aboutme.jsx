import React from 'react';
import '../styles/Aboutme.css'
import html from '../img/html.png'
import css from '../img/css.png'
import js from '../img/js.png'
import react from '../img/react.png'
import postgres from '../img/postgresql.png'
import nodejs from '../img/nodejs.png'
import illustrator from '../img/illustrator.png'
import sass from '../img/sass.png'
import vsc from '../img/vsc.png'
import redux from '../img/redux.png'
import { Roll, Fade } from 'react-reveal'

const Aboutme = () => {
  return (
    <section className="Aboutme" >

      {/* <h1 id='aboutme'>𝓕𝓮𝔀 𝓦𝓸𝓻𝓭𝓼 𝓐𝓫𝓸𝓾𝓽 𝓜𝓮</h1> */}
      <h1 id='aboutme'>About me</h1>
      <div>Hi my name is Jakub Sznajder. I am Front-End Developer looking for internship / job in Krakow. I'm positive about new challenges. I learn quickly and contantly develop myself. My hobbies are cryptocurrency trading, music and programming of course.</div>

      {/* <h2>𝑀𝓎 𝒜𝒷𝒾𝓁𝒾𝓉𝒾𝑒𝓈</h2> */}
      <h2>My Skills</h2>
      <Fade right>
        <ul className='skillsTitleWrapper'>
          <li>Front-End</li>
          <li>Back-End</li>
          <li>Tools</li>
        </ul>
        <ul className='skillsWrapper'>
          <ul className="frontWrapper">
            <h1 className="mobileSkillsTitle">Front-End</h1>

            <li>
              <img src={html} alt="" />
              <div>HTML</div>
            </li>
            <li>
              <img src={css} alt="" />
              <div>CSS</div>
            </li>
            <li>
              <img src={js} alt="" />
              <div>Javascript</div>
            </li>
            <li>
              <img src={react} alt="" />
              <div>React</div>
            </li>
            <li>
              <img src={redux} alt="" />
              <div>Redux</div>
            </li>
          </ul>
          <ul className="backWrapper">
            <h1 className="mobileSkillsTitle">Back-End</h1>

            <li>
              <img src={nodejs} alt="" />
              <div>Node</div>
            </li>
            <li>
              <img src={postgres} alt="" />
              <div>PostgreSQL</div>
            </li>
          </ul>
          <ul className="toolsWrapper">
            <h1 className="mobileSkillsTitle">Tools</h1>

            <li>
              <img src={illustrator} alt="" />
              <div>Illustrator</div>
            </li>
            <li>
              <img src={sass} alt="" />
              <div>SASS</div>
            </li>
            <li>
              <img src={vsc} alt="" />
              <div>VSC</div>
            </li>
          </ul>
        </ul>
      </Fade>
    </section>
  );
}

export default Aboutme;