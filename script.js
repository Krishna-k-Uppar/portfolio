// Smooth Scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Typing Animation
const roles = ["Java Developer"];
let i = 0, j = 0;

function type() {
  if (j < roles[i].length) {
    document.getElementById("typing").innerHTML += roles[i][j];
    j++;
    setTimeout(type, 100);
  } else {
    setTimeout(() => {
      document.getElementById("typing").innerHTML = "";
      j = 0;
      i = (i + 1) % roles.length;
      type();
    }, 1500);
  }
}
type();

// Navbar scroll effect
window.addEventListener("scroll", function() {
  const nav = document.getElementById("navbar");

  if (window.scrollY > 50) {
    nav.style.background = "#020617";
  } else {
    nav.style.background = "rgba(0,0,0,0.5)";
  }
});

// EmailJS
(function(){
  emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById("contact-form")
.addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => alert("Message Sent!"))
    .catch(() => alert("Failed!"));
});