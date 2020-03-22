import * as React from "react";
import { render } from "react-dom";

import "./assets/scss/App.scss";
import App from "./components/App";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", (): void => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}

const rootEl: Element = document.getElementById("root");

render(<App />, rootEl);

console.log(
  "%cJoe is a smelly head!",
  "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)"
);
console.log(
  "%cJoe doesn't know what a console.log is nor is likely to ever learn or care, so in some small revenge for being a long-suffering friend I have taken the easy opportunity for a well-earned insult.",
  "color:green"
);
