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
    </div>
  );
};

export default Input;
