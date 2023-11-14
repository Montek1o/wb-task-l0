export default function modalPayController() {
  const buttonsEdit = document.querySelectorAll('.edit-pay');
  const modal = document.querySelector('.modal-pay');
  const close = document.querySelector('.modal-pay__close');
  const submit = document.querySelector('.modal-pay__button');
  const cardsImage = document.querySelectorAll('.card-type');
  const body = document.body;

  function closeModal(event) {
    if (
      event.target === modal ||
      event.target === close ||
      event.target === submit ||
      event.code === 'Escape'
      ) {
      modal.style.display = 'none';
      body.style.overflow = 'visible';
      changeCard();
    }

    window.removeEventListener('keydown', closeModal);
  }

  function openModal() {
    modal.style.display = 'flex';
    body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeModal);
  }

  function changeCard() {
    const value = document.querySelector('input[name="pay-card"]:checked').value;
    cardsImage.forEach((card) => {
      card.src = `./assets/svg/card/${value}.svg`
    });
  }

  buttonsEdit.forEach((button) => {
    button.addEventListener('click', openModal);
  })
  modal.addEventListener('click', closeModal);
  submit.addEventListener('click', changeCard);
}

