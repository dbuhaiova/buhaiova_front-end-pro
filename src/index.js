import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import './components/input/input.css';
import './components/input/button.css';
import Logo from './logo.js';
import LogoWhite from './components/products header/whiteLogo';
import Input from './components/input/input';
import Button from './components/input/button';
import "./Products page/products.css"
import Header from './components/products header/header';

import Body from './components/products body/body';


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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Body/>
  </React.StrictMode>,
);