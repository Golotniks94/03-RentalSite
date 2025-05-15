document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('contact-us-modal');
  const openModalBtn = document.getElementById('contact-us-link');

  if (!modal || !openModalBtn) return;

  const closeModalBtn = modal.querySelector('.close-button');

  const toggleModal = (show) => {
    modal.classList.toggle('show', show);
    if (show) {
      modal.classList.remove('hide');
    } else {
      modal.classList.add('hide');
      setTimeout(() => {
        modal.classList.remove('show', 'hide');
      }, 250);
    }
    modal.setAttribute('aria-hidden', !show);
  };

  openModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal(true);
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => toggleModal(false));
  }

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      toggleModal(false);
    }
  });

  window.addEventListener('keydown', (e) => {
    if (
      modal.classList.contains('show') &&
      (e.key === 'Escape' || e.keyCode === 27)
    ) {
      toggleModal(false);
    }
  });

  modal.classList.add('hide');
  modal.setAttribute('aria-hidden', true);
});
