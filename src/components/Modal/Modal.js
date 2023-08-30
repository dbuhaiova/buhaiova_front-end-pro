import React from 'react';
import './Modal.css';

const Modal = ({ title, message, onCancel, onConfirm }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="button-group">
          <button className="cancel-button" onClick={onCancel}>Cancel</button>
          <button className="confirm-button" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
