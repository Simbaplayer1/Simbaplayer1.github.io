function toggleDarkMode() {
  const body = document.body;
  const isDarkMode = body.classList.toggle("darkMode");
  localStorage.setItem("darkMode", isDarkMode ? "true" : "false");

  const btnKnob = document.querySelector(".btn-knob");
  if (isDarkMode) {
    btnKnob.style.transform = window.innerWidth < 1000 ? "translateX(1.5rem)" : "translateX(2.5rem)";
  } else {
    btnKnob.style.transform = "translateX(0)";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    document.body.classList.add("darkMode");
    const btnKnob = document.querySelector(".btn-knob");
    btnKnob.style.transform = window.innerWidth < 1000 ? "translateX(1.5rem)" : "translateX(2.5rem)";
  }
});

// Listen for window resize events to update the transform when the screen width changes
window.addEventListener("resize", function () {
  const btnKnob = document.querySelector(".btn-knob");
  const isDarkMode = document.body.classList.contains("darkMode");
  btnKnob.style.transform = isDarkMode && window.innerWidth < 1000 ? "translateX(1rem)" : "translateX(2.5rem)";
});
