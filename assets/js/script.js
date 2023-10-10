const btnPlus = document.querySelector(".about-more-info");
const cont = document.querySelector(".about-me-info");
btnPlus.addEventListener("click", function () {
  cont.classList.remove("hidden");
  if (btnPlus.classList.contains("close-info")) {
    btnPlus.classList.remove("close-info");
    cont.classList.add("hidden");
    btnPlus.textContent = "+";
  } else {
    btnPlus.classList.add("close-info");
    btnPlus.textContent = "-";
  }
});
