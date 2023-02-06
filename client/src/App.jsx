import logo from './logo.svg';
import './App.css';
import RestAPI from './RestAPI'
import React from 'react';

function App() {
  const [data, setData] = React.useState(null);
  RestAPI.checkEnv().then(response => {
    setData(response.data["message"])
  })
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. from the server{" " + data}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;