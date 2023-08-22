import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Section.css';
import { Link } from 'react-router-dom';


function Section() {
  return (
    <div className='section-container'>
      <video src='/videos/video1.mp4' autoPlay loop muted />
      <p>Looking to make a career change into software development.</p>
      <p>Currently a Data Analyst at Mosaic Smart Data, London.</p>
      <h1>RACHEL WONG</h1>
      <div className='section-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GITHUB <i class="fa-brands fa-github"></i>
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          LINKEDIN <i class="fa-brands fa-linkedin"></i>
        </Button>
        <Link to='/about-me'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          ABOUT ME <i className='fa-solid fa-user' />
        </Button>
        </Link>

      </div>
    </div>
  );
}

export default Section;