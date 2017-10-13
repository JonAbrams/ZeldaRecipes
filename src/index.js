import React from "react";
import ReactDOM from "react-dom";
import Space from "spaceace";

import "./index.css";
import App from "./App";
import { getInitialState } from "./initialState";

const rootSpace = new Space(getInitialState());

rootSpace.subscribe(causedBy => {
  console.log("Change caused by", causedBy, "new state", rootSpace.state);
  ReactDOM.render(<App {...rootSpace} />, document.getElementById("root"));
});
