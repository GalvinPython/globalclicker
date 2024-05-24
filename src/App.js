import logo from './logo.svg';
import './App.scss';
import Odometer from 'react-odometerjs'
import { useEffect, useState } from 'react';

function App() {
    const [value, setValue] = useState()
    useEffect(() => {
        let rows;
        let loaded = false;
        console.log("Script running!")
        function getData() {
            fetch('https://api-gc.galvindev.me.uk/clicks', { method: 'GET' })
                .then(function (response) {
                    if (response.ok) return response.json();
                    throw new Error('Request failed.');
                })
                .then(function (data) {
                    rows = data.clicks
                    if (loaded === false) setValue(rows)
                    loaded = true;
                })
                .catch(function (error) {
                    console.log(error);
                });

            setValue(rows)
        }
        getData();
        const interval = setInterval(getData, 2000)
        return () => clearInterval(interval)
    }, [])

    function sendReq() {
        fetch('https://api-gc.galvindev.me.uk/clicked')
            .then(function (response) {
                if (response.ok) return response.json
                throw new Error('Request failed.')
            })
            .catch(function (error) {
                console.error(error)
            })
    }

    // Needed for outlinks
    const Anchor = props => {
        return (
            <a href='https://github.com/galvinpython/globalclicker'>{props.children}</a>
        )
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Global Clicker By: <code>GalvinPython</code></p>
                <div className='Odometer'>
                    <Odometer value={value} format='(,ddd),dd' style={{ fontWeight: "bold", whiteSpace: "nowrap", overflow: "hidden" }} title='Clicks / Count' />
                </div>
                <button onClick={sendReq}>+1 Click</button>
                <small><Anchor>View Source</Anchor></small>
            </header>
        </div>
    );
}

export default App;