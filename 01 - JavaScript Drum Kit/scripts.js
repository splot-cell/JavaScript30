// Audio and animation start

function playSound(e) {
    const audio = document.querySelector(`audio[data-key=${e.code}]`);
    if (!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();

    const key = document.querySelector(`.key[data-key=${e.code}`);
    key.classList.add("playing");
}

document.addEventListener("keydown", playSound);

// Animation reset

function removeAnimation(e) {
    const key = document.querySelector(`.key[data-key=${e.code}`);
    if (!key) {
        return;
    }
    key.classList.remove("playing");
}

document.addEventListener("keyup", removeAnimation);