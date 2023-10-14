const btnPlus = document.querySelector(".about-more-info");
const cont = document.querySelector(".about-me-info");
const projectOne = document.querySelector(".project-one");
const btnView = document.querySelector(".button-view");
const imgEl = document.querySelector(".project-one").querySelector("img");
const prjTech = document
  .querySelector(".project-technologies")
  .querySelectorAll("span");

const firstName = document.querySelector('input[id="firstName"]');
const lastName = document.querySelector('input[id="lastName"]');
const email = document.querySelector('input[id="email"]');
const subject = document.querySelector('input[id="subject"]');
const textMsg = document.querySelector("textarea");
const succesMsg = document.getElementById("succes-sent");

const msgObject = {
  FirstName: firstName.value,
  LastName: lastName.value,
  FromEmail: email.value,
  Subject: subject.value,
  Message: textMsg.value,
};

document.getElementById("btnMsg").addEventListener("click", function () {
  emailjs.send("service_ov8ybw8", "template_7qypyl1", msgObject).then(
    function (response) {
      console.log("Email sent successfully", response);
      succesMsg.style.display = "block";
      setTimeout(function () {
        succesMsg.style.display = "none";
      }, 3500);
    },
    function (error) {
      console.error("Error sending email", error);
      alert("Възникна грешка в изпращането на писмото!");
    }
  );
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  subject.value = "";
  textMsg.value = "";
});

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
