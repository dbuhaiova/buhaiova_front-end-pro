import Input from "./components/input/input";
import Button from "./components/input/button";
import "./App.css";
import './components/input/input.css'; // Correct path for Input component CSS
import './components/input/button.css'; // Correct path for Button component CSS
import Logo from "./components/logo";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="centered-container">
        <Logo />
          <Input />
          <Button>Login</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
