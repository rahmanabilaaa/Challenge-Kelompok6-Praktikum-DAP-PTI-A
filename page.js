document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Perform authentication logic here (e.g., check username and password)
        // For simplicity, let's just display an alert with the entered data
        alert("Username: " + username + "\nPassword: " + password);
    });
});