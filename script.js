// Smooth Scroll ----------------------------------------------------------------------------------

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

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

// Hero Image Slider ----------------------------------------------------------------------------------

// Pilih semua gambar dalam elemen .gambar-besar
const images = document.querySelectorAll(".gambar-besar img");
const tombolNavigasi = document.querySelectorAll(".tombol"); // Pilih semua tombol navigasi
let HeroImage = 0; // Indeks gambar aktif

// Fungsi untuk mengganti gambar
function changeImage() {
  // Hapus kelas "active" dari gambar dan tombol saat ini
  images[HeroImage].classList.remove("active");
  tombolNavigasi[HeroImage].classList.remove("active");

  // Pindah ke gambar berikutnya (loop kembali ke awal jika sudah di akhir)
  HeroImage = (HeroImage + 1) % images.length;

  // Tambahkan kelas "active" ke gambar dan tombol berikutnya
  images[HeroImage].classList.add("active");
  tombolNavigasi[HeroImage].classList.add("active");
}

// Mulai dengan gambar pertama
images[HeroImage].classList.add("active");
tombolNavigasi[HeroImage].classList.add("active");

// Jalankan fungsi changeImage setiap 6 detik
setInterval(changeImage, 6000);

// Tombol Navigasi Slider ----------------------------------------------------------------------------------

const heroImages = document.querySelectorAll(".gambar-besar img");
const tombolNavigasi2 = document.querySelectorAll(".tombol");

// Fungsi untuk menampilkan gambar sesuai indeks
function showImage(index) {
  // Reset semua gambar
  heroImages.forEach((img) => img.classList.remove("active"));

  // Tampilkan gambar sesuai indeks
  heroImages[index].classList.add("active");
}

// Tambahkan event listener ke setiap tombol
tombolNavigasi2.forEach((tombol) => {
  tombol.addEventListener("click", () => {
    const index = parseInt(tombol.getAttribute("data-index"), 10); // Ambil indeks dari atribut data-index
    showImage(index);
  });
});

// Tampilkan gambar pertama saat halaman dimuat
showImage(0);

// Thumbnail Overlay ----------------------------------------------------------------------------------

// Array gambar besar
// Certificates
const crImages = [
  "asset/cert/acp.jpg",
  "asset/cert/coursera-graphicdesign.jpg",
  "asset/cert/digitalent-jrgraphicdesign.jpg",
  "asset/cert/linkedin-photoshop.png",
  "asset/cert/indonesianext.jpg",
  "asset/cert/rubrik-illustrator.jpg",
  "asset/cert/digitalent-htmlcss.jpg",
  "asset/cert/progate-3day.jpg",
  "asset/cert/progate-webnodejs.jpg",
];
let currentIndex = 0;

// Project
const prImages = [
  "asset/img/topologi.jpg",
  "asset/img/bade.jpg",
  "asset/img/asnbeasiswa.jpg",
];
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

// Preloader ----------------------------------------------------------------------------------

window.addEventListener("load", function () {
  // Menambahkan kelas 'no-scroll' untuk mencegah scroll saat preloader muncul
  document.body.classList.add("no-scroll");

  // Simulasi waktu loading (3 detik)
  setTimeout(function () {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("hero");

    // Menyembunyikan preloader dan menampilkan konten
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";
    content.style.display = "block";

    // Menghapus kelas 'no-scroll' agar scroll dapat berfungsi
    document.body.classList.remove("no-scroll");
  }, 3000); // Durasi 3 detik
});

// Aktifkan efek hover pada bagian "About" saat elemen terlihat --------------------------------

const aboutSection = document.querySelector("#about");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        aboutSection.classList.add("hover-effect");
      } else {
        aboutSection.classList.remove("hover-effect");
      }
    });
  },
  { threshold: 0.5 } // Aktifkan jika 50% elemen terlihat
);

observer.observe(aboutSection);

// Aktifkan efek hover pada bagian "Timeline" saat elemen terlihat --------------------------------

const timelineLeftElements = document.querySelectorAll("#timeline .left-2");
const timelineRightElements = document.querySelectorAll("#timeline .right-2");

// Fungsi untuk menambahkan kelas hover-effect ke elemen tertentu
const addHoverEffect = (element) => {
  element.classList.add("hover-effect");
};

// Fungsi untuk menghapus kelas hover-effect dari elemen tertentu
const removeHoverEffect = (element) => {
  element.classList.remove("hover-effect");
};

// Intersection Observer untuk elemen kiri
const leftObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        addHoverEffect(entry.target);
      } else {
        removeHoverEffect(entry.target);
      }
    });
  },
  { threshold: 0.5 } // Aktifkan jika 50% elemen terlihat
);

// Intersection Observer untuk elemen kanan
const rightObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        addHoverEffect(entry.target);
      } else {
        removeHoverEffect(entry.target);
      }
    });
  },
  { threshold: 0.9 } // Aktifkan jika 50% elemen terlihat
);

// Observasi elemen kiri dan kanan
timelineLeftElements.forEach((element) => leftObserver.observe(element));
timelineRightElements.forEach((element) => rightObserver.observe(element));

// Efek Hover pada Project Item -------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project-item"); // Ganti selector sesuai dengan elemen Anda

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("hover-effect"); // Tambahkan efek hover
        } else {
          entry.target.classList.remove("hover-effect"); // Hilangkan efek jika keluar viewport
        }
      });
    },
    { threshold: 0.8 } // 50% elemen terlihat di viewport
  );

  projects.forEach((project) => observer.observe(project));
});
