const openBtn = document.querySelector(".open-nav");
const closeBtn = document.querySelector(".close-nav");
const nav = document.querySelector(".nav");

openBtn.addEventListener("click", () => {
  nav.setAttribute("style", "transform: translate(0, 0)");
});

closeBtn.addEventListener("click", () => {
  nav.setAttribute("style", "transform: translate(100%, 0)");
});
