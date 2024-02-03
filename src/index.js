import React from "react";
import ReactDOM from "react-dom";

const name = "danish";

ReactDOM.render(
  <>
    hello {name}
    <p>Your Lucy Number is {Math.floor(Math.random(0, 1) * 10)}</p>
  </>,
  document.getElementById("root")
);
