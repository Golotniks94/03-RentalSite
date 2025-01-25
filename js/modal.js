document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('contact-us-modal')
  const openModalBtn = document.getElementById('contact-us-link')
  const closeModalBtn = document.querySelector('#contact-us-modal .close-button')

  const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
  }

  const closeModal = () => {
    modal.classList.add('hide')
    setTimeout(() => {
      modal.classList.remove('show')
      modal.classList.remove('hide')
    }, 250)
  }

  openModalBtn.addEventListener('click', openModal)
  closeModalBtn.addEventListener('click', closeModal)

  window.addEventListener('click', e => {
    if (e.target === modal) {
      closeModal()
    }
  })
})
