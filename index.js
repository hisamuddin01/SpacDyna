const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const navLinks = document.querySelector(".nav-links");
//*********** NAVBAR ***************
navToggle.addEventListener("click", () => {
  const linksHeight = navLinks.getBoundingClientRect().height;
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  if (linksContainerHeight === 0) {
    navToggle.classList.add("close");
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    navToggle.classList.remove("close");
    linksContainer.style.height = 0;
  }
});
