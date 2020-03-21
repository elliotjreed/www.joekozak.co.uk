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

console.log('%c Please encourage Joe to get rid of the horrible beard!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
console.log("%cHello, I am Joe's long-suffering friend, and I dislike beards because I have a small phobia that there may be a squirrel hiding within. If you are reading this then you have either clicked something you shouldn't have in your browser or are likely someone with limited social skills, and are thus perfectly placed to advise that the beard goes in the bluntest of terms. Please assist me in this endeavour. Blunt razors or rusty spoons can be provided upon request.", "color:green");
