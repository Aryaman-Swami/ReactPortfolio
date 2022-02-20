import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Skills from "./components/skills/Skills";



function App() {



  


  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">


      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
 <div className="sections"> 



       <Intro></Intro>

 
   

       <Portfolio></Portfolio>

      

       <Skills></Skills>
   
       <Works></Works>

   
     <Testimonials></Testimonials>
   
       <Contact></Contact>

   

       



       
        
       

 </div>    

    </div>
  );
}

export default App;
