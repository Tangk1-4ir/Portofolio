// Fade-in animation on scroll
const faders = document.querySelectorAll('.fade-in'); // buat manggil class .fade-in
const appearOptions = { //kapan animasi dimulai
  threshold: 0.2, //elemen akan terlihat 20% dilaya
  rootMargin: '0px 0px -50px 0px' // animasi akan muncul lebih awal
};

const appearOnScroll = new IntersectionObserver((entries, observer) => { //observasi/pengamatan terhadap kapannya elemen masuk ke layar
  entries.forEach(entry => { // ngecek semua elemen yang terdeteksi
    if (!entry.isIntersecting) return; // simpelnya true/false pada tindakan, kalo false nanti berhenti
    entry.target.classList.add('visible'); // ini buat aktifin animasi di css biar muncul dilayar
    observer.unobserve(entry.target); // ini biar berhenti observasi
  });
}, appearOptions);

faders.forEach(fader => { // ini biar kalo di scroll, animasi nya tetap jalan
  appearOnScroll.observe(fader);
});

// Toggle mobile nav atau hamburger
const menuToggle = document.getElementById('menuToggle');
menuToggle.addEventListener('click', () => {
  document.getElementById('navMenu').classList.toggle('show');
});

// Toggle dark mode, ubah gambar, dan mainkan musik
const darkToggle = document.getElementById('darkToggle');
const heroImage = document.getElementById('heroImage');
const meImage = document.getElementById('meImage');
const bgMusic = document.getElementById('bgMusic');

let isDark = false;

// Musik main dari awal (light mode)
const audio = document.getElementById('bgMusic');
let musicPlayed = false;

document.body.addEventListener('click', () => {
  if (!musicPlayed) {
    audio.play().catch(err => {
      console.warn("Autoplay gagal:", err);
    });
    musicPlayed = true;
  }
});


// ini yang darkmode pengubahan foto
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  isDark = !isDark;

  if (isDark) {
    heroImage.src = 'nenel.jpg';
    meImage.src = 'iya.jpg';
  } else {
    heroImage.src = 'bubub.jpeg';
    meImage.src = 'ak.jpg';
  }
});
