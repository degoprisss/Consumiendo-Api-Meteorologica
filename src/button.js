const ButtonLocation = (props) => {
    return (
        <div class="container-button">
            <button className="change" onClick={props.location}>Buscar mi ubicación</button>
        </div>
    )
}

export default ButtonLocation;