import React from 'react'
import './Educationcomponent.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaGraduationCap } from 'react-icons/fa'
import graduationimg from './Images/vasily-koloda-8CqDvPuo_kI-unsplash.jpg'
function Graduationicon(){
  return(
    <div className='container-fluid'>
    <FaGraduationCap style={{fontSize:'100px',color:'orange'}}/>
    </div>
  )
}
function Educationtxt(){
  return(
    <div>
      <p style={{fontSize:'larger'}} className='container-fluid text-light'>
        I Joined Murang'a University Of Technology in the year 2020 for a Course in Bachelor's Degree in Mathematics and Computer Science.<br/>
        I am currently in my final academic year in the University. 
      </p>
    </div>

  )
}


export default function Educationcomponent() {
  return (
<div style={{backgroundImage: `url(${graduationimg})`,backgroundSize:'cover'}} className='overall-education-container'>

        <div className='opacity-regulator'></div>
        <div className='all-content-holder'>
         <h3 className='text-light'style={{textAlign:'center'}}>My Education</h3>
        <div className='icon-text-holder'>
      <div className='graduation-icon-holder'>
     <Graduationicon/>
      </div>
      <div className='education-description'> 
      <Educationtxt/>
      </div> 
      </div>
        </div>
      
    </div>
  )
}
