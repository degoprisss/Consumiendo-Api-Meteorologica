import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWind, faComment, faCloud, faThermometerThreeQuarters} from '@fortawesome/free-solid-svg-icons'

function RestInformation(props) {
    let data = props.restInformation; 
    return (
        <div className="icons col-lg-7 col-md-12 col-sm-12">
            <p className="description wind-speet"><FontAwesomeIcon className='fas' icon={faComment}/> "{data.weather[0].description}"</p>
            <p className="wind-speet"><FontAwesomeIcon className='fas' icon={faWind}/> Wind Speet: {data.wind.speed} m/s</p>
            <p className="wind-speet"><FontAwesomeIcon className='fas' icon={faCloud}/> Clouds: {data.clouds.all} %</p>
            <p className="wind-speet"><FontAwesomeIcon className='fas fa-2x' icon={faThermometerThreeQuarters}/> Pressure: {data.main.pressure} mb</p>
        </div>
    )
}

export default RestInformation;