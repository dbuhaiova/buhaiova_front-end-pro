import React from 'react';
import { BsCart4 } from 'react-icons/bs';
import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, image, name, price, quantity }) => {
  return (
      <div className="product-card">
        <img src={image} alt={name} id="product-image" />
        <p className="product-text">{name}</p>
        <div className="price-quantity">
          <p className="price">
            {price}
            <span className="currency">₴</span>
          </p>
          <p className="quantity">Кількість: {quantity}</p>
        </div>
        <div className="row">
          <BsCart4 className="cart-icon" size={30} />
        <Link to={`/product/${id}`} className="link-button">
          <p className="status">Готовий до відправки</p>
        </Link>
        </div>
      </div>
    
  );
};

export default ProductCard;
