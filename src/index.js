import "./styles/index.css";
import { loadHomePage } from "./modules/loadHomePage";
import { loadMenuPage } from "./modules/loadMenuPage";

loadHomePage();

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");

homeButton.addEventListener("click", () => {
  loadHomePage();
});
menuButton.addEventListener("click", () => {
  loadMenuPage();
});
