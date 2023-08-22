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
              label='Weather App'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <Work
              src='images/img-3.jpg'
              text='TBC'
              label='TBC'
              path='/'
            />
            <Work
              src='images/img-3.jpg'
              text='Text text text text text text text text'
              label='TBC'
              path='/'
            />
            <Work
              src='images/img-3.jpg'
              text='Text text text text text text text text'
              label='TBC'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Items;