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

// Scroll Down

// JavaScript to hide and show the "scroll-down" element
window.addEventListener("scroll", function () {
    const scrollDownElement = document.getElementById("scrollDown");
    
    if (window.scrollY > 0) {
        // Hide the scroll-down element when scrolling down
        scrollDownElement.classList.add("hidden");
    } else {
        // Show the scroll-down element when scrolled to the top
        scrollDownElement.classList.remove("hidden");
    }
});

// Thumbnail Overlay

// Array gambar besar
const images = ["asset/img/acp.png", "asset/img/coursera-graphicdesign.png", "asset/img/digitalent-jrgraphicdesign.png", "asset/img/linkedin-photoshop.png"];
let currentIndex = 0;

// Fungsi untuk membuka overlay dengan gambar tertentu
function openOverlay(index) {
    currentIndex = index;
    document.getElementById("overlayImage").src = images[currentIndex];
    document.getElementById("overlay").style.display = "flex";

    // Tambahkan event listener untuk mendeteksi penekanan tombol panah pada keyboard
    document.addEventListener("keydown", handleKeydown);
}

// Fungsi untuk menutup overlay
function closeOverlay() {
    document.getElementById("overlay").style.display = "none";

    // Hapus event listener saat overlay ditutup
    document.removeEventListener("keydown", handleKeydown);
}

// Fungsi untuk melihat gambar berikutnya
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("overlayImage").src = images[currentIndex];
}

// Fungsi untuk melihat gambar sebelumnya
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("overlayImage").src = images[currentIndex];
}

// Fungsi untuk menangani penekanan tombol pada keyboard
function handleKeydown(event) {
    if (event.key === "ArrowRight") {
        nextImage();
    } else if (event.key === "ArrowLeft") {
        prevImage();
    }
}