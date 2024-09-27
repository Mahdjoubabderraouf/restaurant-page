import "./styles/index.css"; // Static CSS import

// Initially load the Home page dynamically (using named export)
import("./modules/loadHomePage")
  .then((module) => {
    const { loadHomePage } = module;
    loadHomePage();
  })
  .catch((error) => {
    console.error("Error loading the Home Page module", error);
  });

// Button elements
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");
const contactButton = document.getElementById("contact");

// Event listeners for dynamic imports (using named exports)
homeButton.addEventListener("click", () => {
  import("./modules/loadHomePage")
    .then((module) => {
      const { loadHomePage } = module;
      loadHomePage();
    })
    .catch((error) => {
      console.error("Error loading the Home Page module", error);
    });
});

menuButton.addEventListener("click", () => {
  import("./modules/loadMenuPage")
    .then((module) => {
      const { loadMenuPage } = module;
      loadMenuPage();
    })
    .catch((error) => {
      console.error("Error loading the Menu Page module", error);
    });
});

aboutButton.addEventListener("click", () => {
  import("./modules/loadAboutPage")
    .then((module) => {
      const { loadAboutPage } = module;
      loadAboutPage();
    })
    .catch((error) => {
      console.error("Error loading the About Page module", error);
    });
});

contactButton.addEventListener("click", () => {
  import("./modules/loadContactPage")
    .then((module) => {
      const { loadContactPage } = module;
      loadContactPage();
    })
    .catch((error) => {
      console.error("Error loading the Contact Page module", error);
    });
});
