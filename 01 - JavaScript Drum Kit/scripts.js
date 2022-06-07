document.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key=${e.code}]`);
    const key = document.querySelector(`.key[data-key=${e.code}`);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
});