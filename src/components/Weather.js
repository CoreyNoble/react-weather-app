import React from "react";

const Weather = props => (
    <div class="weather">
        { props.city && props.country && <h3 class="weather__value">Location: <strong>{ props.city }, { props.country }</strong></h3> }
        { props.temperature && <h3 class="weather__value">Current Temperature: <strong>{ props.temperature }&#176;</strong></h3> }
        { props.minimumTemperature && <h3 class="weather__info">Minimum Temperature: <strong>{ props.minimumTemperature }&#176;</strong></h3> }
        { props.maximumTemperature && <h3 class="weather__info">Maximum Temperature: <strong>{ props.maximumTemperature }&#176;</strong></h3> }
        { props.humidity && <h3 class="weather__value">Humidity: <strong>{ props.humidity }<sup>%</sup></strong></h3> }
        { props.windSpeed && <h3 class="weather__info">Wind Speed: <strong>{ props.windSpeed } <small>meter/sec.</small></strong></h3> }
        { props.cloudCoverage && <h3 class="weather__info">Cloud Coverage: <strong>{ props.cloudCoverage }<sup>%</sup></strong></h3> }
        { props.description && <h3 class="weather__info">Conditions: <strong>{ props.description }</strong></h3> }

        { props.error && <h3 class="weather__error"><strong>{ props.error }</strong></h3>}
    </div>
);

export default Weather;