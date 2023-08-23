import ButtonHeader from '../Button/buttonHeader';
import { BsPlusLg } from 'react-icons/bs'; 
import { BsFillPersonFill } from 'react-icons/bs';
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
        <ButtonHeader text="Preview" icon={<BsPlusLg />} size={24} className="button-icon"/>
      </div>
    </header>
  );
};

export default Header;

