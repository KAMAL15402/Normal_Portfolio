// Typing Animation
const texts = ["Full Stack Developer", "Backend Developer", "Cloud Enthusiast"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.typing').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 150);
  }
})();

// Expand / Collapse Project Cards
function toggleProject(element) {
  const details = element.querySelector('.project-details');
  if (details.style.display === 'block') {
    details.style.display = 'none';
  } else {
    // Close others
    document.querySelectorAll('.project-details').forEach(d => d.style.display = 'none');
    details.style.display = 'block';
  }
}

// Scroll Reveal
ScrollReveal().reveal('.reveal', {
  delay: 200,
  distance: '50px',
  duration: 1000,
  easing: 'ease-out',
  origin: 'bottom'
});
