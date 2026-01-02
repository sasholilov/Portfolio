const btnPlus = document.querySelector(".about-more-info");
const cont = document.querySelector(".about-me-info");
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

function calcMyAge() {
  return new Date().getFullYear() - 1990;
}
function setMyAge() {
  const myAge = calcMyAge();
  document.getElementById("myAge").textContent = myAge;
}
setMyAge();
