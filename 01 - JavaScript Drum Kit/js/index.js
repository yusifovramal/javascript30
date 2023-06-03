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
