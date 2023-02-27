import Iconos from "./Iconos"
import icon1Img from "../images/icon1.png";
import icon2Img from "../images/icon2.png";
import icon3Img from "../images/icon3.png";
import icon4Img from "../images/icon4.png";

function Container2() {
    const sectionStyles ={
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: "100px",
        

    }

    return(
      <div style={sectionStyles}>
        <Iconos
        icon1={icon1Img}
        subTitle={"Declarative"}
        contenido={"React makes it painless to create interactive UIs."}
      />
      <Iconos
        icon1={icon2Img}
        subTitle={"Components"}
        contenido={"Build encapsulated components that manage their state."}
      />
      <Iconos
        icon1={icon3Img}
        subTitle={"single-Way"}
        contenido={"A set of immutable values are passed to the component's"}
      />
      <Iconos
        icon1={icon4Img}
        subTitle={"JSX"}
        contenido={"Statically-typed, designed to run on modern browsers"}
      />
      </div>  
        
    )
}

export default Container2;