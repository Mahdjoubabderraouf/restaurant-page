import "../styles/menu.css";
import couscous from "../assets/couscous.png";
import chakchouka from "../assets/chakchouka.png";
import merguez from "../assets/merguez.png";
import salade from "../assets/salade.png";
import bourek from "../assets/bourek.png";

import { activeButton, content } from "./tools";

const menuItems = [
  // algerien plats
  {
    name: "Couscous",
    price: "500DA",
    img: couscous,
  },
  {
    name: "Chakchouka",
    price: "600DA",
    img: chakchouka,
  },
  {
    name: "Merguez",
    price: "350DA",
    img: merguez,
  },
  {
    name: "Salade Algerian",
    price: "200DA",
    img: salade,
  },
  {
    name: "Bourek",
    price: "100DA",
    img: bourek,
  },
];

const createMenuItem = (item) => {
  const div = document.createElement("div");
  div.className = "menu-item";
  const img = document.createElement("img");
  img.src = item.img;
  img.alt = item.name;
  const container = document.createElement("div");
  const h2 = document.createElement("h3");

  h2.textContent = item.name;
  const span = document.createElement("span");
  span.textContent = item.price;
  div.appendChild(img);
  container.appendChild(h2);

  container.appendChild(span);
  div.appendChild(container);
  return div;
};

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
  menuItems.forEach((item) => {
    const menuItem = createMenuItem(item);
    divContainer.appendChild(menuItem);
  });
  h1Container.appendChild(line1);
  h1Container.appendChild(h1);
  h1Container.appendChild(line2);
  content.appendChild(h1Container);
  content.appendChild(divContainer);
};

export { loadMenuPage };
