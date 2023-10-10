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

function calcMyAge() {
  return new Date().getFullYear() - 1990;
}
function setMyAge() {
  const myAge = calcMyAge();
  document.getElementById("myAge").textContent = myAge;
}
setMyAge();
