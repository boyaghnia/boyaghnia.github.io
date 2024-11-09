// Navbar Hidden ----------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0; // Variabel untuk menyimpan posisi scroll terakhir
  const navbar = document.querySelector(".navbar"); // Ambil elemen navbar

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Posisi scroll saat ini

    if (scrollTop > lastScrollTop) {
      // Scroll ke bawah - sembunyikan navbar
      navbar.classList.add("hidden");
    } else {
      // Scroll ke atas - tampilkan navbar
      navbar.classList.remove("hidden");
      navbar.classList.add("navbar-scroll-atas");
    }
    lastScrollTop = scrollTop; // Perbarui posisi scroll terakhir
  });
});

// Button Scroll Naik ---------------------------------------------------------------------------------

// Menampilkan tombol saat halaman di-scroll
window.onscroll = function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.classList.add("show"); // Tambah kelas 'show' untuk menampilkan tombol
  } else {
    scrollToTopBtn.classList.remove("show"); // Hapus kelas 'show' untuk menyembunyikan tombol
  }
};

// Fungsi untuk scroll ke atas
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" }); // Gulir ke atas dengan efek smooth
}

// Scroll Down ----------------------------------------------------------------------------------

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

// Thumbnail Overlay ----------------------------------------------------------------------------------

// Array gambar besar
const crImages = [
  "asset/img/acp.jpg",
  "asset/img/coursera-graphicdesign.jpg",
  "asset/img/digitalent-jrgraphicdesign.jpg",
  "asset/img/linkedin-photoshop.png",
  "asset/img/indonesianext.jpg",
  "asset/img/rubrik-illustrator.jpg",
  "asset/img/digitalent-htmlcss.jpg",
  "asset/img/progate-3day.jpg",
  "asset/img/progate-webnodejs.jpg",
];
let currentIndex = 0;

const prImages = ["asset/img/topologi.jpg", "asset/img/bade.jpg"];
let prIndex = 0;

// Fungsi untuk membuka overlay dengan gambar tertentu
function openOverlay(index) {
  currentIndex = index;
  document.getElementById("overlayImage").src = crImages[currentIndex];
  document.getElementById("overlay").style.display = "flex";

  // Tambahkan event listener untuk mendeteksi penekanan tombol panah pada keyboard
  document.addEventListener("keydown", handleKeydown);
}

function openOverlay2(index) {
  prIndex = index;
  document.getElementById("overlayImage2").src = prImages[prIndex];
  document.getElementById("overlay2").style.display = "flex";

  // Tambahkan event listener untuk mendeteksi penekanan tombol panah pada keyboard
  document.addEventListener("keydown", handleKeydown);
}

// Fungsi untuk menutup overlay
function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
  document.removeEventListener("keydown", handleKeydown); // Hapus event listener saat overlay ditutup
}

// Fungsi untuk menutup overlay kedua
function closeOverlay2() {
  document.getElementById("overlay2").style.display = "none";
  document.removeEventListener("keydown", handleKeydown); // Hapus event listener saat overlay kedua ditutup
}

// Fungsi untuk melihat gambar berikutnya
function nextImage() {
  currentIndex = (currentIndex + 1) % crImages.length;
  document.getElementById("overlayImage").src = crImages[currentIndex];
}

// Fungsi untuk melihat gambar sebelumnya
function prevImage() {
  // Jika overlay pertama yang aktif (gambar besar)
  if (document.getElementById("overlay").style.display === "flex") {
    currentIndex = (currentIndex - 1 + crImages.length) % crImages.length;
    document.getElementById("overlayImage").src = crImages[currentIndex];
  }
  // Jika overlay kedua yang aktif (gambar lainnya)
  else if (document.getElementById("overlay2").style.display === "flex") {
    prIndex = (prIndex - 1 + prImages.length) % prImages.length;
    document.getElementById("overlayImage2").src = prImages[prIndex];
  }
}
// Fungsi untuk menangani penekanan tombol pada keyboard
function handleKeydown(event) {
  const overlay = document.getElementById("overlay");
  const overlay2 = document.getElementById("overlay2");

  if (overlay.style.display === "flex") {
    // Hanya izinkan pindah gambar jika overlay pertama aktif
    if (event.key === "ArrowRight") {
      nextImage(); // Lanjutkan ke gambar berikutnya
    } else if (event.key === "ArrowLeft") {
      prevImage(); // Kembali ke gambar sebelumnya
    }
  }

  if (event.key === "Escape") {
    // Menutup overlay yang aktif jika tombol Escape ditekan
    if (overlay.style.display === "flex") {
      closeOverlay(); // Menutup overlay pertama
    } else if (overlay2.style.display === "flex") {
      closeOverlay2(); // Menutup overlay kedua
    }
  }
}

// Panah Kanan Certificate ----------------------------------------------------------------------------------

// Ambil elemen img dan elemen cards
const imgElement = document.querySelector(".box-certificate img");
const cardsElement = document.querySelector(".cards");

// Fungsi untuk memeriksa posisi scroll
function handleScroll() {
  if (cardsElement.scrollLeft > 0) {
    // Jika elemen .cards bergulir, sembunyikan img dan hilangkan filter invert
    imgElement.style.opacity = "0";
    imgElement.style.filter = "invert(0)";
    imgElement.style.visibility = "hidden";
    imgElement.style.transition = "all 0.5s ease";
  } else {
    // Jika kembali ke posisi awal, tampilkan img dan kembalikan filter invert
    imgElement.style.opacity = "1";
    imgElement.style.filter = "invert(100%)";
    imgElement.style.visibility = "visible";
  }
}

// Tambahkan event listener untuk mendeteksi scroll pada elemen .cards
cardsElement.addEventListener("scroll", handleScroll);
