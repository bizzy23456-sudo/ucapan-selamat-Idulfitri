// Tombol Parcel
const parcelBtn = document.getElementById("parcelBtn");
const takbirAudio = document.getElementById("takbir-audio");


parcelBtn.addEventListener("click", () => {
  // Mainkan audio takbir
  takbirAudio.currentTime = 0; // reset ke awal
  takbirAudio.play().catch(e => console.log("Audio autoplay diblok:", e));

  // Popup lucu
  alert("🎉 Selamat! Parcel Terbuka! 🌙✨\nSemoga Hari Raya penuh berkah!");
  
  // Animasi confetti
  createConfetti();
  
});
