const container = document.querySelector('.container');
const registerLink = document.getElementById('registerLink');
const loginLink = document.getElementById('loginLink');
const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('themeIcon');

// --- Theme Switcher Logic ---
themeToggle.addEventListener('click', () => {
    // Toggle the class on the body to switch themes
    body.classList.toggle('light-theme');

    // Update the icon based on the current theme
    if (body.classList.contains('light-theme')) {
        themeIcon.textContent = 'nights_stay'; // Show Moon icon for light mode
    } else {
        themeIcon.textContent = 'wb_sunny'; // Show Sun icon for dark mode
    }
});


// --- Form Switcher Logic (Original) ---
registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.add('signup-mode');
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.remove('signup-mode');
});