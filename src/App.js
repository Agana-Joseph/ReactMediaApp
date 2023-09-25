import React from "react";
import "./index.css";
import NewCom from "./Componets/NewCom";

class App extends React.Component {
  styles = {
    fontStyle: "bold",
    color: "#a9d9e6"
  };
  render() {
    return ( <div className="App">
      <h1 style={this.styles}>Welcome Onahi</h1>
      <NewCom />
    </div>
    )
  }
}

export default App;