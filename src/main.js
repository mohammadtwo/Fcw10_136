import "./style.css";
import { Header } from "./components/layout/Header/Header.js";
import { Main } from "./components/Main/MainSection.js";

document.querySelector("#app").append(Header(), Main());
