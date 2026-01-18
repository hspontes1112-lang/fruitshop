const revealItems = document.querySelectorAll(
  ".section, .hero-copy, .hero-panel, .service-card, .experience-card, .cta-panel"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item, index) => {
  item.classList.add("reveal");
  item.style.transitionDelay = `${index * 80}ms`;
  observer.observe(item);
});
