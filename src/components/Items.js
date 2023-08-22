import React from 'react';
import './Items.css';
import Work from './Work';

function Items() {
  return (
    <div className='cards'>
      <h1>Check out what I've created so far!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Work
              src='images/img-3.jpg'
              text='JavaScript, React, CSS/HTML'
              label='My Website'
              path='/'
            />
            <Work
              src='images/img-3.jpg'
              text='TBC'
              label='Luxury'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <Work
              src='images/img-3.jpg'
              text='TBC'
              label='Mystery'
              path='/'
            />
            <Work
              src='images/img-3.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/'
            />
            <Work
              src='images/img-3.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Items;