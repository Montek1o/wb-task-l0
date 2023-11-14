export default function createError(input, text) {
  const parent = input.parentNode;
  const errorMessage = parent.lastElementChild;

  function clearAnimation() {
    input.style.animationName = '';
  }

  parent.classList.add('form__item-error');
  errorMessage.textContent = text;
  input.style.animationName = 'errorAnimation';
  setTimeout(clearAnimation, 500);
}