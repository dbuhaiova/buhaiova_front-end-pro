import React, { useState } from 'react';
import '../../components/Input/input.css';
import '../../components/Button/button.css';
import { Link } from 'react-router-dom';
import Logo from '../../logo';
import Button from '../../components/Button/button';
import InputField from '../../components/Input/input.js';
import '../../index.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      console.log('Please fill in all fields.');
      setErrorMessage('Please fill in all fields.');
      return;
    }

    if (username === 'Admin' && password === 'Admin123') {
      console.log('Login successful! Saving token...');
      const token = 'admin_token';
      localStorage.setItem('token', token);
      setErrorMessage('');
    } else {
      console.log('Invalid username or password.');
      setErrorMessage('Invalid username or password.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="centered-container">
          <Logo />
          <InputField
            type="text"
            placeholder="Username"
            value={username}
            onChange={(newValue) => setUsername(newValue)}
            errorMessage={errorMessage}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(newValue) => setPassword(newValue)}
            errorMessage={errorMessage}
          />
          <Link to="/table">
            <Button onClick={handleLogin}>Login</Button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Login;
