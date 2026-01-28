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

nextBtn.addEventListener("click", () => {
  spawnHeart();
  index++;

  if(index < messages.length){
    text.innerText = messages[index];
  }

  if(index === messages.length - 1){
    nextBtn.style.display = "none";
    choices.classList.remove("hidden");
  }
});

yesBtn.addEventListener("click", () => {
  spawnHeart();
  spawnHeart();
  spawnHeart();
  text.innerText = "YAYYYY 💍💖 I LOVE YOUUU";
  choices.classList.add("hidden");
});

noBtn.addEventListener("click", () => {
  text.innerText = "I'll keep trying till you say yes 🥺❤️";
});

/* HEART SPAWNER */

function spawnHeart(){
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";

  document.body.appendChild(heart);

  setTimeout(()=>{
    heart.remove();
  },3000);
}
