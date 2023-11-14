import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import axios from "axios";

function App() {

  const url = "http://192.168.1.15:8089/api/";
  const fn= async ()=>{
    try {
      const response = await axios.get(url + "instructor/all");
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(()=>{
    fn()
  },[])

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
