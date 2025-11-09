const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Smoothly expand/collapse the mobile menu using max-height transitions.
menuBtn.addEventListener('click', () => {
  const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';

  if (isOpen) {
    // Collapse
    mobileMenu.style.maxHeight = '0';
    mobileMenu.setAttribute('aria-hidden', 'true');
    menuBtn.setAttribute('aria-expanded', 'false');
  } else {
    // Expand to the scrollHeight so the transition animates smoothly
    mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
    mobileMenu.setAttribute('aria-hidden', 'false');
    menuBtn.setAttribute('aria-expanded', 'true');
  }
});

// Optional: when the window resizes to desktop sizes, clear inline maxHeight so layout is natural
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) { // md breakpoint
    mobileMenu.style.maxHeight = null;
    mobileMenu.setAttribute('aria-hidden', 'true');
    menuBtn.setAttribute('aria-expanded', 'false');
  } else {
    // ensure the menu remains collapsed on small screens unless explicitly opened
    if (menuBtn.getAttribute('aria-expanded') !== 'true') {
      mobileMenu.style.maxHeight = '0';
    }
  }
});



