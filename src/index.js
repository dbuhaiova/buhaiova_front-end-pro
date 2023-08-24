import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/Button/button.css';
import Logo from './logo.js';
import LogoWhite from './components/ProductsHeader/whiteLogo';
import Button from './components/Button/button.js';
import ButtonHeader from './components/Button/buttonHeader.js';
import "./ProductsPage/products.css"
import Header from './components/ProductsHeader/header.js';
import ProductsTable from './containers/ProductsBody/productsTable.js';
import ProductPreview from './components/ProductPreview/ProductPreview';
import Login from './containers/Login/login.js';
import AppRouter from './router';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>,
);