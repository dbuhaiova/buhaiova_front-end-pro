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
      <input
        type={type === 'password' && showPassword ? 'text' : type}
        className={`input-${type}`}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {type === 'password' && (
        <div className="password-input-container">
          {showPassword ? (
            <FaEye className="eye-icon" onClick={togglePasswordVisibility} />
          ) : (
            <FaEyeSlash className="eye-icon" onClick={togglePasswordVisibility} />
          )}
        </div>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default InputField;
