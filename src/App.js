import React from "react";
import Hoc from "./Hoc";

const App = (props) => {
  return (
    <center>
      <h1>Welcome User!! {props.name}</h1>
    </center>
  );
};

export default Hoc(App);
