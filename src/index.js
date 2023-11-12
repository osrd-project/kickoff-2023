import anime from "animejs/lib/anime.es.js";

let pathSecondOrnament = document.querySelector("#second-ornament-path");
let totalLenghtSecondOrnament = pathSecondOrnament.getTotalLength();

function log() {
  console.log("totalLenghtSecondOrnament", totalLenghtSecondOrnament);
}

log();
anime({
  targets: "#logo-path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1500,
  loop: false,
  delay: 500,
});

anime({
  targets: "#first-ornament-path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1500,
  loop: false,
  delay: 1000,
});

anime({
  targets: "#second-ornament-path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1500,
  loop: false,
  delay: 1000,
});

anime({
  targets: "#circle",
  opacity: 1,
  delay: 2000,
  duration: 10000,
});

anime({
  targets: "#line",
  opacity: 1,
  delay: 2000,
  duration: 5000,
});

anime({
  targets: ".st1",
  fill: "#fff",
  delay: 2000,
  duration: 7000,
});

anime({
  targets: "#first-text",
  opacity: 1,
  duration: 2000,
  delay: 3000,
});

anime({
  targets: "#second-text",
  opacity: 1,
  duration: 2000,
  delay: 3500,
});

anime({
  targets: "#line-container",
  x: "0%",
  rotate: "360deg",
  duration: 2000,
  easing: "easeOutQuart",
  delay: 500,
});

// Scrolling behavior

const arrowUp = document.getElementById("arrow-up");
const arrowDown = document.getElementById("arrow-down");
const sectionOne = document.getElementById("section-one");
const sectionTwo = document.getElementById("section-two");
const sectionThree = document.getElementById("section-three");
const sectionFour = document.getElementById("section-four");

window.addEventListener("scroll", function () {
  if (window.scrollY === 0) {
    console.log("at the top");
    arrowUp.style.opacity = "0";
  } else {
    arrowUp.style.opacity = "1";
  }

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    console.log("at the bottom");
    arrowDown.style.opacity = "0";
    arrowDown.style.pointerEvents = "none";
  } else {
    arrowDown.style.opacity = "1";
    arrowDown.style.pointerEvents = "auto";
  }
});

let currentSection = 1;

function updateCurrentSection() {
  let viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  let scrollPosition =
    window.scrollY ||
    document.body.scrollTop +
      ((document.documentElement && document.documentElement.scrollTop) || 0);

  currentSection = scrollPosition / viewportHeight + 1;

  console.log("Current Section:", currentSection);
}

document.addEventListener("scroll", function () {
  updateCurrentSection();
  console.log("current section", currentSection);
});

arrowDown.addEventListener("click", function () {
  if (currentSection >= 1 && currentSection < 2) {
    sectionTwo.scrollIntoView({ behavior: "smooth" });
  } else if (currentSection >= 2 && currentSection < 3) {
    sectionThree.scrollIntoView({ behavior: "smooth" });
  } else if (currentSection >= 3 && currentSection < 4) {
    sectionFour.scrollIntoView({ behavior: "smooth" });
  }
});

arrowUp.addEventListener("click", function () {
  if (currentSection > 1 && currentSection <= 2) {
    sectionOne.scrollIntoView({ behavior: "smooth" });
  } else if (currentSection > 2 && currentSection <= 3) {
    sectionTwo.scrollIntoView({ behavior: "smooth" });
  } else if (currentSection >= 3 && currentSection <= 4) {
    sectionThree.scrollIntoView({ behavior: "smooth" });
  }
});

// footer

let footer = document.querySelector(".footer");

function updateFooterVisibility() {
  let scrollPosition = window.scrollY || document.documentElement.scrollTop;

  let totalHeight = document.documentElement.scrollHeight;

  if (
    scrollPosition === 0 ||
    scrollPosition + window.innerHeight >= totalHeight
  ) {
    footer.classList.add("show");
  } else {
    footer.classList.remove("show");
  }
}

updateFooterVisibility();

document.addEventListener("scroll", function () {
  updateFooterVisibility();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.toggle("show", entry.isIntersecting);
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

window.addEventListener("scroll", function () {
  // Calcul de la position du défilement
  var scroll = window.pageYOffset || document.documentElement.scrollTop;

  // Obtenir la hauteur de la fenêtre
  var windowHeight = window.innerHeight;

  // Obtenir les éléments de section
  var sectionOne = document.querySelector(".section-one");
  var sectionTwoUp = document.querySelector(".section-two .part-one");
  var sectionThree = document.querySelector(".section-three");
  var sectionFour = document.querySelector(".section-four");

  // Calculer le pourcentage de défilement pour la section actuelle
  var scrollPercentOneTwo = scroll / windowHeight;
  var scrollPercentTwoThree = (scroll - windowHeight) / windowHeight;
  var scrollPercentThreeFour = (scroll - 2 * windowHeight) / windowHeight;

  // Fixer une limite pour le pourcentage de défilement entre 0 et 1 pour chaque transition
  scrollPercentOneTwo = Math.min(1, Math.max(0, scrollPercentOneTwo));
  scrollPercentTwoThree = Math.min(1, Math.max(0, scrollPercentTwoThree));
  scrollPercentThreeFour = Math.min(1, Math.max(0, scrollPercentThreeFour));

  // Transition de la section 1 à la section 2 (part-one)
  sectionOne.style.backgroundColor =
    "rgba(120, 106, 191," + scrollPercentOneTwo + ")";
  sectionTwoUp.style.backgroundColor =
    "rgba(120, 106, 191," + scrollPercentOneTwo + ")";

  // Transition de la section 3 à la section 4
  if (scroll >= 2 * windowHeight) {
    // Commence la transition après que la section 2 dépasse
    sectionThree.style.backgroundColor =
      "rgba(120, 106, 191," + (1 - scrollPercentThreeFour) + ")";
    sectionFour.style.backgroundColor =
      "rgba(120, 106, 191," + (1 - scrollPercentThreeFour) + ")";
  }
});
