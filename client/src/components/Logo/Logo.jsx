import React from 'react';
import "./Logo.css";
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className='logo'>
        <h1>
            <span>
                <Link to='/'>Betimba!</Link>
            </span>
        </h1>
    </div>
  )
}

export default Logo