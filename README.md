# 🎨 Glassmorphism Login & Signup Form with Dynamic Theme Switcher

A modern, responsive front-end UI project showcasing a seamless Login and Registration interface. This project utilizes the **Glassmorphism** design trend and implements a dynamic theme switcher using pure HTML, CSS variables, and JavaScript.

## ✨ Features

* **Glassmorphism UI:** Features a signature "frosted glass" effect on the form container, achieved using `backdrop-filter: blur()`, set against a vibrant gradient background.
* **Dynamic Theming:** Includes a fully functional **Dark/Light Theme Toggle** positioned within the form card. The entire color scheme, from backgrounds to text and borders, is swapped instantly using **CSS Custom Properties (Variables)**.
* **Seamless Form Switching:** Provides a smooth, animated sliding transition between the **Login** and **Registration** forms.
* **Pure Stack Implementation:** Built without external CSS or JavaScript frameworks, relying only on vanilla HTML, CSS, and JS for portability and performance.
* **Responsiveness:** Optimized layout for viewing on different screen sizes (desktops and mobile devices).

## 🚀 Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Structure and Semantic Markup. |
| **CSS3** | Layout, animations, transitions, and the Glassmorphism effect. |
| **CSS Variables** | Efficient management and switching of Dark and Light theme styles. |
| **JavaScript (Vanilla)** | Handling form visibility toggle, theme switching logic, and DOM interaction. |
| **Material Icons** | Providing crisp vector icons for input fields and the theme toggle. |

## 🖼️ Preview



*Note: The project supports switching to a Light theme, which retains the frosted glass effect over a light gray background.*

## ⚙️ Setup and Installation

To run this project locally, simply follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [Your Repository URL Here]
    ```
2.  **Open the file:** Navigate to the project directory and open the `index.html` file in your preferred web browser.

No build tools or server environment are required.

## 📄 Code Structure

The entire project is contained within a single HTML file, combining all HTML structure, CSS styling, and JavaScript logic for simplicity and ease of use.

* **`style` block:** Contains CSS, utilizing `:root` for variable definition and the `.light-theme` class for overriding variables during theme changes.
* **`body`:** Contains the main `.container` which holds both the forms and the `.theme-toggle`.
* **`script` block:** Contains the event listeners for form registration/login links and the core theme switching functionality.

## 🤝 Contribution

Feel free to fork the repository and contribute any improvements, such as adding persistent storage for theme preference or further optimizing the animations!
