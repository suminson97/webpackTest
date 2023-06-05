import { plus } from "./plus";
import "./style.css";
import dochi from "../src/dochi.jpg";

// console.log(plus(2, 4));

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `<img src="${dochi}">`;
});
