const loading = document.getElementById("loading");
const main = document.getElementById("main");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

let scale = 1;
let noCount = 0;

/* ⏳ Fake loading screen */
setTimeout(() => {
  loading.classList.add("hidden");
  main.classList.remove("hidden");
}, 2500);

/* 💗 Heart spam */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 30 + 20 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 300);

/* 🧠 Guilt-tripping tab title */
const titles = [
  "Please 😭",
  "Why are you like this",
  "Just click yes",
  "This is awkward",
  "💘💘💘"
];
let t = 0;
setInterval(() => {
  document.title = titles[t % titles.length];
  t++;
}, 900);

/* 🏃 NO button escapes */
noBtn.addEventListener("mouseenter", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "vw";
  noBtn.style.top = Math.random() * 80 + "vh";
});

/* 😈 Clicking NO */
noBtn.addEventListener("click", () => {
  noCount++;
  scale += 0.4;
  yesBtn.style.transform = `scale(${scale})`;

  noBtn.innerText = "Yes 💘";
  noBtn.style.backgroundColor = "hotpink";
  noBtn.style.color = "white";

  if (scale > 4) {
    yesBtn.style.position = "fixed";
    yesBtn.style.inset = "0";
    yesBtn.style.width = "100vw";
    yesBtn.style.height = "100vh";
    yesBtn.style.fontSize = "90px";
    yesBtn.innerText = "YES 💖";
  }

  /* 💥 Fake crash */
  if (noCount === 3) {
    const crash = document.createElement("div");
    crash.id = "crash";
    crash.innerText = "SYSTEM ERROR 💔";
    document.body.appendChild(crash);
    setTimeout(() => crash.remove(), 1200);
  }

  /* 🚪 Remove escape */
  if (noCount > 6) {
    noBtn.remove();
  }
});

/* 💘 YES ending */
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <h1 style="margin-top:200px;font-size:60px;">
      💘 GOTCHA 💘<br>
      You’re my Valentine now 😌
    </h1>
  `;
});
