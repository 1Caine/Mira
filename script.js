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

function copyCA() {
    const caText = document.getElementById("caAddress").textContent;
    const copyBtn = document.querySelector(".copy-button");

    navigator.clipboard.writeText(caText).then(() => {
      copyBtn.textContent = "Copied!";
      setTimeout(() => {
        copyBtn.textContent = "Copy";
      }, 5000); 
    });
  }

document.querySelectorAll('.mira-image-item img').forEach(img => {
    img.addEventListener('click', () => {
      // Toggle zoom class on clicked image
      const isZoomed = img.classList.contains('zoomed');
      document.querySelectorAll('.mira-image-item img').forEach(i => i.classList.remove('zoomed'));
      if (!isZoomed) img.classList.add('zoomed');
    });
  });

  // Optional: Click outside to remove zoom
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.mira-image-item')) {
      document.querySelectorAll('.mira-image-item img').forEach(i => i.classList.remove('zoomed'));
    }
  });
