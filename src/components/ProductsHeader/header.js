import React from 'react';
import ButtonHeader from '../Button/buttonHeader';
import { BsPlusLg } from 'react-icons/bs'; 
import { BsFillPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import LogoWhite from './whiteLogo';
import './header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <LogoWhite />
      </div>
      <div className="button-container">
      <ButtonHeader text="Add Product" icon={<BsFillPersonFill />} size={24} className="button-icon" />
        <Link to="/preview" className="link-button">
          <ButtonHeader text="Preview" icon={<BsPlusLg />} size={24} className="button-icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
