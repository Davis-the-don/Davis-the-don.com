
import './App.css';
import Landingcomponent from './Landingcomponent';
import Aboutcomponent from './Aboutcomponent';
import Educationcomponent from './Educationcomponent';
import Skillscomponent from './Skillscomponent';
import Emailme from './Emailme';
import Getintouch from './Getintouch';
import Projectcomponent from './Projectcomponent';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className='landing-component'>
      <Landingcomponent/>
      </div>
      <div className='about-component'>
        <Aboutcomponent/>
      </div>
      <div className='education-component'>
      <Educationcomponent/>
      </div>
      <div className='skills-component'>
        <Skillscomponent/>
      </div>
      <div className='project-component'>
        <Projectcomponent/>
      </div>
      <div className='Get-in-touch-component'>
      <Getintouch/>
      </div>
      <div className='Emailme component'>
        <Emailme/>
      </div>
      <div className='footer-component'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
