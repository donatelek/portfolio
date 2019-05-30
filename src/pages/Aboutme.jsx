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
const Aboutme = () => {
    return ( 
        <section className="Aboutme" >
          <h1>About me:</h1>
           <div>Hi my name is Jakub Sznajder. Im junior developer looking for job. mmmmm kkkkad adsasdads asdads asdas das as das dasdasdads asd as as dasadsdsas asd asd as as ask mkmkm kmkmkmkmkmk kmmkmk mkmk mk mkmkmkmkmk mkkmk </div>
         <h2>My Abilities</h2>
          <ul>
            <li><img src={html} alt=""/></li>
            <li><img src={css} alt=""/></li>
            <li><img src={js} alt=""/></li>
            <li><img src={react} alt=""/></li>
            <li><img src={nodejs} alt=""/></li>
            <li><img src={postgres} alt=""/></li>
            <li><img src={illustrator} alt=""/></li>
            <li><img src={sass} alt=""/></li>
            <li><img src={vsc} alt=""/></li>
          </ul>
        </section>
     );
}
 
export default Aboutme;