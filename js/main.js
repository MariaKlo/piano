const allPianoKeys = document.querySelectorAll(".key");

function playSound(newUrl) {
  new Audio(newUrl).play();
}

allPianoKeys.forEach((pianoKey, i) => {
  const number = i < 9 ? "0" + (i + 1) : i + 1;
  const newUrl = `24-piano-keys-sounds/key${number}.mp3`;
  pianoKey.addEventListener("click", () => playSound(newUrl));
});
