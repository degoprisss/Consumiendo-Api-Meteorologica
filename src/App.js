import "./App.css";
import './Normalize.css';
import './Grid-portafolio.css';
import Location from './RenderLocation.js'
import Temperature from './temperature.js'
import RestInformation from './RenderInfo'
import React, { useEffect, useState } from "react";


function App() {

  const [data, setData] = useState(undefined)
  const [loca, setLoca] = useState([9.273344, -74.6422272])
  

  navigator.geolocation.watchPosition((props) => {
    setLoca([props.coords.latitude, props.coords.longitude])
  });


  useEffect(() => {
  
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${loca[0]}&lon=${loca[1]}&appid=e83dfacbf543995a2d9e1b6aae5bb027&units=metric`
    fetch(url, { mode: "cors" })
      .then((get) => get.json())
      .then((data) => {
        setData(data)
      })
  }, []);

  return (
    <div className="container">
      <div className='container-card col-lg-5 col-md-12 col-sm-12'>{data === undefined ? 'Cargando' :
        <Location location={data} />}
        <div className='icono-temperature'>{data === undefined ? 'Cargando' :
          <Temperature temperature={data} />
        } {data === undefined ? 'Cargando' : <RestInformation restInformation={data} />}
        </div>
      </div>
    </div>
  );
}

export default App;
