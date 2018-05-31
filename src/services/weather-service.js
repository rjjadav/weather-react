import axios from 'axios'

var WeatherService = {
    getWeather: function(city){
        // return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f3bf3102d2e91b2efe9bcfea77aa03f7`)
        return axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=f3bf3102d2e91b2efe9bcfea77aa03f7`)
        .then(response => {
            return response;
        })
    }
}

export default WeatherService;


