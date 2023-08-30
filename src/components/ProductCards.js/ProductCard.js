import React, { useState } from 'react';
import { BsCart4 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ id, image, name, price, quantity, onDelete }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

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
        <BsCart4 className="cart-icon" size={30}/>
        <Link to={`/product/${id}`} className="link-button">
          <p className="status">Готовий до відправки</p>
        </Link>
      </div>
      {isModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <p>Are u sure you want to delete this product?</p>
            <button className="delete-button" onClick={() => { onDelete(); hideModal(); }}>Delete</button>
            <button className="cancel-button" onClick={hideModal}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
