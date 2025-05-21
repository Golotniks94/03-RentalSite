document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('contact-us-modal');
  const openModalBtn = document.getElementById('contact-us-link');
  const closeModalBtn = modal?.querySelector('.close-button');

  if (!modal || !openModalBtn) return;

  const showModal = () => {
    modal.classList.add('show');
    modal.classList.remove('hide');
    modal.setAttribute('aria-hidden', 'false');
  };

  const hideModal = () => {
    modal.classList.add('hide');
    modal.setAttribute('aria-hidden', 'true');
    setTimeout(() => modal.classList.remove('show', 'hide'), 250);
  };

  openModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showModal();
  });

  closeModalBtn?.addEventListener('click', hideModal);

  window.addEventListener('click', (e) => {
    if (e.target === modal) hideModal();
  });

  window.addEventListener('keydown', (e) => {
    if (
      modal.classList.contains('show') &&
      (e.key === 'Escape' || e.key === 'Esc')
    ) {
      hideModal();
    }
  });

  modal.classList.add('hide');
  modal.setAttribute('aria-hidden', 'true');
});
