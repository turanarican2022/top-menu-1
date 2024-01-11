const topMenuBtn = document.querySelector("#top-menu-btn");
const topMenu = document.querySelector("#top-menu");

topMenuBtn.addEventListener("click", () => {
  topMenu.classList.toggle("display");
  topMenuBtn.classList.toggle("active");
});

const langSelectorSummary = document.querySelector("#lang-selector--summary");
const langSelector = document.querySelector("#top-menu--language-selector");

document.addEventListener("click", (e) => {
  if (!topMenuBtn.contains(e.target) && !topMenu.contains(e.target)) {
    topMenu.classList.remove("display");
  }
  if (
    !langSelectorSummary.contains(e.target) &&
    !langSelector.contains(e.target)
  ) {
    langSelector.removeAttribute("open");
  }
});

const topMenuInnerMenuTitles = document.querySelectorAll(
  ".top-menu--inner-menu--column--title"
);
topMenuInnerMenuTitles.forEach((title) => {
  title.addEventListener("click", () => {
    title.parentElement.nextElementSibling.classList.toggle("display");
    topMenuInnerMenuTitles.forEach((t) => {
      if (t !== title) {
        t.parentElement.nextElementSibling.classList.remove("display");
      }
    });
  });
});
