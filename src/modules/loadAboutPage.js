import { content, activeButton } from "./tools";
import mhajeb from "../assets/mahjeb.png";
import tajin from "../assets/tajin.png";
import "../styles/about.css";

const loadAboutPage = () => {
  content.innerHTML = "";
  content.className = "about";
  activeButton("About");

  const aboutContent = document.createElement("div");
  aboutContent.className = "about-content";

  const imagesContainer = document.createElement("div");
  imagesContainer.className = "images-container";

  const img1 = document.createElement("img");
  img1.src = mhajeb;
  img1.className = "mhajeb";
  const img2 = document.createElement("img");
  img2.src = tajin;
  img2.className = "tajin";
  const h1 = document.createElement("h1");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");
  h1.textContent = "About Us";

  // the content must be longer than this
  p1.textContent = `Welcome to The Algerian Restaurant, your destination for authentic traditional Algerian dishes! Located in the heart of Algiers, we take pride in offering a true taste of Algeria with a menu inspired by the country’s rich culinary heritage.`;
  p2.textContent = `At The Algerian Restaurant, we prepare our dishes with love and respect for tradition. From hearty couscous and flavorful tagines to our freshly baked bread and sweet pastries like baklava, every bite transports you to Algeria’s vibrant culture and flavors.`;
  p3.textContent = `We aim to provide not only a memorable dining experience but also a warm and welcoming atmosphere. Whether you're new to Algerian cuisine or a long-time fan, our restaurant is the perfect place to enjoy a delicious meal with friends and family.`;
  p4.textContent = `Come and experience the warmth of Algerian hospitality, where every meal tells a story of tradition and community.`;

  imagesContainer.appendChild(img1);
  imagesContainer.appendChild(img2);

  aboutContent.appendChild(h1);
  aboutContent.appendChild(p1);
  aboutContent.appendChild(p2);
  aboutContent.appendChild(p3);
  aboutContent.appendChild(p4);

  content.appendChild(aboutContent);
  content.appendChild(imagesContainer);
};

export { loadAboutPage };
