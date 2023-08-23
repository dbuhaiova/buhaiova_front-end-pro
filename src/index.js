import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import './components/Input/input.css';
import './components/Button/button.css';
import Logo from './logo.js';
import LogoWhite from './components/ProductsHeader/whiteLogo';
import Input from './components/Input/input.js';
import Button from './components/Button/button.js';
import ButtonHeader from './components/Button/buttonHeader.js';
import "./ProductsPage/products.css"
import Header from './components/ProductsHeader/header.js';
import Body from './components/ProductsBody/body.js';
import ProductPreview from './components/ProductPreview/ProductPreview';


<<<<<<< HEAD
=======
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="centered-container">
          <Logo />
          <Input />
          <Button>Login</Button>
        </div>
      </header>
    </div>
  );
};

>>>>>>> parent of 8f4cafd4... Fix ProductPreview
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <ProductPreview/>
    {/* <Header/> */}
    {/* <Body/> */}
  </React.StrictMode>,
);