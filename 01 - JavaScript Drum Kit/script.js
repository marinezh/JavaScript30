function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(audio);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log("key", key);
  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0; // rewind to the start
  //console.log("current time", audio.currentTime);
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip it if it's not a transform
  console.log("this", this);
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
console.log(keys);

window.addEventListener("keydown", playSound);
