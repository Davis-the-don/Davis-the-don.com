import React from 'react'
import "./Landingcomponent.css"
import backgroundvideo from './video (1080p).mp4'
import 'bootstrap/dist/css/bootstrap.min.css'
import landingimg from './WhatsApp final.gif'

import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.js'
// start of components declaration section
function Topintrosection(){
return(
   <div>
    <div className='home-tab'><a href={App}>Home</a></div>
   </div> 
)
}
function Videosection(){
  return(
<video className='bgvideo' autoPlay loop muted>
		<source src={backgroundvideo} type='video/mp4'/>
	  </video>
  )
}
function OpenningMsg(){
  
  return(
    <div>
      <h5 className='text-dark'><b>Lets Design and Create your website today.</b></h5>
      <p><b>Putting imagination into reality by using designs from the future.</b></p>
      <a href='mailto:davismugoikou@gmail.com'>
      <button style={{margin:'auto',border:'1px solid yellow'}}className='btn btn-outline-info hireme-btn text-light '>Hire me now</button>
      </a>
   </div>
  )
}
//end of concern declaration
        
export default function Landingcomponent() {

  return (
    <>
    <div className='Overall-landing-small-screen-component'>
    <div className='dark-top-section'>
    <Topintrosection/>
      </div>
      {/* <div className='menu-icon'>
      <Menuicon/>
    </div> */}
      <div className='videoholder'>
        <Videosection/>
        <div className='openning-message'>
      <OpenningMsg/>
    </div>
      </div> 
    </div>
    <div className='Overall-landing-big-screen-component'>
      <div className='left-content'>
        <p className='text-light'style={{fontSize:'40px',marginTop:'30vh'}}>I'm a <span style={{color:'orange'}}>web <br/> designer</span> based <br/>in Nairobi Kenya</p>
        <a href='mailto:davismugoikou@gmail.com'>
        <button className='btn btn-sm' style={{backgroundColor:'orange',marginLeft:'7vw'}}>Hire me</button>
        </a>
      </div>
      <div className='right-content'>
      <img alt='backgroud of river flowing' className='landing-img' src={landingimg}/>
      </div>
    </div>
    </>
  )
}
