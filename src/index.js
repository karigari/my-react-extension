import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const anchor = document.createElement("div");
anchor.id = "extension-root";
document.body.insertBefore(anchor, document.body.childNodes[0]);

ReactDOM.render(<App />, document.getElementById("extension-root"));
registerServiceWorker();
