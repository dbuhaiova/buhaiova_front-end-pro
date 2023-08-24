import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './input.css';

const InputField = ({ type, placeholder, value, onChange, errorMessage }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChange = (e) => {
    if (errorMessage) {
      onChange(e.target.value);
    } else {
      onChange(e.target.value);
    }
  };

  const showError = value === '' && errorMessage; 

  return (
    <div>
      {type === 'password' ? (
        <div className={`password-input-container ${showError ? 'input-error' : ''}`}>
          {showPassword ? (
            <FaEye className="eye-icon" onClick={togglePasswordVisibility} />
          ) : (
            <FaEyeSlash className="eye-icon" onClick={togglePasswordVisibility} />
          )}
          <input
            type={showPassword ? 'text' : 'password'}
            className={`input-${type} ${showError ? 'input-error' : ''}`}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
        </div>
      ) : (
        <input
          type={type}
          className={`input-${type} ${showError ? 'input-error' : ''}`}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      )}
      {showError && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};


export default InputField;
