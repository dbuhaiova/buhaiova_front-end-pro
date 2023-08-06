import React from "react";
import { FaEye } from "react-icons/fa";
import "./input.css";

const Input = () => {
  return (
    <div>
      <input type="email" className="input-email" placeholder="User name" />
      <div className="password-input-container">
        <input type="password" className="input-password" placeholder="Password" />
        <FaEye className="eye-icon" />
      </div>
    </div>
  );
};

export default Input;
