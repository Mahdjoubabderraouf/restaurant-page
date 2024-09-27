import { content, activeButton } from "./tools";
import "../styles/contact.css";
import facebookIcon from "../assets/socialMedia/icons8-facebook.svg";
import instagramIcon from "../assets/socialMedia/icons8-instagram.svg";
import twitterIcon from "../assets/socialMedia/icons8-twitterx.svg";
import youtubeIcon from "../assets/socialMedia/icons8-youtube.svg";

const loadContactPage = () => {
  activeButton("Contact");
  content.innerHTML = "";
  content.className = "contact";
  const contactContainer = document.createElement("div");
  contactContainer.className = "contact-container";

  const firstPart = document.createElement("div");
  firstPart.className = "part";
  const secondPart = document.createElement("div");
  secondPart.className = "part";
  const thirdPart = document.createElement("div");
  thirdPart.className = "part";

  const h1 = document.createElement("h1");
  h1.textContent = "The Algerian Restaurant";

  const p1 = document.createElement("p");
  p1.textContent = "You can follow us on our social media accounts:";

  const locationP = document.createElement("p");
  locationP.textContent = "Address: 1234 Algerian Street, Algiers, Algeria";

  const phoneP = document.createElement("p");
  phoneP.textContent = "Phone: +213 123 456 789";

  const emailP = document.createElement("p");
  emailP.textContent = "Email: example@example.dz";

  const facebook = document.createElement("img");
  facebook.src = facebookIcon;
  facebook.loading = "lazy";
  const instagram = document.createElement("img");
  instagram.src = instagramIcon;
  instagram.loading = "lazy";
  const twitter = document.createElement("img");
  twitter.src = twitterIcon;
  twitter.loading = "lazy";
  const youtube = document.createElement("img");
  youtube.src = youtubeIcon;
  youtube.loading = "lazy";

  const contactUsHeader = document.createElement("h2");
  contactUsHeader.textContent = "Contact Us";

  const locationHeader = document.createElement("h2");
  locationHeader.textContent = "Location";

  const copyrightDiv = document.createElement("div");
  copyrightDiv.className = "copyRight";
  const copyright = document.createElement("p");
  copyright.textContent = "Copyright © 2024 The Algerian Restaurant.";

  firstPart.appendChild(h1);
  secondPart.appendChild(locationHeader);
  thirdPart.appendChild(contactUsHeader);

  secondPart.appendChild(locationP);
  thirdPart.appendChild(phoneP);
  thirdPart.appendChild(emailP);

  firstPart.appendChild(p1);
  firstPart.appendChild(facebook);
  firstPart.appendChild(instagram);
  firstPart.appendChild(twitter);
  firstPart.appendChild(youtube);

  contactContainer.appendChild(firstPart);
  contactContainer.appendChild(secondPart);
  contactContainer.appendChild(thirdPart);
  content.appendChild(contactContainer);
  copyrightDiv.appendChild(copyright);
  content.appendChild(copyrightDiv);
};
export { loadContactPage };
