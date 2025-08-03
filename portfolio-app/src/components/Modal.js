import React from 'react';
import './ModalStyles.css';

const Modal = ({ isOpen, type, message, onClose }) => {
  if (!isOpen) return null;

  const getIcon = () => {
    if (type === 'success') {
      return (
        <div className="modal-icon success-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
      );
    } else {
      return (
        <div className="modal-icon error-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </div>
      );
    }
  };

  const getTitle = () => {
    return type === 'success' ? 'Success!' : 'Error';
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {getIcon()}
        <h2 className="modal-title">{getTitle()}</h2>
        <p className="modal-message">{message}</p>
        <button className="modal-button" onClick={onClose}>
          {type === 'success' ? 'Continue' : 'Try Again'}
        </button>
      </div>
    </div>
  );
};

export default Modal; 