import React from 'react';
import './Modal.css';

const Modal = ({ title, message, onCancel, onConfirm }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Delete product</h2>
        <p>Are you sure you want to delete this product?</p>
        <div className="button-group">
          <button className="cancel-button" onClick={onCancel}>Cancel</button>
          <button className="confirm-button" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;