import React from 'react'
import './Emailme.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaPaperPlane } from 'react-icons/fa' 
export default function Emailme() {
  return (
    <div className='overall-email-me-section'>
        <p style={{textAlign:'center'}} className='text-light'> Would u like to hava a quick chat??</p>
        <div className='mail-msg'>
            <a href='mailto:davismugoikou@gmail.com'>
            <button style={{width:'max-content',margin:'auto'}} className='btn btn-light'><FaPaperPlane/> Send Mail</button>
            </a>
        </div>
        </div>
  )
}
