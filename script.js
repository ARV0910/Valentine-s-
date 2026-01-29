const messages = [
  "I made something for you hehe :p",
  "You make my days brighter 🥺",
  "You mean a lot to me ❤️",
  "Will you be my Valentine? 💖"
];

let index = 0;

const text = document.getElementById("text");
const nextBtn = document.getElementById("nextBtn");
const choices = document.getElementById("choices");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

nextBtn.addEventListener("pointerdown", () => {
  
  index++;
  spawnHeart();

  if (index < messages.length) {
    fadeText(messages[index]);
  }

  if (index === messages.length - 1) {
    nextBtn.style.display = "none";
    choices.classList.remove("hidden");
  }
});

yesBtn.addEventListener("pointerdown", () => {

  // Let press animation show first
  setTimeout(() => {

    for(let i = 0; i < 25; i++){
      setTimeout(spawnHeart, i * 60);
    }

    spawnConfetti();

    text.innerText = "YAYYYY 💍💖 I LOVE YOUUU";

    choices.classList.add("hidden");

    document.body.classList.add("yes-mode");

  }, 80);

});

let noScale = 1;

noBtn.addEventListener("pointerdown", () => {
  noScale -= 0.12; // shrink amount
  if(noScale < 0.001) noScale = 0.001; // minimum size

  noBtn.style.setProperty("--scale", noScale);
  text.innerText = "I'll keep trying till you say yes 🥺💝";
});

/* TEXT FADE */

function fadeText(newText) {
  text.style.opacity = 0;

  setTimeout(() => {
    text.innerText = newText;
    text.style.opacity = 1;
  }, 200);
}

/* HEART SPAWNER */

function spawnHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 90 + "vw";
  heart.style.animationDuration = 2 + Math.random() * 2 + "s";
  heart.style.fontSize = 18 + Math.random() * 16 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

function spawnConfetti(){
  const colors = ["#ff4f8b", "#ffcc00", "#8aff8a", "#7dbbff", "#c77dff"];

  for(let i = 0; i < 40; i++){
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration =
      (Math.random() * 2 + 2) + "s";

    document.body.appendChild(confetti);

    setTimeout(()=>{
      confetti.remove();
    }, 4000);
  }
}

/* ✨ BACKGROUND SPARKLES */

function spawnSparkle() {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";

  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.bottom = "-10px";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 6000);
}

/* spawn sparkles slowly */
setInterval(spawnSparkle, 300);
