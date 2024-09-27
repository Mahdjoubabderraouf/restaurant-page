import "./styles/index.css"; // Keep the static CSS import

// Initially load the contact page
import("./modules/loadContactPage").then((module) => {
  const loadContactPage = module.default;
  loadContactPage();
});

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");
const contactButton = document.getElementById("contact");

homeButton.addEventListener("click", () => {
  import("./modules/loadHomePage").then((module) => {
    const loadHomePage = module.default;
    loadHomePage();
  });
});

menuButton.addEventListener("click", () => {
  import("./modules/loadMenuPage").then((module) => {
    const loadMenuPage = module.default;
    loadMenuPage();
  });
});

aboutButton.addEventListener("click", () => {
  import("./modules/loadAboutPage").then((module) => {
    const loadAboutPage = module.default;
    loadAboutPage();
  });
});

contactButton.addEventListener("click", () => {
  import("./modules/loadContactPage").then((module) => {
    const loadContactPage = module.default;
    loadContactPage();
  });
});
