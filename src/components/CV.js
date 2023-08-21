import React from 'react';
import '../App.css';
import './CV.css'; 
import { Document } from 'react-pdf';
import resume from './Rachel_Wong_CV.pdf';

import { pdfjs } from 'react-pdf'; pdfjs.GlobalWorkerOptions.workerSrc = './public/pdf.worker.js';



function Resume() {
  return (
    <div className='section-container'> <video src='/videos/video-1.mp4' autoPlay loop muted />
        <div className='about-container'>
        <Document file={resume}></Document>
    </div>
    </div>
);
}

export default Resume;