import React from 'react';
import html from '../img/html.png'
import css from '../img/css.png'
import js from '../img/js.png'
import react from '../img/react.png'
import postgres from '../img/postgresql.png'
import nodejs from '../img/nodejs.png'
import illustrator from '../img/illustrator.png'
import vsc from '../img/vsc.png'
import express from '../img/express.png'
import redux from '../img/redux.png'
import github from '../img/github.svg'
import { Fade } from 'react-reveal'

const Aboutme = () => {
  return (
    <section className="Aboutme" >
      <h1 id='aboutme'>About me</h1>
      <div>Hi my name is Jakub Sznajder. I am Front-End Developer looking for internship / job in Krakow. I'm positive about new challenges. I learn quickly and contantly develop myself. My hobbies are cryptocurrency trading, music and programming of course.</div>
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
              <div>CSS/SASS</div>
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
              <img src={express} alt="" />
              <div>Express</div>
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
              <img src={github} alt="" />
              <div>Git/GitFlow</div>
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