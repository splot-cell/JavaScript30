// Audio

function playSound(e) {
    const audio = document.querySelector(`audio[data-key=${e.code}]`);
    if (!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();

    const key = document.querySelector(`.key[data-key=${e.code}`);
    key.classList.toggle("playing");
}

document.addEventListener("keydown", playSound);

// Visual

const keys = document.querySelectorAll(".key");

function removeTransition(e) {
    if (e.propertyName !== "transform") {
        return;
    }
    e.target.classList.remove("playing");
}

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));