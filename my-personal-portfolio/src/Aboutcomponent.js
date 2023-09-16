import React from 'react'
import './Aboutcomponent.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import userimage from './WhatsApp Image 2023-07-06 at 04.40.28.jpeg'
import mycv from './DAVIS IKOU CV.docx'
import bigimg from './Images/oliver-pecker-HONJP8DyiSM-unsplash.jpg'

function Aboutimages(){
  return(
    <div>
      <img alt='identifies the user' className='actual-image rounded-circle'src={userimage}/>
    </div>
  )
}
function Downloadcv(){
return(
  <div>
    <a href={mycv} download>
    <button className='actual-btn btn'>Download cv</button>
    </a>
  </div>
)
}
export default function Aboutcomponent() {
  return (
    <>
    <div className='overall-about-small-screen-component'>
      <h2 style={{color:'white',textAlign:'center'}}><span style={{color:'yellow'}}>About</span> me</h2>
      <div className='image-holder'>
     <Aboutimages/>
      </div>
      <p style={{color:'rgb(186, 146, 93)',textAlign:'center'}}>Dedicated Frontend web developer</p>
      <p className='container-fluid' style={{color:'white'}}>Heloo! I'm Davis,a Frontend Developer Residing at <span style={{color:'rgb(186, 146, 93)'}}>Nairobi in Kenya</span>.I am a self taught developer utilizing online 
      tools and youtube to expand my knowledge in web development field.I am currently a student at Murang'a University of Technology
      persuing <span style={{color:'rgb(186, 146, 93)'}}>bachelors Degree in Mathematics and Computer Science.</span>I am always open to working on all sorts of projects and collabarating with other developers.So feel free to message me. </p>
      <div className='Cv-btn-container'>
        <Downloadcv/>
      </div>
    </div>
    <div className='overall-about-big-screen-component'>
      <img alt='dark laptop background' src={bigimg}/>
      <div className='about-opacity-controller'>

      </div>
    <div className='big-screen-about-content text-light'>
      <h4 style={{textAlign:'center'}}>A<span style={{borderBottom:'2px solid orange'}}>bou</span>t</h4>
      <p style={{textAlign:'center'}}>Dedicated Frontend web developer</p>
      <p style={{fontSize:'18px'}} className='container-fluid'>My name is Davis Ikou.I'm a Frontend Developer Residing at Nairobi in Kenya.I am currently a student at Murang'a University of Technology
      persuing bachelors Degree in Mathematics and Computer Science.I am always open to working on all sorts of projects and collabarating with other developers.So feel free to message me. </p>
      <div style={{width:'maxContent',marginLeft:'15vw'}} className='cd-download-btn'>
        <a download href={mycv}>
      <button style={{backgroundColor:'orange'}} className='btn'>Download cv</button>
      </a>
    </div>
    </div>

    </div>
    </>
  )
}
