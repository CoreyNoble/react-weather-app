import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faBullseye } from '@fortawesome/free-solid-svg-icons'
import { faThermometerQuarter } from '@fortawesome/free-solid-svg-icons'
import { faThermometerThreeQuarters } from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faTint } from '@fortawesome/free-solid-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { faCarSide } from '@fortawesome/free-solid-svg-icons'


library.add(faMapMarkerAlt, faBullseye, faThermometerQuarter, faThermometerThreeQuarters, faWind, faTint, faCloud, faCarSide)

const API_KEY = "64b5c52024ca083e556dab9c0cd5e153";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.city.value;
    const country = e.target.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        temperature: data.main.temp,
        minimumTemperature: data.main.temp_min,
        maximumTemperature: data.main.temp_max,
        windSpeed: data.wind.speed,
        cloudCoverage: data.clouds.all,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        minimumTemperature: undefined,
        maximumTemperature: undefined,
        windSpeed: undefined,
        cloudCoverage: undefined,
        error: "Please enter the values."
      });
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div id="weather-app">
              <div className="title-container">
                <Titles />
              </div>
              <div className="data-container">
                <Form getWeather={this.getWeather} />
                <Weather 
                  temperature={this.state.temperature} 
                  humidity={this.state.humidity}
                  city={this.state.city}
                  country={this.state.country}
                  description={this.state.description}
                  minimumTemperature={this.state.minimumTemperature}
                  maximumTemperature={this.state.maximumTemperature}
                  windSpeed={this.state.windSpeed}
                  cloudCoverage={this.state.cloudCoverage}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;