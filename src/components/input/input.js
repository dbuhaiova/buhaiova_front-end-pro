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

  return (
    <div>
      {type === 'password' ? (
        <div className="password-input-container">
          <input
            type={showPassword ? 'text' : 'password'}
            className={`input-${type}`}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
          <div className="eye-icon-container">
            {showPassword ? (
              <FaEyeSlash className="eye-icon" onClick={togglePasswordVisibility} />
            ) : (
              <FaEye className="eye-icon" onClick={togglePasswordVisibility} />
            )}
          </div>
        </div>
      ) : (
        <input
          type={type}
          className={`input-${type}`}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default InputField;
