import anime from "animejs/lib/anime.es.js";

let currentSection = 1;

function updateCurrentSection() {
  let viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  let scrollPosition =
    window.scrollY ||
    document.body.scrollTop +
      ((document.documentElement && document.documentElement.scrollTop) || 0);

  currentSection = Math.round(scrollPosition / viewportHeight) + 1;
}

anime({
  targets: ["#logo-path1"],
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1000,
  loop: false,
  delay: 500,
});
anime({
  targets: ["#logo-path2"],
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1000,
  loop: false,
  delay: 500,
});
anime({
  targets: ["#logo-path3"],
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1000,
  loop: false,
  delay: 500,
});
anime({
  targets: ["#logo-path4"],
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1000,
  loop: false,
  delay: 500,
});
anime({
  targets: ["#logo-path5"],
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1000,
  loop: false,
  delay: 500,
});

anime({
  targets: "#first-ornament-svg",
  opacity: 1,
  duration: 10000,
  loop: false,
  delay: 1000,
});

anime({
  targets: "#second-ornament-svg",
  opacity: 1,
  duration: 10000,
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
  targets: "#titre",
  opacity: 1,
  delay: 2200,
  duration: 10000,
});
anime({
  targets: "#date",
  opacity: 1,
  delay: 2500,
  duration: 10000,
});

anime({
  targets: "#line",
  opacity: 1,
  delay: 2000,
  duration: 5000,
});

anime({
  targets: ".center",
  opacity: 1,
  delay: 3300,
  duration: 5000,
});

anime({
  targets: ".st1",
  fill: "#fff",
  delay: 1200,
  duration: 7000,
});

anime({
  targets: "#first-text-container",
  opacity: 1,
  delay: 2600,
  duration: 4000,
});

