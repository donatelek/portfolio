import React  from 'react';
import '../styles/Main.css'
const Main = () => {
   const handleScrollContact=()=>{
    window.scrollTo({
        top: 3300,
        left: 0,
        behavior: 'smooth'
      });
    }
    return ( 
        <main className='main'>
            <h1>Hello, I'm Jakob</h1>
            <h2>Front-end Developer from Poland</h2>
            <h3 onClick={handleScrollContact} >Hire me <i class="fas fa-long-arrow-alt-right"></i></h3>
        </main>
     );
}
 
export default Main;