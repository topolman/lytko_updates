import React from 'react';
import logo from '../../logo.svg';

const Home = (props) => {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
        </p>
                <p>{window.moment().format("DD.MM.YYYY")}</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
            </div>
        </div>
    );
}

export default Home;