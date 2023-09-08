import React, { useState } from 'react';
import './ModalWindow.css';

const ModalWindow = ({ title, isOpen, onClose, onSave }) => {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const [categoryError, setCategoryError] = useState('');
  const [nameError, setNameError] = useState('');
  const [quantityError, setQuantityError] = useState('');
  const [priceError, setPriceError] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setCategoryError('');
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
    setQuantityError('');
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
    setPriceError('');
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSave = () => {
    setCategoryError('');
    setNameError('');
    setQuantityError('');
    setPriceError('');

    let hasError = false;

    if (!category) {
      setCategoryError('Category is required');
      hasError = true;
    }

    if (!name) {
      setNameError('Name is required');
      hasError = true;
    }

    if (!quantity) {
      setQuantityError('Quantity is required');
      hasError = true;
    }

    if (!price) {
      setPriceError('Price is required');
      hasError = true;
    }
    if (hasError) {
      return;
    }

    const product = {
      Category: category,
      Name: name,
      Quantity: quantity,
      Price: price,
      Description: description,
    };

    fetch('https://64de69e7825d19d9bfb29517.mockapi.io/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Product added:', data);
        onSave();
      })
      .catch((error) => {
        console.error('Error adding product:', error);
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-window">
        <div className="modal-header">
          <h2 className="title-window">{title}</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-window-content">
          <label className="field-label">Category</label>
          <input className={`text-input ${categoryError ? 'input-error' : ''}`} value={category} onChange={handleCategoryChange} />
          {categoryError && <div className="error-message">{categoryError}</div>}

          <label className="field-label">Name</label>
          <input className={`text-input ${nameError ? 'input-error' : ''}`} value={name} onChange={handleNameChange} />
          {nameError && <div className="error-message">{nameError}</div>}

          <label className="field-label">Quantity</label>
          <input className={`text-input ${quantityError ? 'input-error' : ''}`} value={quantity} onChange={handleQuantityChange} />
          {quantityError && <div className="error-message">{quantityError}</div>}

          <label className="field-label">Price</label>
          <input className={`text-input ${priceError ? 'input-error' : ''}`} value={price} onChange={handlePriceChange} />
          {priceError && <div className="error-message">{priceError}</div>}

          <label className="field-label">Description</label>
          <textarea className="text-input description-input" value={description} onChange={handleDescriptionChange} />

          <div className="button-container-window">
            <button className="cancel-button-window" onClick={onClose}>
              Cancel
            </button>
            <button className="submit-button" onClick={handleSave}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
