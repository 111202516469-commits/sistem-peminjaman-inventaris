const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document
            .getElementById("username").value.trim();

        const password = document
            .getElementById("password").value;

        const message = document
            .getElementById("loginMessage");

        if (username === "" || password.trim() === "") {
            message.textContent =
                "Username dan password wajib diisi.";
            return;
        }

        // Login statis untuk demonstrasi Milestone 2.
        // Belum menggunakan autentikasi server.
        window.location.href = "dashboard.html";
    });
}
