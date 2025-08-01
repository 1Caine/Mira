function toggleAnswer(toggleEl) {
    const icon = toggleEl.querySelector('.icon');
    const answer = toggleEl.nextElementSibling;

    const isOpen = answer.classList.contains('show');

    // Close all answers and reset icons
    document.querySelectorAll('.answer').forEach(a => a.classList.remove('show'));
    document.querySelectorAll('.question-toggle .icon').forEach(i => i.textContent = '+');

    // If it wasn't open, open this one
    if (!isOpen) {
      answer.classList.add('show');
      icon.textContent = '−'; // Unicode minus sign
    }
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
