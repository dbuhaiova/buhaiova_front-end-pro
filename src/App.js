import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import LeftSidebar from './components/leftside';
import CentralContainer from './components/center';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='header-container'><Header /></div>
        <div className='central-content'>
        <CentralContainer />
        <LeftSidebar />
        </div>
      </header>
    </div>
  );
}

export default App;
