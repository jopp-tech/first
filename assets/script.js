// START MUSIC
const startBtn = document.getElementById("startMusicBtn");
const bgMusic = document.getElementById("bgMusic");
const memories = document.getElementById("memories");

if(startBtn){
  startBtn.addEventListener("click", () => {
    bgMusic.play();
    memories.style.display = "block";
    startBtn.style.display = "none";
    document.querySelector(".sweet-message").style.display="none";
  });
}

// REVEAL LETTERS
document.querySelectorAll(".reveal-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const letter = btn.nextElementSibling;
    letter.style.display = letter.style.display === "block" ? "none" : "block";
  });
});

// SHOW SORRY LETTER
document.getElementById("showSorryBtn").addEventListener("click", () => {
  document.getElementById("sorryLetter").style.display = "block";
  document.getElementById("showSorryBtn").style.display = "none";
});

// SHOW FUTURE RN
document.getElementById("showFutureBtn").addEventListener("click", () => {
  document.getElementById("futureRN").style.display = "block";
  document.getElementById("showFutureBtn").style.display = "none";
});

// FLOATING SPARKLES
setInterval(() => {
  const sparkle = document.createElement("div");
  sparkle.textContent = "✨";
  sparkle.style.position = "absolute";
  sparkle.style.left = Math.random() * window.innerWidth + "px";
  sparkle.style.top = window.innerHeight + "px";
  sparkle.style.fontSize = "16px";
  sparkle.style.animation = "floatUp 4s linear";
  sparkle.style.opacity = ".7";
  document.querySelector(".sparkle-container").appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 4000);
}, 300);

// RIPPLE EFFECT
document.querySelectorAll(".ripple").forEach(btn => {
  btn.addEventListener("click", e => {
    const circle = document.createElement("span");
    const size = btn.offsetWidth;
    circle.style.width = circle.style.height = size + "px";
    circle.style.left = e.offsetX - size/2 + "px";
    circle.style.top = e.offsetY - size/2 + "px";
    circle.style.position = "absolute";
    circle.style.background = "rgba(255,255,255,0.6)";
    circle.style.borderRadius = "50%";
    circle.style.transform = "scale(0)";
    circle.style.animation = "rippleAnim 0.6s linear";
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});

// FLOATING HEARTS ON DECISION BUTTONS
document.querySelectorAll(".decision-box .decide-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    for(let i=0; i<5; i++){
      const heart = document.createElement("div");
      heart.textContent = "❤️";
      heart.style.position = "absolute";
      heart.style.left = (e.clientX + (Math.random()*40-20)) + "px";
      heart.style.top = (e.clientY + (Math.random()*40-20)) + "px";
      heart.style.fontSize = (16 + Math.random()*16) + "px";
      heart.style.opacity = 1;
      heart.style.transition = "all 2s ease-out";
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.style.transform = `translateY(-150px) scale(1.5)`;
        heart.style.opacity = 0;
      }, 50);

      setTimeout(() => heart.remove(), 2000);
    }
  });
});
