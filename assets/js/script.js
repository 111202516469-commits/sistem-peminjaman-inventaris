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
        window.location.href = "dashboard.html";
    });
}

function perbaruiTanggalWaktu() {
    const tanggal = document.getElementById("tanggalSekarang");
    const waktu = document.getElementById("waktuSekarang");

    const sekarang = new Date();

    if (tanggal) {
        tanggal.textContent = sekarang.toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });
    }

    if (waktu) {
        waktu.textContent = sekarang.toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        });
    }
}

perbaruiTanggalWaktu();
setInterval(perbaruiTanggalWaktu, 1000);

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("show");
    });
}
