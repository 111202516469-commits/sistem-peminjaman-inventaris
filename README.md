# SISTEM PEMINJAMAN INVENTARIS

## 1. Identifikasi Masalah dan Manfaat Aplikasi

### A. Identifikasi Masalah

Pencatatan peminjaman barang inventaris secara manual dapat menimbulkan berbagai masalah, seperti:

1. Data peminjaman dan pengembalian barang berisiko hilang atau tidak tercatat dengan baik.
2. Petugas kesulitan mengetahui jumlah dan ketersediaan barang inventaris.
3. Informasi mengenai siapa yang meminjam barang dan kapan barang harus dikembalikan sulit dipantau.
4. Pencatatan manual membutuhkan waktu lebih lama dan berisiko terjadi kesalahan.
5. Pembuatan laporan peminjaman dan pengembalian membutuhkan proses yang cukup lama.

### B. Manfaat Aplikasi

Aplikasi Sistem Peminjaman Inventaris dirancang untuk membantu proses pengelolaan barang agar lebih teratur dan efisien. Manfaatnya meliputi:

1. Mempermudah pencatatan data barang inventaris.
2. Mempermudah proses peminjaman dan pengembalian barang.
3. Membantu petugas memantau ketersediaan barang.
4. Memudahkan pencarian data peminjam dan riwayat transaksi.
5. Mempermudah pembuatan laporan peminjaman dan pengembalian barang.

## 2. Target Pengguna dan Kebutuhan Pengguna

### A. Target Pengguna

1. **Admin:** mengelola akun pengguna dan seluruh data aplikasi.
2. **Petugas inventaris:** mengelola barang, mencatat peminjaman, memproses pengembalian, dan membuat laporan.
3. **Peminjam:** mahasiswa, dosen, karyawan, atau pengguna lain yang diizinkan meminjam barang inventaris.

### B. Kebutuhan Pengguna

1. Pengguna membutuhkan halaman login untuk masuk ke aplikasi.
2. Admin membutuhkan fitur untuk menambah, mengubah, menghapus, dan melihat data pengguna.
3. Petugas membutuhkan fitur pengelolaan data barang inventaris.
4. Petugas membutuhkan fitur pencatatan peminjaman dan pengembalian barang.
5. Pengguna membutuhkan informasi mengenai ketersediaan barang.
6. Petugas membutuhkan laporan transaksi peminjaman dan pengembalian.
7. Aplikasi diharapkan memiliki tampilan yang sederhana, mudah dipahami, dan dapat digunakan melalui komputer maupun ponsel.

## 3. Daftar Fitur Utama Aplikasi

Fitur utama yang direncanakan dalam Sistem Peminjaman Inventaris adalah:

1. **Login:** autentikasi pengguna sebelum mengakses aplikasi.
2. **Dashboard:** menampilkan ringkasan jumlah barang, barang tersedia, peminjaman aktif, dan pengembalian.
3. **Data Inventaris:** menampilkan, menambah, mengubah, menghapus, dan mencari data barang.
4. **Peminjaman Barang:** mencatat identitas peminjam, barang yang dipinjam, tanggal peminjaman, dan tanggal rencana pengembalian.
5. **Pengembalian Barang:** mencatat tanggal pengembalian dan kondisi barang.
6. **Data Pengguna:** mengelola informasi pengguna yang terdaftar.
7. **Laporan:** menampilkan ringkasan dan riwayat transaksi peminjaman serta pengembalian.

## 4. Repository Git, Struktur Folder, README, dan Commit

### A. Struktur Folder Proyek

```text
sistem-peminjaman-inventaris/
├── README.md
│   
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
└── pages/
    ├── login.html
    ├── dashboard.html
    ├── inventaris.html
    ├── peminjaman.html
    ├── pengembalian.html
    ├── pengguna.html
    └── laporan.html
```
