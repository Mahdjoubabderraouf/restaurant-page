import "../styles/menu.css";
import { activeButton, content } from "./tools";

const loadMenuPage = () => {
  content.innerHTML = "";
  content.className = "menu";
  activeButton("Menu");
  const h1 = document.createElement("h1");
  const line1 = document.createElement("div");
  const line2 = document.createElement("div");
  const h1Container = document.createElement("div");
  h1Container.className = "h1-container";
  line1.className = "line";
  line2.className = "line";
  h1.textContent = "Our Menu";
  const divContainer = document.createElement("div");
  divContainer.className = "menu-container";
  h1Container.appendChild(line1);
  h1Container.appendChild(h1);
  h1Container.appendChild(line2);
  content.appendChild(h1Container);
  content.appendChild(divContainer);
};

export { loadMenuPage };
