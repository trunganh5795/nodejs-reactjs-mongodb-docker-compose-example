import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import configs from './config/config';

function App() {
  const [greatting, setGreatting] = useState('');
  useEffect(() => {
    fetch(configs.baseURL)
      .then((r) => r.text())
      .then((data) => setGreatting(data))
      .catch((e) => {
        // alert(e);
        console.log(e);
      });

    return () => {};
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{greatting}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
