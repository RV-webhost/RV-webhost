// login.js

// Toggle between login and signup forms
function toggleForm(form) {
    document.getElementById("signup-form").style.display = form === 'signup' ? "block" : "none";
    document.getElementById("login-form").style.display = form === 'login' ? "block" : "none";
}

// Register a new user and redirect to index.html
function registerUser(event) {
    event.preventDefault();
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    if (email && password && name) {
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        alert("Signup successful! Redirecting to the homepage...");
        window.location.href = "index.html"; // Redirect to index.html after signup
    } else {
        alert("Please fill in all fields.");
    }
}

// Log in an existing user and redirect to index.html
function loginUser(event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
        alert("Login successful! Redirecting to the homepage...");
        window.location.href = "index.html"; // Redirect to index.html after login
    } else {
        alert("Invalid email or password.");
    }
}
