// script.js

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  function hideAllSections() {
    sections.forEach(section => {
      section.style.display = 'none';
    });
  }

  function showSection(id) {
    const section = document.querySelector(id);
    if (section) {
      section.style.display = 'block';
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const id = link.getAttribute('href');
      hideAllSections();
      showSection(id);
    });
  });

  // Initially show the home section
  hideAllSections();
  showHome('home');
});


