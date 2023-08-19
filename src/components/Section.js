import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Section.css';

function Section() {
  return (
    <div className='section-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>SECTION</h1>
      <p>Text Here?</p>
      <div className='section-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>

      <div class="social-links">
        <a class="link" href="https://www.linkedin.com/in/rachel-wong-15b3bb14a" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-linkedin"></i>
        </a>
        <a class="link" href="https://github.com/rachelwong44" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github"></i>
        </a>
        <a class="link" href="mailto:rachelwong4444@gmail.com" target="_blank" rel="noopener noreferrer">
            <i class="fa-regular fa-envelope"></i>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Section;