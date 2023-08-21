import React from 'react';
import '../App.css';
import './CV.css';


function Resume() {
  return (
    <div className='section-container'> <video src='/videos/video-1.mp4' autoPlay loop muted />
        <div className='about-container'>
            <h1>Education</h1>
             <p>University of Oxford - Masters of Chemistry (MCHEM) 4 years</p>
             <h1>Work</h1>
             <p>Mosaic Smart Data - Data Analyst (1 year), London</p>
            <p>Deloitte LLP - Tax Analyst (1 year), London</p>
         </div>
    </div>
);
}

export default Resume;