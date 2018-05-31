import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'



import logo from './logo.svg';
import './App.css';
import Home from './home/home';
import WeatherReport from './weather-report/weather-report';

class App extends Component {
  render() {
    return (
      <div className="App">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="#">Weather App</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

          </nav>
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Weather App</h1>
        </header>*/}

        {/*<Home/>
        <WeatherReport/>*/}
{/*        <Router>
            <Route path="/" component={Home}/>
            <Route path="/weather" component={WeatherReport}/>
        </Router>*/}

        <div className="mt-4 content container">
            <switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/weather/:city" component={WeatherReport}/>
            </switch>
        </div>
      </div>
    );
  }
}

export default App;
