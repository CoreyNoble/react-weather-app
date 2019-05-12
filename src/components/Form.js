import React from "react";

const Form = props => (
    <form onSubmit={props.getWeather}>
        <div class="row">
            <div class="col-xs-12 col-sm-8">
                <input type="text" name="city" placeholder="City..."/>
                <input type="text" name="country" placeholder="Country..."/>
            </div>
            <div class="col-xs-12 col-sm-4">
                <button>Get Weather</button>
            </div>
        </div>
    </form>
);

export default Form;