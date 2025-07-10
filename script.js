document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('.section');

  // Hide all sections
  sections.forEach(section => section.classList.remove('active'));

  // Show only 'about' section by default
  const defaultSection = document.getElementById('about');
  if (defaultSection) defaultSection.classList.add('active');

  // Click handler for nav links
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        sections.forEach(section => section.classList.remove('active'));
        targetSection.classList.add('active');
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Intersection observer scroll animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
  });
});
