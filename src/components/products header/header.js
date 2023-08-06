import ButtonProducts from './buttonProducts';
import ButtonPreview from './buttonPreview';
import LogoWhite from './whiteLogo';
import './header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <LogoWhite />
      </div>
      <div className="button-container">
        <ButtonProducts/>
        <ButtonPreview/>
      </div>
    </header>
  );
};

export default Header;

