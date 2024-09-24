export const activeButton = (buttonText) => {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    if (button.textContent === buttonText) {
      button.style.backgroundColor = "#fff";
      button.style.color = "#f5980c";
    } else {
      button.style.backgroundColor = "#000";
      button.style.color = "#fff";
    }
  });
};

export const inactiveButtons = () => {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.style.backgroundColor = "#000";
    button.style.color = "#fff";
  });
};

export const content = document.getElementById("content");
