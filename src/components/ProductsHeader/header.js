import React from 'react';
import ButtonHeader from '../Button/buttonHeader';
import { BsFillPersonFill, BsPlusLg } from 'react-icons/bs'; 
import { Link } from 'react-router-dom';
import LogoWhite from './whiteLogo';
import './header.css';

const Header = ({ onAddProductClick }) => {
  return (
    <header id="header">
      <div className="logo-container">
        <LogoWhite />
      </div>
      <div className="button-container">
      <button className="products-button" onClick={onAddProductClick}>
  <BsPlusLg size={24} className="button-icon" />
  Add Product
</button>

        <Link to="/preview" className="link-button"> 
        <ButtonHeader text="Preview" icon={<BsFillPersonFill />} size={24} className="button-icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
