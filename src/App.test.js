import React from "react";
import App from "./App";
import ReactDOM from "react-dom";

it("renders without crashing", () => {
  const div = document.createElemnet("div");
  ReactDOM.render(<App />, div);
  //clean up code
  ReactDOM.unmountComponentAtNode(div);
});
