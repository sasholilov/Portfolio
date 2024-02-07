const btnPlus = document.querySelector(".about-more-info");
const cont = document.querySelector(".about-me-info");
const projectOne = document.getElementById("project-one");
const projectTwo = document.getElementById("project-two");
const projectThree = document.getElementById("project-three");
const btnViewOne = document
  .getElementById("project-one")
  .querySelector(".button-view");
const btnViewTwo = document
  .getElementById("project-two")
  .querySelector(".button-view");
const btnViewThree = document
  .getElementById("project-three")
  .querySelector(".button-view");
const imgElOne = document.getElementById("project-one").querySelector("img");
const imgElTwo = document.getElementById("project-two").querySelector("img");
const imgElThree = document
  .getElementById("project-three")
  .querySelector("img");
const prjTechOne = document
  .getElementById("project-one")
  .querySelector(".project-technologies")
  .querySelectorAll("span");
const prjTechTwo = document
  .getElementById("project-two")
  .querySelector(".project-technologies")
  .querySelectorAll("span");
const prjTechThree = document
  .getElementById("project-three")
  .querySelector(".project-technologies")
  .querySelectorAll("span");
const firstName = document.querySelector('input[id="firstName"]');
const lastName = document.querySelector('input[id="lastName"]');
const email = document.querySelector('input[id="email"]');
const subject = document.querySelector('input[id="subject"]');
const textMsg = document.querySelector("textarea");
const succesMsg = document.getElementById("succes-sent");
const errorMsg = document.getElementById("error-message");
const msgObject = {
  FirstName: firstName.value,
  LastName: lastName.value,
  FromEmail: email.value,
  Subject: subject.value,
  Message: textMsg.value,
};
document.getElementById("btnMsg").addEventListener("click", function () {
  // Проверете дали всички полета са попълнени
  if (
    firstName.value &&
    lastName.value &&
    email.value &&
    subject.value &&
    textMsg.value
  ) {
    const msgObject = {
      FirstName: firstName.value,
      LastName: lastName.value,
      FromEmail: email.value,
      Subject: subject.value,
      Message: textMsg.value,
    };

    emailjs.send("service_ov8ybw8", "template_7qypyl1", msgObject).then(
      function (response) {
        console.log("Email sent successfully", response);
        succesMsg.style.display = "block";
        setTimeout(function () {
          succesMsg.style.display = "none";
        }, 3500);

        // Занулете стойностите на полетата
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        subject.value = "";
        textMsg.value = "";
      },
      function (error) {
        console.error("Error sending email", error);
        alert("Възникна грешка в изпращането на писмото!");
      }
    );
  } else {
    // Ако има непопълнени полета, изведете съобщение или направете друга обработка
    errorMsg.style.display = "block";
  }
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
  prjTechOne.forEach((e) => {
    e.style.display = "flex";
  });
  btnViewOne.style.opacity = "0";
  imgElOne.style.opacity = "1";
  if (imgElOne.style.opacity === "1") {
    btnViewOne.style.opacity = "0";
  }
});

projectOne.addEventListener("mouseover", function () {
  prjTechOne.forEach((e) => {
    e.style.display = "none";
  });
  if (imgElOne.style.opacity === "1") {
    btnViewOne.style.opacity = "0";
  }
  setTimeout(function () {
    btnViewOne.style.opacity = "1";
  }, 200);
  projectOne.style.transition = "0.3s";
  projectOne.position = "relative";
  imgElOne.style.opacity = "0.7";
});

btnViewOne.addEventListener("mouseover", function () {
  if (imgElOne.style.opacity === "1") {
    btnViewOne.style.opacity = "0";
  }
  imgElOne.style.opacity = "0.7";
  btnViewOne.style.opacity = "1";
});

//------------------//

projectTwo.addEventListener("mouseout", function () {
  prjTechTwo.forEach((e) => {
    e.style.display = "flex";
  });
  btnViewTwo.style.opacity = "0";
  imgElTwo.style.opacity = "1";
  if (imgElTwo.style.opacity === "1") {
    btnViewTwo.style.opacity = "0";
  }
});

projectTwo.addEventListener("mouseover", function () {
  prjTechTwo.forEach((e) => {
    e.style.display = "none";
  });
  if (imgElTwo.style.opacity === "1") {
    btnViewTwo.style.opacity = "0";
  }
  setTimeout(function () {
    btnViewTwo.style.opacity = "1";
  }, 200);
  projectTwo.style.transition = "0.3s";
  projectTwo.position = "relative";
  imgElTwo.style.opacity = "0.7";
});

btnViewTwo.addEventListener("mouseover", function () {
  if (imgElTwo.style.opacity === "1") {
    btnViewTwo.style.opacity = "0";
  }
  imgElTwo.style.opacity = "0.7";
  btnViewTwo.style.opacity = "1";
});

//-----------------//

projectThree.addEventListener("mouseout", function () {
  prjTechThree.forEach((e) => {
    e.style.display = "flex";
  });
  btnViewThree.style.opacity = "0";
  imgElThree.style.opacity = "1";
  if (imgElThree.style.opacity === "1") {
    btnViewThree.style.opacity = "0";
  }
});

projectThree.addEventListener("mouseover", function () {
  prjTechThree.forEach((e) => {
    e.style.display = "none";
  });
  if (imgElThree.style.opacity === "1") {
    btnViewThree.style.opacity = "0";
  }
  setTimeout(function () {
    btnViewThree.style.opacity = "1";
  }, 200);
  projectThree.style.transition = "0.3s";
  projectThree.position = "relative";
  imgElThree.style.opacity = "0.7";
});

btnViewThree.addEventListener("mouseover", function () {
  if (imgElThree.style.opacity === "1") {
    btnViewThree.style.opacity = "0";
  }
  imgElThree.style.opacity = "0.7";
  btnViewThree.style.opacity = "1";
});

//-----------------------------//

function calcMyAge() {
  return new Date().getFullYear() - 1990;
}
function setMyAge() {
  const myAge = calcMyAge();
  document.getElementById("myAge").textContent = myAge;
}
setMyAge();
