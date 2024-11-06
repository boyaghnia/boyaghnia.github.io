// Navbar Hidden

document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0; // Variabel untuk menyimpan posisi scroll terakhir
    const navbar = document.querySelector('.navbar'); // Ambil elemen navbar

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Posisi scroll saat ini

        if (scrollTop > lastScrollTop) {
            // Scroll ke bawah - sembunyikan navbar
            navbar.classList.add('hidden');
        } else {
            // Scroll ke atas - tampilkan navbar
            navbar.classList.remove('hidden');
            navbar.classList.add('navbar-scroll-atas');
        }
        lastScrollTop = scrollTop; // Perbarui posisi scroll terakhir
    });
});

// Button Scroll Naik

// Menampilkan tombol saat halaman di-scroll
window.onscroll = function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.classList.add("show"); // Tambah kelas 'show' untuk menampilkan tombol
    } else {
        scrollToTopBtn.classList.remove("show"); // Hapus kelas 'show' untuk menyembunyikan tombol
    }
};

// Fungsi untuk scroll ke atas
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Gulir ke atas dengan efek smooth
}