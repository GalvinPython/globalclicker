import logo from './logo.svg';
import './App.css';
import Odometer from 'react-odometerjs'
import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState()
  useEffect(() => {
    let rows;
    const interval = setInterval(() => {
      console.log("Test")
      fetch('https://api-gc.galvindev.me.uk/clicks', {method: 'GET'})
      .then(function(response) {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
      })
      .then(function(data) {
        rows = data[0].row_count
      })
      .catch(function(error) {
          console.log(error);
      });

      setValue(rows)
    }, 1000)

    return () => clearInterval(interval)
  }, [])
  function sendReq() {
    fetch('https://api-gc.galvindev.me.uk/clicked')
    .then(function(response) {
      if(response.ok) return response.json
      throw new Error('Request failed.')
    })
    .catch(function(error) {
      console.error(error)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Global Clicker By: <code>GalvinPython</code></p>
        <div className='Odometer'>
          <Odometer value={value} format='(,ddd),dd' style={{ fontWeight: "bold", whiteSpace: "nowrap", overflow: "hidden" }} title='Clicks / Count'/>
        </div>
        <button onClick={sendReq}>+1 Click</button>
        <small title='This is a beta version to test everything works. Compiled on 1st July 2023'>Version 0.2-20230701 (BETA)</small>
      </header>
    </div>
  );
}

export default App;
