import React from 'react';

const Button = ({ onClick, children }) => {
  return <button className="login-button" onClick={onClick}>{children}</button>;
};

export default Button;