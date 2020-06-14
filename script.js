const worldMusic = document.querySelector(".world-music");
const btnMusic = document.querySelector(".toggle-music");
let playMusic = false;
btnMusic.addEventListener("click", toggleMusic);
worldMusic.volume = 0.3;
worldMusic.loop = true;

function toggleNight() {
  night = !night;

  toggleBtn.classList.toggle("toggle-night");
  world.classList.toggle("world-night");

  sky.showNightSky(night);
}

function toggleMusic() {
  playMusic = !playMusic;
  btnMusic.classList.toggle("music-off");
  playMusic ? worldMusic.play() : worldMusic.pause();
}

init();
animate();