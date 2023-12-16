const topMenuBtn = document.querySelector("#top-menu-btn");
const topMenu = document.querySelector("#top-menu");

topMenuBtn.addEventListener("click", () => {
  topMenu.classList.toggle("display");
});

document.addEventListener("click", (e) => {
  if (!topMenuBtn.contains(e.target) && !topMenu.contains(e.target)) {
    topMenu.classList.remove("display");
  }
});
