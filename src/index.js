import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/Input/input.css';
import './components/Button/button.css';
import Logo from './logo.js';
import LogoWhite from './components/ProductsHeader/whiteLogo';
import Input from './components/Input/input.js';
import Button from './components/Button/button.js';
import ButtonHeader from './components/Button/buttonHeader.js';
import "./ProductsPage/products.css"
import Header from './components/ProductsHeader/header.js';
import ProductsTable from './containers/ProductsBody/productsTable.js';
import ProductPreview from './containers/ProductPreview/ProductPreview.js';
import Login from './containers/Login/login.js';
import AppRouter from './router';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductsTable/>
    <AppRouter/>
    {/* <ProductsTable/> */}
    {/* <Login/> */}
    {/* <ProductPreview/> */}
    {/* <Header/> */}
  </React.StrictMode>,
);