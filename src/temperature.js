import React, { useState } from "react";
function Temperature(props) {
    let temperature = props.temperature.main.temp; 
    let iconcode = props.temperature.weather[0].icon;
    let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    
    return (
        <div className="container-degrees">
            <img id="wicon" src={iconurl} alt="Weather icon" width="120px" />
            <p className="degrees wind-speet">{temperature} °C</p>
        </div>
    )
};

export default Temperature;