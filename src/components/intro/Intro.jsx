import React from 'react';
import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef, useState } from 'react';

import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

import Lottie from 'react-lottie';

import Astronaut from "../../lottie/67013-astronaut.json"

import ParticleComponent from '../particles/Nasa';
export default function Intro() {
  const [currentSlide, setCurrentSlide] = useState(0);


  // const intro =document.getElementById("intro");
  // const intro2 =document.getElementById("intro2");

  const pagechange = (page) => {
    //  page === "1" ? currentSlide === 2 ? setCurrentSlide(1) : setCurrentSlide(2) 
    //   :  currentSlide === 1 ? setCurrentSlide(2) : setCurrentSlide(1) ;


    //  page ==="1" ? intro.style.transform = 'translateX(-100vw)' : intro.style.transform = 'translateX(100vw)';
    page === "1" ? setCurrentSlide(currentSlide > 0 ? 0 : 1)
      : setCurrentSlide(currentSlide < 1 ? 1 : 0);

  };

  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
      strings: ['Web Developer', 'Coder']
    })

  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Astronaut,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

 


    
   document.addEventListener("mousemove" , parallax);
    
  

function parallax(e) {
  document.querySelectorAll('#layer').forEach(Layer => {
  
    const speed = Layer.getAttribute("data-speed");

    const x =(window.innerWidth - e.pageX*speed)/100;
     const y =(window.innerHeight - e.pageY*speed)/100;

     Layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}



  return <div className='intro' id="intro"  >

    <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>

      <div className="intro1" id="intro1">
        <img src="assets/hexa.png" id="layer" data-speed="2" className='hexa' alt=""></img>
        <img src="assets/plus.png" id="layer" data-speed="5" className='plus' alt=""></img>
        <img src="assets/gtri.png" id="layer" data-speed="-5" className='gtri' alt=""></img>
        <img src="assets/zigzag.png" id="layer" data-speed="6" className='zigzag' alt=""></img>
        <img src="assets/triangle.png" id="layer" data-speed="4" className='triangle' alt=""></img>

        {/* <img src="assets/random.png" id="layer" data-speed="2" className='random' alt=""></img> */}

        <img src="assets/tsquare.png" id="layer" data-speed="-3" className='tsquare' alt=""></img>
        <img src="assets/circle.png" id="layer" data-speed="4" className='circle' alt=""></img>
        <img src="assets/penta.png" id="layer" data-speed="-2" className='penta' alt=""></img>
        <img src="assets/redcircle.png" id="layer" data-speed="-5" className='redcircle' alt=""></img>
        <img src="assets/square.png" id="layer" data-speed="6" className='square' alt=""></img>
        <div className="left">
          <div className="imgContainer">
            <img src='assets/row-1-column-1.png' className='neon1' alt=""></img>
            <img src="assets/profile.png" alt="" srcset="" />
            <img src='assets/row-1-column-2.png' className='neon2' alt=""></img>

          </div>
          <div className="left-text">
            <div className="container">
              <TwitterIcon className='icons'></TwitterIcon>
              <GitHubIcon className='icons'></GitHubIcon>
              <InstagramIcon className='icons'></InstagramIcon>
              <hr></hr>


              <h3>Me</h3><h3>Follow</h3>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi There I'm</h2>
            <div class="glitch" data-text="Aryaman Swami">Aryaman Swami</div>
            {/* <div class="glow">Aryaman Swami</div> */}

            <h3><span ref={textRef}></span></h3>

          </div>


          <a href="#portfolio"> <img src="assets/down.png" alt=""></img></a>
        </div>
                    <div className='pages'><div className='page1'><h2>01</h2><h3>Home</h3></div> <div className='page2' onClick={() => pagechange("2")}><h2 >02</h2><h3>About Me</h3></div></div>

      </div>


      <div className="intro2" id="intro2">
      <ParticleComponent type='nasa'/>

          <h1 className='right-header'> &#60; About me &#47;&#62;</h1>
          <div className="leftr">

            <div className="left-textr">
              <div className="containerr">
                <TwitterIcon className='iconsr'></TwitterIcon>
                <GitHubIcon className='iconsr'></GitHubIcon>
                <InstagramIcon className='iconsr'></InstagramIcon>
                <hr></hr>


                <h3>Me</h3><h3>Follow</h3>
              </div>
            </div>
            <div className="wrapperr">

              <p>I'm a Web developer . I love to create simple yet beautiful websites with great user experience.
                <br></br><br></br>
                I'm interested in the whole stack Like trying new things and building great projects.
              </p>


            </div>

          </div>
          <div className="right">
            <Lottie className='lottie' options={defaultOptions}
             ></Lottie>          {/* <a href="#portfolio"> <img src="assets/down.png" alt=""></img></a> */}
          </div>
                    <div className='pagesr'><div className='page1' onClick={() => pagechange("1")}><h2>01</h2><h3>Home</h3></div> <div className='page2' ><h2 >02</h2><h3>About Me</h3></div></div>
           
      </div>
 
    </div>

  </div>;
}
