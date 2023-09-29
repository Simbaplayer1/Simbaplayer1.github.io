function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('darkMode');
    const isDarkMode = body.classList.contains('darkMode');
    // Store the dark mode state in a cookie with a 30-day expiration
    document.cookie = `darkMode=${isDarkMode}; expires=${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString()}; path=/`;
  }
  // Function to get the value of a cookie by name
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  // Check if dark mode preference is stored in a cookie and apply it on page load
  window.addEventListener('load', () => {
    const isDarkMode = getCookie('darkMode');
    if (isDarkMode === 'true') {
      document.body.classList.add('darkMode');
    }
  });

  // JavaScript code in your darkmode.js file
function toggleDarkMode() {
  const body = document.body;
  const knob = document.querySelector('.btn-knob');

  // Check if dark mode is currently active
  const isDarkModeActive = body.classList.contains('darkMode');

  // Toggle dark mode
  body.classList.toggle('darkMode');

  // Move the knob based on dark mode state
  if (isDarkModeActive) {
    // Dark mode is deactivated, move the knob to the right
    knob.style.transform = 'translateX(2.65rem)';
  } else {
    // Dark mode is activated, move the knob to the left
    knob.style.transform = 'translateX(-0.05rem)';
  }
}
