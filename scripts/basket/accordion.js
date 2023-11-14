export default function accordion() {
  const buttons = document.querySelectorAll('.accordion-button');
  const buttonAll = document.querySelector('.list__all-button');
  const totalText = document.querySelector('.list__total-text');

  buttons.forEach(elem => {
    elem.addEventListener('click', () => {
      const content = elem.nextElementSibling;
      const arrow = elem.lastElementChild;

      if (content.classList.contains('list__body') && content.style.maxHeight == '0px') {
        buttonAll.style.display = 'flex';
        totalText.style.display = 'none';
      } else if (content.classList.contains('list__body')) {
        buttonAll.style.display = 'none';
        totalText.style.display = 'block';
      }

      if (content.style.maxHeight == '0px') {
        content.style.maxHeight = content.scrollHeight + 'px';
        arrow.classList.remove('arrow-close');
      } else {
        content.style.maxHeight = 0;
        arrow.classList.add('arrow-close');
      }
    })
  })
};