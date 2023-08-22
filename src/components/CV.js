import React from 'react';
import '../App.css';
import './CV.css'; 

import { pdfjs } from 'react-pdf'; pdfjs.GlobalWorkerOptions.workerSrc = './public/pdf.worker.js';



function Resume() {
  return (
    <div className='section-container'> <video src='/videos/video-1.mp4' autoPlay loop muted />
        <div className='about-container'>
        <h1>Please contact me</h1>
    </div>
    </div>
);
}

export default Resume;