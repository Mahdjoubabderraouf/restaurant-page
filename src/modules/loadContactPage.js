import { content, activeButton } from "./tools";
import "../styles/contact.css";

const loadContactPage = () => {
  activeButton("Contact");
  content.innerHTML = "";
  content.className = "contact";
};
export { loadContactPage };
