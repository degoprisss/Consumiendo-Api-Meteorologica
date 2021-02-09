import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStreetView} from '@fortawesome/free-solid-svg-icons'
const Location = (props) => {
    
    return (
        <div className="container-titles">
            <h1 className="title-card">Welcome</h1>
            <h2 className="title-card"><FontAwesomeIcon icon={faStreetView}/>{props.location.name}/{props.location.sys.country}</h2>        
        </div>
    )
}


export default Location;