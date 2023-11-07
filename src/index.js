import anime from "animejs/lib/anime.es.js";

anime({
  targets: "svg path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 3000,
  loop: false,
  delay: 500,
});

anime({
  targets: "#circle",
  opacity: 1,
  delay: 3100,
  duration: 500,
});

anime({
  targets: ".st1",
  fill: "#fff",
  delay: 3000,
  duration: 7000,
});

anime({
  targets: "#first-text",
  opacity: 1,
  duration: 2000,
  delay: 4000,
});

anime({
  targets: "#second-text",
  opacity: 1,
  duration: 2000,
  delay: 4500,
});

anime({
  targets: "#line-container",
  // translateX: "0px",
  rotate: -15,
  duration: 5000,
});
