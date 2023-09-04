import React from 'react';
import './ModalWindow.css';

const ModalWindow = ({ title, isOpen, onClose, onSave }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-window">
        <div className="modal-header">
          <h2 className='title-window'>{title}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="modal-window-content">
          <label className="field-label">Category</label>
          <input className="text-input" />

          <label className="field-label">Name</label>
          <input className="text-input" />

          <label className="field-label">Quantity</label>
          <input className="text-input" />

          <label className="field-label">Price</label>
          <input className="text-input" />

          <label className="field-label">Description</label>
          <textarea className="text-input description-input" />

          <div className="button-container-window">
            <button className="cancel-button-window " onClick={onClose}>Cancel</button>
            <button className="submit-button" onClick={onSave}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
