import React, { useState, useEffect , useRef } from 'react';
import Portfoliolist from '../portfoliolist/Portfoliolist';
import "./portfolio.scss"
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,

} from "../../data";
import Rellax from "rellax";

import * as basicScroll from 'basicscroll'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
export default function Portfolio() {

  const [selected, setSelected] = useState('featured')
  const [data, setData] = useState([]);

const rellaxRef = useRef();

useEffect(() => {
    new Rellax(".animate", { // <---- Via class name
      speed: -5,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });

    new Rellax(rellaxRef.current, { // <---- Via useRef element
      speed: 8,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
  }, []);


useEffect(() => {
  


const instance = basicScroll.create({
   elem: document.querySelector('.box'),
   from: 'bottom-bottom',
   to: 'top-top',
   direct: true,
   props: {
      '--r': {
         from: '0',
         to: '1turn'
      },
      '--tx': {
         from: '-100px',
         to: '100px'
      }
   }
})

instance.start()
 


},[])

const {ref , inView} = useInView({
  threshold: 0.1,
});
const animation = useAnimation();

useEffect(() => {
  if(inView){
    animation.start({
      opacity:1,
     
      transition :{
        type:'spring' , duration:1 , bounce : 0.1,
      }
    });
  }
  if(!inView){
    animation.start({opacity:0 })
  }

}, [inView]);


  // create an instance of Scrambler using useRef.

  const list = [
    {
      id: "React",
      title: "React",
    },
    {
      id: "Javascript",
      title: "Javascript",
    },
    {
      id: "UI",
      title: "UI/UX Designs",
    },

  ]
  useEffect(() => {
    switch (selected) {
      case "React":
        setData(featuredPortfolio);
        break;
      case "Javascript":
        setData(webPortfolio);
        break;
      case "UI":
        setData(mobilePortfolio);
        break;



      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

 

  return <div className='portfolio' >
       <img src='assets/redcircle.png'ref={ref} data-rate='2' alt='' className='box' ></img>
<img src='assets/plus.png' data-rate='2' alt='' ref={rellaxRef} className='coder' ></img>
<img src='assets/gtri.png' data-rate='2' alt=''  className='coder2 animate' ></img>

  <div className="hero">
    <div className="left">
       <h1>&#60; Portfolio &#47;&#62;</h1>
  
     
    </div>

    <div className="right" >

      
       
    
      <ul className='list-head'>
        {list.map((item) => (
          <Portfoliolist title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
        ))}

      </ul>
      <div className="container">
        {data.map((d) => (

        <motion.div className="item" animate={animation} >
      
              
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          
</motion.div>

          
        ))}
      </div>
 
    </div>
 
    </div>
    
  </div>;


}
