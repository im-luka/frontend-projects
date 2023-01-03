const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");

  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// TABS
const tabLists = document.querySelector("[role='tablist']");
const tabs = tabLists.querySelectorAll("[role='tab']");

let tabFocus = 0;
tabLists.addEventListener("keydown", (e) => {
  const keyDownLeft = 37;
  const keyDownRight = 39;

  if (e.keyCode === keyDownLeft || e.keyCode === keyDownRight) {
    tabs[tabFocus].setAttribute("tabindex", -1);
  }

  if (e.keyCode === keyDownRight) {
    tabFocus++;
    if (tabFocus >= tabs.length) {
      tabFocus = 0;
    }
  }

  if (e.keyCode === keyDownLeft) {
    tabFocus--;
    if (tabFocus < 0) {
      tabFocus = tabs.length - 1;
    }
  }

  tabs[tabFocus].setAttribute("tabindex", 0);
  tabs[tabFocus].focus();
});

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image");

    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;

    tabContainer
      .querySelector("[aria-selected='true']")
      .setAttribute("aria-selected", false);

    targetTab.setAttribute("aria-selected", true);

    mainContainer
      .querySelectorAll("[role='tabpanel']")
      .forEach((elem) => elem.setAttribute("hidden", true));
    mainContainer.querySelector([`#${targetPanel}`]).removeAttribute("hidden");

    mainContainer
      .querySelectorAll("picture")
      .forEach((elem) => elem.setAttribute("hidden", true));
    mainContainer.querySelector([`#${targetImage}`]).removeAttribute("hidden");
  });
});
