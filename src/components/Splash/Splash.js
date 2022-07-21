import React, {useEffect, useRef} from 'react'
import "./Splash.css"
import { TweenMax,Bounce } from 'gsap';


function Splash(){
    
    let ball = useRef(null)

    useEffect(()=>{
        TweenMax.to(ball,1.2,{y:370,ease:Bounce.easeOut,delay:0.5})
    }, [])
    return(
        <>  
            <div className='splash-background'>
                <div ref={el => ball=el} className='ball'></div>
            </div>
            
        </>
    )
    
}

export default Splash;