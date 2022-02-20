import React, { useEffect , useRef } from 'react';
import "./Skills.scss"
import Rellax from "rellax";



export default function Skills() {



const rellaxRefskill = useRef();

useEffect(() => {
    new Rellax(".animate", { // <---- Via class name
      speed: 3,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });

    new Rellax(rellaxRefskill.current, { // <---- Via useRef element
      speed: -3,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
  }, []);


 



  return (
    <div className='skills' id='skills'>
		    <img src="assets/whitecube.png" data-rate='2' alt="" ref={rellaxRefskill}  className='cube'></img>
					    <img src="assets/pinkcube.png" data-rate='2' alt=""   className='cube2 animate'></img>


        <div className="top"></div>
        
        <div className="canvas-wrapper">

			<a href="#skills" className="canvas">
		<div className="canvas_border">
			<svg>
				<defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopColor:'rgb(253,137,68)',stopOpacity:"1"}}></stop><stop offset="100%" style={{stopColor:'rgb(153,75,23)',stopOpacity:"1"}}></stop></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#D34F48"></stop><stop offset="100%" stop-color="#772522"></stop></linearGradient></defs>
				<rect id="rect-grad" className="rect-gradient" fill="none" stroke="url(#grad-orange)" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="100%" height="100%"></rect>
			</svg>
		</div>
		<div className="canvas_img-wrapper">
			<img className="canvas_img" src="assets/javajavascript.png" alt=""/>
		</div>
		<div className="canvas_copy">
			<strong className="canvas_copy_title">Javascript</strong>
			<span className="canvas_copy_details">4/5</span>
		</div>
	</a>
	
	<a href="#skills" className="canvas">
		<div className="canvas_border">
			<svg>
				<defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopColor:'rgb(253,137,68)',stopOpacity:"1"}}></stop><stop offset="100%" style={{stopColor:'rgb(153,75,23)',stopOpacity:"1"}}></stop></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#D34F48"></stop><stop offset="100%" stop-color="#772522"></stop></linearGradient></defs>
				<rect id="rect-grad" className="rect-gradient" fill="none" stroke="url(#grad-orange)" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="100%" height="100%"></rect>
			</svg>
		</div>
		<div className="canvas_img-wrapper">
			<img className="canvas_img" src="https://cubettech.com/wp-content/uploads/2018/09/1280px-React-icon.svg_.png" alt=""/>
		</div>
		<div className="canvas_copy">
			<strong className="canvas_copy_title">React</strong>
			<span className="canvas_copy_details">3/5</span>
		</div>
	</a>

		<a href="#skills" className="canvas">
		<div className="canvas_border">
			<svg>
				<defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopColor:'rgb(253,137,68)',stopOpacity:"1"}}></stop><stop offset="100%" style={{stopColor:'rgb(153,75,23)',stopOpacity:"1"}}></stop></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#D34F48"></stop><stop offset="100%" stop-color="#772522"></stop></linearGradient></defs>
				<rect id="rect-grad" className="rect-gradient" fill="none" stroke="url(#grad-orange)" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="100%" height="100%"></rect>
			</svg>
		</div>
		<div className="canvas_img-wrapper">
			<img className="canvas_img" src="https://ih1.redbubble.net/image.416406974.0438/st,small,845x845-pad,1000x1000,f8f8f8.u4.jpg" alt=""/>
		</div>
		<div className="canvas_copy">
			<strong className="canvas_copy_title">C++</strong>
			<span className="canvas_copy_details">4/5</span>
		</div>
	</a>
</div>
   <div className="left">
      <h1>&#60; Skills &#47;&#62;</h1>
    </div>
 <div className='bottom'></div>
</div>
  )
}
