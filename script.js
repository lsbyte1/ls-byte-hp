// ==================== MOBILE NAVIGATION ====================
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ==================== FOOTER JAHR ====================
const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ==================== SCROLL-ANIMATION ====================
const revealElements = document.querySelectorAll('.reveal-on-scroll');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

// ==================== EINFACHE FORMULARVALIDIERUNG ====================
const contactForm = document.querySelector('.contact-form');
const formMessage = document.querySelector('.form-message');

if (contactForm && formMessage) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputs = contactForm.querySelectorAll('input, textarea');
    let allValid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        allValid = false;
        input.setAttribute('aria-invalid', 'true');
      } else {
        input.setAttribute('aria-invalid', 'false');
      }
    });

    if (!allValid) {
      formMessage.textContent = 'Bitte füllen Sie alle Felder aus.';
      formMessage.classList.remove('success');
      formMessage.classList.add('error');
      return;
    }

    formMessage.textContent = 'Vielen Dank! Ihre Anfrage wurde vorbereitet. Bitte ersetzen Sie die Platzhalter im Kontaktbereich durch Ihre echten Kontaktdaten.';
    formMessage.classList.remove('error');
    formMessage.classList.add('success');
    contactForm.reset();
  });
}
