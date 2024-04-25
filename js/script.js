// Toggle class active untuk Hamburger Menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle Class Active untuk Search Form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Menambahkan event listener untuk input pada searchBox
searchBox.addEventListener("input", function () {
  const keyword = this.value.trim().toLowerCase(); // Mendapatkan kata kunci pencarian dan mengubahnya menjadi huruf kecil
  const sections = document.querySelectorAll("section"); // Memilih semua elemen <section>

  sections.forEach((section) => {
    const sectionContent = section.textContent.toLowerCase(); // Mendapatkan konten dari setiap section dan mengubahnya menjadi huruf kecil

    if (sectionContent.includes(keyword)) {
      // Memeriksa apakah kata kunci pencarian ada dalam konten section
      section.style.display = "block"; // Jika iya, tampilkan section
    } else {
      section.style.display = "none"; // Jika tidak, sembunyikan section
    }
  });
});

//Klik diluar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
