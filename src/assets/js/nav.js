export default function initNav() {
  const trigger = document.querySelector('.menu-trigger');
  const overlay = document.querySelector('.mobile-menu-overlay');
  const body = document.body;
  const mobileClose = document.querySelector('.mobile-menu-close');

  function openMenu() {
    body.classList.add('mobile-menu-open');
    overlay.classList.add('visible');
  }

  function closeMenu() {
    body.classList.remove('mobile-menu-open');
    overlay.classList.remove('visible');
  }

  if (trigger) {
    trigger.addEventListener('click', () => {
      if (body.classList.contains('mobile-menu-open')) closeMenu();
      else openMenu();
    });
  }

  if (overlay) overlay.addEventListener('click', closeMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMenu);

  // Optional: close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}