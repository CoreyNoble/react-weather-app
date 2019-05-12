import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Weather = props => (
    <div class="weather container">
        <div class="row">
            <div class="weather__icon col-xs-2 col-lg-1">
                { props.city && props.country && <FontAwesomeIcon icon="map-marker-alt" /> }
            </div>
            <div class="weather__item col-xs-10 col-lg-11">
                { props.city && props.country && <h3 class="weather__info">Location: <strong>{ props.city }, { props.country }</strong></h3> }
            </div>
        </div>
        <div class="row">
            <div class="weather__icon col-xs-2 col-lg-1">
                { props.temperature && <FontAwesomeIcon icon="bullseye" /> }
            </div>
            <div class="weather__item col-xs-10 col-lg-11">
                { props.temperature && <h3 class="weather__info">Current Temperature: <strong>{ props.temperature }&#176;</strong></h3> }
            </div>
        </div>
        <div class="row">
            <div class="weather__icon col-xs-2 col-lg-1">
                { props.minimumTemperature && <FontAwesomeIcon icon="thermometer-quarter" /> }
            </div>
            <div class="weather__item col-xs-10 col-lg-11">
                { props.minimumTemperature && <h3 class="weather__info">Minimum Temperature: <strong>{ props.minimumTemperature }&#176;</strong></h3> }
            </div>
        </div>
        <div class="row">
            <div class="weather__icon col-xs-2 col-lg-1">
                { props.maximumTemperature && <FontAwesomeIcon icon="thermometer-three-quarters" /> }
            </div>
            <div class="weather__item col-xs-10 col-lg-11">
                { props.maximumTemperature && <h3 class="weather__info">Maximum Temperature: <strong>{ props.maximumTemperature }&#176;</strong></h3> }
            </div>
        </div>
        <div class="row">
            <div class="weather__icon col-xs-2 col-lg-1">
                { props.humidity && <FontAwesomeIcon icon="tint" /> }
            </div>
            <div class="weather__item col-xs-10 col-lg-11">
                { props.humidity && <h3 class="weather__info">Humidity: <strong>{ props.humidity }<sup>%</sup></strong></h3> }
            </div>
        </div>
        <div class="row">
            <div class="weather__icon col-xs-2 col-lg-1">
                { props.windSpeed && <FontAwesomeIcon icon="wind" /> }
            </div>
            <div class="weather__item col-xs-10 col-lg-11">
                { props.windSpeed && <h3 class="weather__info">Wind Speed: <strong>{ props.windSpeed } <small>meter/sec.</small></strong></h3> }
            </div>
        </div>
        <div class="row">
            <div class="weather__icon col-xs-2 col-lg-1">
                { props.cloudCoverage && <FontAwesomeIcon icon="cloud" /> }
            </div>
            <div class="weather__item col-xs-10 col-lg-11">
                { props.cloudCoverage && <h3 class="weather__info">Cloud Coverage: <strong>{ props.cloudCoverage }<sup>%</sup></strong></h3> }
            </div>
        </div>
        <div class="row">
            <div class="weather__icon col-xs-2 col-lg-1">
                { props.description && <FontAwesomeIcon icon="car-side" /> }
            </div>
            <div class="weather__item col-xs-10 col-lg-11">
                { props.description && <h3 class="weather__info">Conditions: <strong>{ props.description }</strong></h3> }
            </div>
        </div>
        <div class="row">
            { props.error && <h3 class="weather__error"><strong>{ props.error }</strong></h3>}
        </div>
    </div>
);

export default Weather;