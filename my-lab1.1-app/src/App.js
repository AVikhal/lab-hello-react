import logo from "./logo.svg";
import "./App.css";

import logoImg from "./images/ironhack-logo-xs.png";
import menutopImg from "./images/menu-top-xs.png";

import Container1 from "./Components/container1";


import Container2 from "./Components/container2";

function App() {
  return (
    <div className="App">
      <Container1
        logo={logoImg}
        menutop={menutopImg}
        title={"Say hello to ReactJS"}
        text={
          "You will learn how to use the most poipular frontend library, nad become a super Ninja developer."
        }
        caja={"Awesome!"}
      />

      <Container2 />

    </div>
  );
}
export default App;
