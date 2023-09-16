import React from 'react'
import './Getintouch.css'
import {FaPhone, FaWhatsapp,FaEnvelope} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'

function Callme(){
  return(
    <div className='overall-call-me'>
      <div className='call-icon-holder rounded-circle'>
        <FaPhone style={{fontSize:'40px',color:'white'}}/>
      </div>
      <div className='call-me-content-holder'>
        <p className='text-light' style={{textAlign:'center'}}><span style={{fontSize:'large'}}>Call me:</span>+254758420860 or <br/>+254791704196</p>
      </div>
    </div>
  )
}
function Whatsapme(){
  return(
    <div className='overall-whatsap-me'>
      <div className='whatsap-icon-holder rounded-circle'>
        <FaWhatsapp style={{fontSize:'40px',color:'white'}}/>
      </div>
      <div className='Whatsap-me-content-holder'>
        <p className='text-light' style={{textAlign:'center'}}><span style={{fontSize:'large'}}>Whatsap me:</span>+254758420860</p>
      </div>
    </div>
  )
}
function Emailme(){
  return(
    <div className='overall-whatsap-me'>
      <div className='Email-icon-holder rounded-circle'>
        <FaEnvelope style={{fontSize:'40px',color:'white'}}/>
      </div>
      <div className='Email-me-content-holder'>
        <p className='text-light' style={{textAlign:'center'}}><span style={{fontSize:'large'}}>Send me email:</span>davismugoikou@gmail.com</p>
      </div>
    </div>
  )
}

export default function Getintouch() {
  return (
    <div className='Overall-GetinTouch'>
        <h3 style={{textAlign:'center',color:'white'}}> Get in Touch</h3>
        <div className='Getintouch-content-holder'>
            <div className='call-me'>
          <Callme/>
            </div>
            <div className='whatsap-me'>
          <Whatsapme/>
            </div>
            <div className='Email-me'>
           <Emailme/>
            </div>
        </div>
        </div>
  )
}
