import React from "react";
import Particles from "react-tsparticles";
 import particlesConfig from "../../config/particle-config";

export default function ParticleComponent(props){
    return <div style={{position:"absolute" }}>
        <Particles
        
            params={particlesConfig}
         />
         </div>
    
}