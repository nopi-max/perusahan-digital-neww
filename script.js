// MENU MOBILE
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// TOMBOL HERO
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

  window.location.href = "#services";

});


// FORM VALIDATION
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if(name === "" || email === "" || message === ""){

    alert("Semua form wajib diisi!");

  }else{

    alert("Pesan berhasil dikirim!");

    form.reset();

  }

});


// STICKY NAVBAR EFFECT
window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){

    navbar.style.background = "#020617";

  }else{

    navbar.style.background = "#111827";

  }

});
