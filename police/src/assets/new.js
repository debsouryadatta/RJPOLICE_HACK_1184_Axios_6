/* eslint-disable no-unused-vars */
// -----------------faqs--------------------
var acc = document.getElementsByClassName("accordian");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display == "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// -----------------contact form- gform--------------------
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwi_xvE9-6_qJWElzcEGchxvU1g-OFsX0qNVp4jQcxZxovUSQZWzU9-2d14lBdtzksJpg/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Response received successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
// -----------------police- civilian option dialog box--------------------
const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");
const pol = document.querySelector(".pol");
const civil = document.querySelector(".civil");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

pol.addEventListener("click", () => {
  modal.close();
});

civil.addEventListener("click", () => {
  modal.close();
});
// -----------------menu option dialog box--------------------
const modal2 = document.querySelector("#modal2");
const openModal2 = document.querySelector(".open-button2");
const closeModal2 = document.querySelector(".close-button2");

openModal2.addEventListener("click", () => {
  modal2.showModal();
});

closeModal2.addEventListener("click", () => {
  modal2.close();
});

const home = document.getElementById("home2");
home.addEventListener("click", () => {
  modal2.close();
});

const about = document.getElementById("about2");
about.addEventListener("click", () => {
  modal2.close();
});

const faqs = document.getElementById("faqs2");
faqs.addEventListener("click", () => {
  modal2.close();
});

const contact = document.getElementById("contact2");
contact.addEventListener("click", () => {
  modal2.close();
});

const login2 = document.getElementById("login2");
login2.addEventListener("click", () => {
  modal3.showModal();
});
// -----------------mobile police- civilian option dialog box--------------------
const pol3 = document.querySelector(".pol3");
const civil3 = document.querySelector(".civil3");
const modal3 = document.querySelector("#modal3");

pol3.addEventListener("click", () => {
  modal3.close();
});

civil3.addEventListener("click", () => {
  modal3.close();
});

const closeModal3 = document.querySelector(".close-button3");
closeModal3.addEventListener("click", () => {
  modal3.close();
});
