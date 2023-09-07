import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Section.css';
import { Link } from 'react-router-dom';

function Section() {
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
        <div className='section-container'>
            <video src='/videos/video1.mp4' autoPlay loop muted />
            <h1>RACHEL WONG</h1>
            <p>Looking to make a career change into software development.</p>
            <p>Currently a Data Analyst at Mosaic Smart Data, London.</p>
            <div className='section-btns'>
                {renderButton('GITHUB', 'fa-brands fa-github')}
                {renderButton('LINKEDIN', 'fa-brands fa-linkedin')}
                {renderButton('ABOUT ME', 'fa-solid fa-user', '/about-me', () => console.log('hey'))}
            </div>
        </div>
    );
}

export default Section;
