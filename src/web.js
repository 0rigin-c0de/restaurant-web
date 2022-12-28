let docTitle = document.title;
const order = document.querySelectorAll(".order");

window.addEventListener("blur", () => {
  document.title = "Come back :(";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});
