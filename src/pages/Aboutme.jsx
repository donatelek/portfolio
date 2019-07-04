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
import {Roll,Fade} from 'react-reveal'

const Aboutme = () => {
    return ( 
        <section className="Aboutme" >
         
          <h1 id='aboutme'>𝓕𝓮𝔀 𝓦𝓸𝓻𝓭𝓼 𝓐𝓫𝓸𝓾𝓽 𝓜𝓮</h1>
           <div>Hi my name is Jakub Sznajder. I am Front-End Developer looking for internship / job in Krakow. I'm positive about new challenges. I learn quickly and contantly develop myself. My hobbies are cryptocurrency trading, music and programming of course.</div>
          
         <h2>𝑀𝓎 𝒜𝒷𝒾𝓁𝒾𝓉𝒾𝑒𝓈</h2>
         <Fade right>
          <ul>
            <li><img src={html} alt=""/></li>
            <li><img src={css} alt=""/></li>
            <li><img src={js} alt=""/></li>
            <li><img src={react} alt=""/></li>
            <li><img src={redux} alt=""/></li>
            <li><img src={nodejs} alt=""/></li>
            <li><img src={postgres} alt=""/></li>
            <li><img src={illustrator} alt=""/></li>
            <li><img src={sass} alt=""/></li>
            <li><img src={vsc} alt=""/></li>
          </ul>
          </Fade>
        </section>
     );
}
 
export default Aboutme;