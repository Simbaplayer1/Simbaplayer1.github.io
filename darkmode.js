function toggleDarkMode() {
  const body = document.body;
  const isDarkMode = body.classList.toggle("darkMode");
  localStorage.setItem("darkMode", isDarkMode ? "true" : "false");
}

// Check if dark mode preference is set in local storage and apply it
document.addEventListener("DOMContentLoaded", function () {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    document.body.classList.add("darkMode");
  }
});
