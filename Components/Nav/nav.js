const hambtn = document.querySelector(".nav-hamburger");

hambtn.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});
