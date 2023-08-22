import React from 'react';
import { Link } from 'react-router-dom';

function Work(props) {
  return (
    <>
      <li className='pieces__item'>
        <Link className='pieces__item__link' to={props.path}>
          <figure className='pieces__item__pic-wrap' data-category={props.label}>
            <img
              className='pieces__item__img' alt='Work' src={props.src}/>
          </figure>
          <div className='piees__item__info'>
            <h5 className='pieces__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Work;