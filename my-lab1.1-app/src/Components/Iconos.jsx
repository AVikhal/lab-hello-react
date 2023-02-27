function Iconos (props) {

    const iconosStyles = {
        display:"flex",
        flexDirection: "column",
        alignContent: "flex-start",
        padding: "40px",
        width: "150px"
        
    }


  return(
    
        <div style={iconosStyles}>
            <img src={props.icon1} />
            <h3>{props.subTitle}</h3>
            <p>{props.contenido}</p>
        </div>
        
    )
}

export default Iconos;