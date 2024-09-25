import "../styles/home.css";
import { activeButton, content } from "./tools";

const loadHomePage = () => {
  content.innerHTML = "";
  content.className = "";
  activeButton("Home");

  const divContainer = document.createElement("div");
  const divHeader = document.createElement("div");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");

  divContainer.className = "home";
  divHeader.classList.add("home-header");

  h1.textContent = "Welcome to ";
  h2.textContent = "The Algerian Restaurant";

  divHeader.appendChild(h1);
  divHeader.appendChild(h2);

  divContainer.appendChild(divHeader);
  content.appendChild(divContainer);
};

export { loadHomePage };
