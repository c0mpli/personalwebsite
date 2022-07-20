import { toBeRequired } from '@testing-library/jest-dom/dist/matchers'
import React, { useState } from 'react'
import "./Intro.css"

function Intro(){
    return(
        <div className='body'>
            <div className="main-wrapper">
                <h1 className = 'title'>I create <span className='playful'>playful</span><br></br>experiences. </h1>
                <img src={require('../personIcon.png')} className='personicon'></img>
                
            </div>
            <p className='subtitle'>Jash Doshi / Software Developer</p>
        </div>
    )
}

export default Intro