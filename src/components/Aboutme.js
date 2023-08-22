import React from 'react';
import '../App.css';
import './Aboutme.css';


function Aboutme() {
  return (

<div className='section-container'><video src='/videos/video1.mp4' autoPlay loop muted />
    <div className='about-container'>
      <p>I'm 24 years old and living in London, UK.<br />
      Data Analyst at a startup trading analytics fintech.<br />
      Previously a Tax Analyst at Deloitte.<br />
      Graduated with a Masters of Chemistry (4 years) at the University of Oxford.</p>

</div>
    </div>
  );
}

export default Aboutme;