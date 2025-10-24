import { Header } from "./components/layout/Header/Header.js";
import { Main } from "./components/Main/MainSection.js";
import "./style.css";

document.querySelector("#app").append(Header(), Main());

console.log("Hi");
