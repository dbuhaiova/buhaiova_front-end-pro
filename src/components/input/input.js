import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./input.css";

const Input = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
<<<<<<< HEAD
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
=======
      <input type="email" className="input-email" placeholder="User name" />
      <div className="password-input-container">
        <input
          type={showPassword ? "text" : "password"}
          className="input-password"
          placeholder="Password"
        />
        {showPassword ? (
          <FaEye className="eye-icon" onClick={togglePasswordVisibility} />
        ) : (
          <FaEyeSlash className="eye-icon" onClick={togglePasswordVisibility} />
        )}
      </div>
>>>>>>> parent of 8f4cafd4... Fix ProductPreview
    </div>
  );
};

export default Input;
