

function Container1 (props) {

    const container1Styles = {
        backgroundColor:  "rgb(27, 29, 43)",
        color: "white",
        margin: "20px",
        padding: "20px",
    }
    const navStyles = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "20px",
        marginRight: "20px",
        padding: "20px"
    }

    const divTitleStyles = {
        display: "flex",
        flexDirection: "column",
        width: "50%",
        padding: "40px",
    }
    const titleTextStyles = {
        margin: "0px",
        fontSize: "4rem"
    }
    const textStyle={
        marginTop: "0px",
        width: "70%"
    }

    const cajaStyle = {
        marginLeft: "40px",
        padding: "15px",
        backgroundColor: "white",
        borderRadius: "5px",
        color: "black",
        fontSize: "1rem",
    }

    return(
        <div style={container1Styles}>
         <nav style={navStyles}>
            <img src={props.logo}/>
            <img src={props.menutop} width="20px" height="10px"/>
         </nav>

         <div style={divTitleStyles}>
            <h1 style={titleTextStyles}>{props.title}</h1>
            <p style={textStyle}>{props.text}</p>
         </div>

         
        <button style={cajaStyle}>{props.caja}</button>
         
        </div>
        
    )
}

export default Container1;