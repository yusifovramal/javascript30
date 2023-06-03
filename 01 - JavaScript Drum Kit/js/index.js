const buttons = document.querySelectorAll(".key")

buttons.forEach(button => {
  button.addEventListener("click", function () {
    const currentlyPlaying = document.querySelector(".key.playing");
    if (currentlyPlaying) {
      currentlyPlaying.classList.remove("playing");
    }
    this.classList.add("playing");
    const audio = document.querySelector(`audio[data-key="${this.getAttribute("data-key")}"]`);
    audio.currentTime = 0
    audio.play()
  })
})

window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;

  const currentPlaying = document.querySelector(".playing");
  if (currentPlaying) {
    currentPlaying.classList.remove("playing");
  }

  const el2 = document.querySelector(`[data-key="${e.keyCode}"]`);
  el2.classList.add("playing");

  audio.currentTime = 0;
  audio.play();
});