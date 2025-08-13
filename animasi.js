document.addEventListener("click", function (e) {
  // Daftar planet (URL atau path lokal)
  const planets = [
      "img/saturn_944272.png",
      "img/saturn_6288402.png",
      "img/saturn_7105655.png",
      "img/uranus_2240782.png",
      "img/uranus_8697665.png",
      "img/planet_10221098.png",
      "img/pluto_8697778.png",
      "img/earth_825001.png"
  ];
  // Pilih planet random
  const planetSrc = planets[Math.floor(Math.random() * planets.length)];

  const planet = document.createElement('img');
  planet.src = planetSrc;
  planet.classList.add('planet');
  
  planet.style.left = `${e.clientX}px`;
  planet.style.top = `${e.clientY}px`;

  document.body.appendChild(planet);

  setTimeout(() => {
      planet.classList.add('disappear');
      setTimeout(() => planet.remove(), 500);
  }, 800);
});

// Kalau mau animasi gradient bergerak di canvas, itu butuh kode canvas tersendiri.
// Tapi karena kamu sudah punya animasi garis di canvas, aku sarankan background
// tetap warna hitam di canvas, dan untuk efek gradasi bergerak di area lain (misal section).

// Jadi di sini aku HAPUS fungsi yang mengubah background body.

