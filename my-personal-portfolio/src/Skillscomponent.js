import React from 'react'
import './Skillscomponent.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function Mypersonalskills(){
return(
    <div>
    <h6 style={{color:'white',width:'fit-content',backgroundColor:'rgb(38, 38, 38)',padding:'5px'}}>My personal skills</h6>
    <div className='progress-bars-personal'>
    <div className="progress">
    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{width:'90%',fontWeight:'bold',color:'black'}}>
      Communication 90%
    </div>
  </div>
  <div className="progress">
    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{width:'95%',fontWeight:'bold',color:'black'}}>
    motivation 95%
    </div>
  </div>
  <div className="progress">
    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{width:'90%',fontWeight:'bold',color:'black'}}>
      Self drive 90%
    </div>
  </div>
    </div>
   
    </div>
)
}
function Myprofessionalskills(){
    return(
      <div>
      <h6 style={{color:'white',width:'fit-content',backgroundColor:'rgb(38, 38, 38)',padding:'5px'}}>My proffessional skills</h6>
      <div className='progress-bars-professional container-fluid'>
      <div className="progress">
      <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{width:'90%',fontWeight:'bold',color:'black'}}>
        Html/css 90%
      </div>
    </div>
    <div className="progress">
      <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{width:'80%',fontWeight:'bold',color:'black'}}>
    Javascript 80%
      </div>
    </div>
    <div className="progress">
      <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{width:'85%',fontWeight:'bold',color:'black'}}>
        React js 85%
      </div>
    </div>
      </div>
     
      </div>
    )
}

export default function Skillscomponent() {
  return (
    <div className='overall-skills-container container container-fluid'>
        <h3 style={{textAlign:'center',color:'white'}}>My <span style={{color:'yellow'}}>skills</span></h3>
        <div className='skills-div'>
        <div class="my-personal-skills">
    <Mypersonalskills/>
</div>
<div class="my-proffessional-skills">
  <Myprofessionalskills/>
</div>
        </div>
    
        </div>
  )
}
