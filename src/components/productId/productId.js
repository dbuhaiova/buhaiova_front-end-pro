import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductId.css';
import { Link } from 'react-router-dom';
import LogoWhite from '../ProductsHeader/whiteLogo';

const ProductId = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    fetch(`https://64de69e7825d19d9bfb29517.mockapi.io/products/${id}`)
      .then(response => response.json())
      .then(data => setProductDetails(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  return (
    <div className="product-id-container">
      
        <div className="header-product-id">
          <LogoWhite />
        </div>
        <div className="product-details">
        <div className='product-name'>
        <Link to="/preview">
           <button className="arrow-button">←</button>
          </Link>
        <p className="product-name">{productDetails?.Name}</p>
        </div>
        <div className='product-details-container'>
          <div>
          <img src={productDetails?.Image} alt={productDetails?.Name} className="product-image" />
          </div>
          <div className='product-availability'>
            <p className="availability-text">Є в наявності</p>
        <p className="product-price">{productDetails?.Price} ₴</p>
        <p className="quantity">Кількість: {productDetails?.Quantity}</p></div>
        </div>
        
        <p className="product-name-desc">Опис: {productDetails?.Name}</p>
        <p className="product-description">{productDetails?.Description}</p>
      </div>
    </div>
  );
};

export default ProductId;
