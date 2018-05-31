import React, { Component } from 'react';
import WeatherService from '../services/weather-service';

class WeatherReport extends React.Component {


    constructor(props){
        super(props);
        this.state = { weatherDetails: undefined, fullList: undefined, searchStr: undefined };
        this.searchTemperature = this.searchTemperature.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    componentDidMount() {
        // console.log(this.props.match.params.city);
        WeatherService.getWeather(this.props.match.params.city)
        .then((response) => {
            this.setState({weatherDetails: response.data, fullList: Object.assign({},response.data)});
            console.log(this.state.fullList);
        })
    }

    inputChange(e) {
        this.setState({searchStr: e.target.value});
    }

    searchTemperature(searchStr, e) {
        console.log(searchStr);
        if(searchStr){
            let objCopy = Object.assign({},this.state.fullList)
            let filteredRecords = objCopy.list.filter((obj) => {
                return obj.main.temp >= searchStr;
            });
            let weatherDetails = this.state.weatherDetails;
            weatherDetails.list = filteredRecords;
            this.setState({weatherDetails: weatherDetails});
        }else{
            this.setState({weatherDetails: this.state.fullList});
        }
    }


    render() {
        return (
            <div className="row pl-3 pr-3">

                <h3 className="col-12">Weather Report</h3>
                {this.state.weatherDetails !== undefined ? (
                    <div className="full-width">
                        <div className="row pl-4">
                            <div className="col">
                                <h4>Location : <strong>{this.state.weatherDetails.city.name}</strong></h4>
                            </div>
                            <div>
                                <div className="form-inline mb-3">
                                    <input type="text" className="form-control" placeholder="Search Temperature" value={this.state.searchStr} onChange={this.inputChange}/>
                                    <button className="btn btn-warning ml-2" onClick={(e) => this.searchTemperature(this.state.searchStr, e)}>Search</button>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <td>Date</td>
                                    <td>Temperature</td>
                                    <td>Min. Temp</td>
                                    <td>Max. Temp</td>
                                    <td>Humidity</td>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.weatherDetails.list.map((details, i) => (
                                    <tr key={i}>
                                        <td>{new Date(details.dt).toLocaleString()}</td>
                                        <td>{details.main.temp}</td>
                                        <td>{details.main.temp_min}</td>
                                        <td>{details.main.temp_max}</td>
                                        <td>{details.main.humidity}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                        </div>
                        {/*<div className="row align-items-lg-start">
                            <div className="col-4">
                                <span>Temperature: <strong>{this.state.weatherDetails.main.temp}</strong></span>
                            </div>

                            <div className="col-4">
                                <span>Min: <strong>{this.state.weatherDetails.main.temp_min}</strong></span>
                            </div>

                            <div className="col-4">
                                <span>Max: <strong>{this.state.weatherDetails.main.temp_max}</strong></span>
                            </div>

                            <div className="col-4">
                                <span>Humidity: <strong>{this.state.weatherDetails.main.humidity} %</strong></span>
                            </div>

                            <div className="col-4">
                                <span>Pressure: <strong>{this.state.weatherDetails.main.pressure}</strong></span>
                            </div>
                        </div>*/}
                    </div>


                ):(
                    <h2>Fetching Details</h2>
                )}
            </div>
        )
    };

}

export default WeatherReport;