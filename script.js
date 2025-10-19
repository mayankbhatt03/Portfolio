const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle navbar on hamburger click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Hide navbar after clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
