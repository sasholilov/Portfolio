const btnPlus = document.querySelector(".about-more-info");
const cont = document.querySelector(".about-me-info");
const projectOne = document.querySelector(".project-one");
const btnView = document.querySelector(".button-view");
const imgEl = document.querySelector(".project-one").querySelector("img");
const prjTech = document
  .querySelector(".project-technologies")
  .querySelectorAll("span");

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

projectOne.addEventListener("mouseout", function () {
  prjTech.forEach((e) => {
    e.style.display = "flex";
  });
  btnView.style.opacity = "0";
  imgEl.style.opacity = "1";
  if (imgEl.style.opacity === "1") {
    btnView.style.opacity = "0";
  }
});

projectOne.addEventListener("mouseover", function () {
  prjTech.forEach((e) => {
    e.style.display = "none";
  });
  if (imgEl.style.opacity === "1") {
    btnView.style.opacity = "0";
  }
  setTimeout(function () {
    btnView.style.opacity = "1";
  }, 200);
  projectOne.style.transition = "0.3s";
  projectOne.position = "relative";
  imgEl.style.opacity = "0.7";
});

btnView.addEventListener("mouseover", function () {
  if (imgEl.style.opacity === "1") {
    btnView.style.opacity = "0";
  }
  imgEl.style.opacity = "0.7";
  btnView.style.opacity = "1";
});

function calcMyAge() {
  return new Date().getFullYear() - 1990;
}
function setMyAge() {
  const myAge = calcMyAge();
  document.getElementById("myAge").textContent = myAge;
}
setMyAge();