anime({
  targets: "#second-text",
  opacity: 1,
  duration: 4000,
  delay: 2800,
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
const arrowContainer = document.querySelector(".arrow-container");

document.addEventListener("DOMContentLoaded", function () {
  // Check if the page is already scrolled to the top
  if (window.scrollY === 0) {
    // If it is, remove the arrowUp element
    arrowContainer.removeChild(arrowUp.parentElement);
  }

  // Add the scroll event listener after the initial check
  window.addEventListener("scroll", function () {
    if (window.scrollY === 0) {
      arrowContainer.removeChild(arrowUp.parentElement);
    } else {
      arrowContainer.appendChild(arrowUp.parentElement);
    }

    if (currentSection >= 3.9) {
      arrowContainer.removeChild(arrowDown.parentElement);
    } else {
      arrowContainer.appendChild(arrowDown.parentElement);
    }
  });
});

arrowUp.addEventListener("mouseenter", function () {
  arrowUp.style.opacity = 0.5;
});

arrowUp.addEventListener("mouseleave", function () {
  arrowUp.style.opacity = 1;
});
arrowDown.addEventListener("mouseenter", function () {
  arrowDown.style.opacity = 0.5;
});

arrowDown.addEventListener("mouseleave", function () {
  arrowDown.style.opacity = 1;
});

document.addEventListener("scroll", function () {
  updateCurrentSection();
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

  if (scrollPosition === 0 || currentSection === 4) {
    footer.classList.add("show");
  } else {
    footer.classList.remove("show");
  }
}

updateFooterVisibility();

document.addEventListener("scroll", function () {
  updateFooterVisibility();
});

// Rebours

let today = new Date();
const endDate = new Date(2023, 11, 13);
let timeDifference = endDate.getTime() - today.getTime();
let daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// Calculate hours, minutes, and seconds
let hours = Math.floor(
  (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

const leadingZero = (num) => (num < 10 ? "0" : "") + num;
let formattedHours = leadingZero(hours);
let formattedMinutes = leadingZero(minutes);
let formattedSeconds = leadingZero(seconds);

// Set up flaps ////////////////////////////////////////////
const speed = 0.1; // seconds
let beginStr = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
  .toUpperCase()
  .split("");
let endStr = `${days} JOURS`.toUpperCase().split("");
// A-Z, 0-9, spaces only

function updateCountdown() {
  const now = new Date();
  const endDate = new Date(2023, 11, 13); // Mois en JavaScript commencent à 0
  const timeDifference = endDate - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Affichez les valeurs jours, heures, minutes et secondes où vous voulez dans votre page HTML
  console.log(
    `Temps restant : ${days} jours, ${hours} heures, ${minutes} minutes, ${seconds} secondes`
  );
}

// Mettez à jour le compte à rebours toutes les secondes
setInterval(updateCountdown, 1000);

let amountOfFlaps =
  beginStr.length >= endStr.length ? beginStr.length : endStr.length;

let div = document.querySelector(".center");
let html = "";
for (let x = 0; x < amountOfFlaps; x++) {
  html +=
    '<div class=splitflap><div class="top"></div><div class="bottom"></div><div class="nextHalf"></div><div class="nextFull"></div></div>';
}

div.innerHTML = html;

// Set up more stuff ///////////////////////////////////////
const a1 = document.querySelectorAll(".top");
const a2 = document.querySelectorAll(".bottom");
const b1 = document.querySelectorAll(".nextFull");
const b2 = document.querySelectorAll(".nextHalf");

for (let x = 0; x < a1.length; x++) {
  a2[x].style.animationDuration = speed + "s";
  b2[x].style.animationDuration = speed + "s";
}

// And even more ///////////////////////////////////////////
const char = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  " ",
  ":",
];

let strCount = [];
let flag = [];
let flag2 = true;

for (let x = 0; x < amountOfFlaps; x++) {
  if (beginStr.length != amountOfFlaps) {
    for (let x = 0; x < amountOfFlaps - beginStr.length; x++) {
      beginStr.push(" ");
    }
  } else if (endStr.length != amountOfFlaps) {
    for (let x = 0; x < amountOfFlaps - endStr.length; x++) {
      endStr.push(" ");
    }
  }
}
for (let x = 0; x < amountOfFlaps; x++) {
  strCount[x] = char.indexOf(beginStr[x]);
  (flag[x] = false), (flag2 = true);
}

// Flip them flaps /////////////////////////////////////////
setInterval(function () {
  for (let x = 0; x < amountOfFlaps; x++) {
    if (b1[x].innerHTML == endStr[x]) dontFlipIt(x);
    else flipIt(x);

    if (
      flag.every(function (e) {
        return e;
      }) &&
      flag2
    )
      (flag2 = false), changeDestination();
  }
}, speed * 1000);

////////////////////////////////////////////////////////////
// Flap flipping functions /////////////////////////////////
////////////////////////////////////////////////////////////
function flipIt(x) {
  a1[x].innerHTML = char[strCount[x] == 0 ? char.length - 1 : strCount[x] - 1];
  a2[x].innerHTML = char[strCount[x] == 0 ? char.length - 1 : strCount[x] - 1];
  b1[x].innerHTML = char[strCount[x]];
  b2[x].innerHTML = char[strCount[x]];

  a2[x].classList.remove("flip1");
  a2[x].offsetWidth;
  a2[x].classList.add("flip1");

  b2[x].classList.remove("flip2");
  b2[x].offsetWidth;
  b2[x].classList.add("flip2");

  if (strCount[x] > char.length - 2) strCount[x] = 0;
  else strCount[x]++;
}

function dontFlipIt(x) {
  flag[x] = true;
  a2[x].classList.remove("flip2");
  a2[x].style.backgroundColor = "#3BB6eB";
  b2[x].style.backgroundColor = "#3BB6eB";
  a1[x].innerHTML = char[strCount[x] == 0 ? char.length - 1 : strCount[x] - 1];
  a2[x].innerHTML = char[strCount[x] == 0 ? char.length - 1 : strCount[x] - 1];
}

function changeDestination() {
  setTimeout(function () {
    flag.fill(false);
    flag2 = true;

    var tempArr = endStr.slice();
    endStr = beginStr.slice();
    beginStr = tempArr.slice();
  }, 3000);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
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
