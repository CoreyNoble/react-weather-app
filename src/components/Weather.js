import React from "react";

const Weather = props => (
    <div class="weather">
        { props.city && props.country && <h3 class="weather__value">Location: <strong>{ props.city }, { props.country }</strong></h3> }
        { props.temperature && <h3 class="weather__value">Temperature: <strong>{ props.temperature }&#176;</strong></h3> }
        { props.humidity && <h3 class="weather__value">Humidity: <strong>{ props.humidity }<sup>%</sup></strong></h3> }
        { props.description && <h3 class="weather__info">Conditions: <strong>{ props.description }</strong></h3> }
        { props.error && <h3 class="weather__error"><strong>{ props.error }</strong></h3>}
    </div>
);

export default Weather;