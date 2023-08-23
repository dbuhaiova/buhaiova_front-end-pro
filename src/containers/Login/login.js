
<<<<<<< HEAD
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    if (username === 'Admin' && password === 'Admin123') {
      const token = 'admin_token';
      localStorage.setItem('token', token);
      setErrorMessage('');
    } else {
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
          <Button onClick={handleLogin}>Login</Button>
        </div>
      </header>
    </div>
  );
};

export default Login;
=======
>>>>>>> parent of 8f4cafd4... Fix ProductPreview
