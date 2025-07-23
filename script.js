const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = '零一二三四五六七八九冥幽幻灵梦神脑电火光影';
const charArray = characters.split('');
const fontSize = 14;
const columns = Math.floor(canvas.width / fontSize);
const drops = new Array(columns).fill(1);

function drawMatrixRain() {
  ctx.fillStyle = 'rgba(10, 10, 10, 0.02)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#ff006aff'; // neon greenish blue
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const char = charArray[Math.floor(Math.random() * charArray.length)];
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrixRain, 50);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function enterMira() {
  const landing = document.getElementById("landing");
  landing.style.opacity = 0;
  setTimeout(() => {
    landing.style.display = "none";
  }, 400);
}

function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  answer.classList.toggle("show");
}

function showEmailInput() {
  const emailInput = document.getElementById("emailInput");
  const emailLabel = document.getElementById("emailLabel");
  const confirmation = document.getElementById("confirmationMessage");

  emailInput.style.display = "inline-block";
  emailLabel.style.display = "inline-block";
  confirmation.style.display = "none";
  emailInput.focus();
}

function handleEnter(e) {
  if (e.key === "Enter") {
    const email = e.target.value.trim();
    const confirmation = document.getElementById("confirmationMessage");
    const emailInput = document.getElementById("emailInput");
    const emailLabel = document.getElementById("emailLabel");

    if (email) {
      confirmation.textContent = `Access requested for ${email}`;
      confirmation.style.display = "inline-block";
      emailInput.style.display = "none";
      emailLabel.style.display = "none";
    }
  }
}



