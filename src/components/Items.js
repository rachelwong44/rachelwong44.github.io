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
              label='Website'
              path='/'
            />
            <Work
              src='images/img-3.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <Work
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <Work
              src='images/img-3.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <Work
              src='images/img-3.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Items;