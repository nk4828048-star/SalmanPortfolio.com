// Dark mode toggle
document.getElementById('mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Smooth scrolling
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Typing effect
const typingTarget = document.querySelector('.typing-text');
const phrases = ['Salman Arain', 'a Developer', 'a Designer', 'a Coder'];
let phraseIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < phrases[phraseIndex].length) {
    typingTarget.textContent += phrases[phraseIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingTarget.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 500);
  }
}

document.addEventListener('DOMContentLoaded', type);

// Form validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const msg = document.getElementById("form-msg");

  if (!name.value || !email.value || !message.value) {
    msg.textContent = "Please fill in all fields!";
    msg.style.color = "red";
  } else {
    msg.textContent = "Thank you for your message!";
    msg.style.color = "green";
    this.reset();
  }
});
