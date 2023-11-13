export default function removeError(input) {
  const parent = input.parentNode;
  const errorMessage = parent.lastElementChild;

  parent.classList.remove('form__item-error');
  errorMessage.textContent = '';
}