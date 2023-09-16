import React from 'react'
import './projectcomponent.css'
import portfiliodesplay from './Images/davisportfolio.png'

function Firstproject(){
  return(
    <div className='first-project-container'>
    <div className='first-project-img'>
     <img alt='screenshot of homepage' className='first-project-actual-image'  src={portfiliodesplay}/>
    </div>
    <div className='first-project-text'>
      <a href='#'>My personall portfolio</a>
   <p> This was my first project.It is a personal portfolio website developed in the year <span style={{color:'orange'}}>2022</span>.It contains information about me.</p>
    <div className='expertise-used-container'>
      <div className='expertise-content'>HTML</div>
      <div className='expertise-content'>CSS</div>
      <div className='expertise-content'> Javascript</div>
      <div className='expertise-content'>Reactjs</div>
    </div>
  </div>
    </div>
    
  )
}

export default function Projectcomponent() {
  return (
    <div className='overall-project-component'>
      <h2 style={{textAlign: 'center',color:'white'}}>My <span style={{color:'orange'}}>work</span></h2>
     <div className='first-project'>
      <Firstproject/>
     </div>
      </div>
  )
}

