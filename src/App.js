import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

function App() {

  const [fruits, setFruits] = useState([]);

  const getApiData = async () => {
    const response = await fetch(
      "https://www.fruityvice.com/api/fruit/all/"
    ).then((response) => response.json());

    setFruits(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  console.log(fruits);

  /*var req = new XMLHttpRequest();
  req.open("GET", "example/data.txt", false);
  req.send(null);
  console.log(req.responseText);*/

  /*let xhr = new XMLHttpRequest();
  xhr.open("GET", "www.fruityvice.com/api/fruit/all", false);
  xhr.send(null);
  console.log(xhr.response);*/


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
