import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Section.css';
import { Link } from 'react-router-dom';

function About() {
    // Create a helper function to render buttons, which helps avoid code repetition
    const renderButton = (text, iconClass, link = null, onClick = null) => {
        const buttonContent = (
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                onClick={onClick}
            >
                {text} <i className={iconClass}></i>
            </Button>
        );

        if (link) {
            return <Link to={link}>{buttonContent}</Link>
        }

        return buttonContent;
    };

    return (
      <div id="about">
        <div className='section-container'>
            <video src='/videos/video1.mp4' autoPlay loop muted />
            <h1>EXPERIENCE</h1>
            <p>September 2022 - Present: Data Analyst at Mosaic Smart Data, London</p>
            <p>September 2021 - 2022: Tax Analyst at Deloitte, London</p>
            <p>September 2017 - 2021: Masters of Chemistry (MChem) at University of Oxford</p>

            <div className='section-btns'>
                {renderButton('GITHUB', 'fa-brands fa-github')}
                {renderButton('LINKEDIN', 'fa-brands fa-linkedin')}
                {renderButton('ABOUT ME', 'fa-solid fa-user', '/about-me', () => console.log('hey'))}
            </div>
        </div>
        </div>
    );
}

export default About;
