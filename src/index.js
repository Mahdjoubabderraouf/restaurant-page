import "./styles/index.css";
import { loadHomePage } from "./modules/loadHomePage";
import { loadMenuPage } from "./modules/loadMenuPage";
import { loadAboutPage } from "./modules/loadAboutPage";
import { loadContactPage } from "./modules/loadContactPage";

loadContactPage();

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");
const contactButton = document.getElementById("contact");

homeButton.addEventListener("click", () => {
  loadHomePage();
});
menuButton.addEventListener("click", () => {
  loadMenuPage();
});

aboutButton.addEventListener("click", () => {
  loadAboutPage();
});

contactButton.addEventListener("click", () => {
  loadContactPage();
});
