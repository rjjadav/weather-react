import React, { Component } from 'react';
import axios from 'axios'
import WeatherService from '../services/weather-service';

class Home extends React.Component {
    cities = [
        'London', 'New York', 'New Delhi'
    ];

    constructor(props) {
        super(props);
        this.state = {value: '', cities: this.cities, selectedCity:undefined};

        this.handleChange = this.handleChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.getCity = this.getCity.bind(this);
    }

    handleChange(e) {
        // console.log(e.target.value);
        this.setState({value: e.target.value});
    }

    handleCityChange(e) {
        // console.log(e.target.value);
        this.setState({selectedCity: e.target.value})
    }

    getCity(selectedCity, e) {
        if(!selectedCity){
            alert("Please select City from list");
        }else{
            console.log(selectedCity);
            this.props.history.push(`/weather/${selectedCity}`)
            // axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=f3bf3102d2e91b2efe9bcfea77aa03f7`)
            /*WeatherService.getWeather(selectedCity)
                .then(response => {
                    console.log(response);
                })*/
        }

    }

    render() {
        return (
          <div className="pl-4 pr-4">
              <div className="row justify-content-md-center">
                  <h1 className="text-center">Welcome To Weather App</h1>
              </div>
              <div className="row justify-content-md-center">
                  <form className="form-inline col-6">
                      <select className="form-control col-9" value={this.state.selectedCity} onChange={this.handleCityChange}>
                          <option value="">--Select City--</option>
                          {
                              this.state.cities.map((city, i) => (
                                  <option value={city} key={i}>{city}</option>
                              ))
                          }
                      </select>

                      <button className="btn btn-outline-primary col ml-2" onClick={(e) => this.getCity(this.state.selectedCity, e)}>Submit</button>
                  </form>

              </div>

              {/*<input type="text" value={this.state.value} onChange={this.handleChange}/>*/}

          </div>

        );
    }
}

export default Home;