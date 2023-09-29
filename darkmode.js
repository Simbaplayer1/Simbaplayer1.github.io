function toggleDarkMode() {
  const body = document.body;
  const isDarkMode = body.classList.toggle("darkMode");
  localStorage.setItem("darkMode", isDarkMode ? "true" : "false");

  const btnKnob = document.querySelector(".btn-knob");
  if (isDarkMode) {
    btnKnob.style.transform = "translateX(2.5rem)";
  } else {
    btnKnob.style.transform = "translateX(0)";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    document.body.classList.add("darkMode");
    const btnKnob = document.querySelector(".btn-knob");
    btnKnob.style.transform = "translateX(2.5rem)";
  }
});
