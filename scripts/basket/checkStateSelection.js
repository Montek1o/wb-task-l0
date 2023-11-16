export default function checkStateSelection() {
  const checkboxAll = document.querySelector('.list__checkbox');
  const checkboxesProduct = document.querySelectorAll('.item__checkbox');
  const counterIcons = document.querySelectorAll('.basket-count');
  const counterDigits = document.querySelectorAll('.counter');

  let state = [];
  let counter = 0;

  checkboxesProduct.forEach(checkbox => {
    checkbox.checked === true ? state.push(true) : state.push(false);
  })

  // Включить общий чекбокс, если все продукты выбраны
  !state.includes(false) ? checkboxAll.checked = true : checkboxAll.checked = false;

  // Выключить общий чекбокс, если все продукты удалены
  if (checkboxesProduct.length == 0) {
    checkboxAll.checked = false;
  }

  // Обновить счётчик на корзине
  state.forEach(checkbox => {
    if (checkbox == true) {
      counter++;
    }
  })
  counterDigits.forEach(digit => {
    digit.textContent = counter;
  })
  counterIcons.forEach(icon => {
    if (counter == 0) {
      icon.style.display = 'none';
    } else {
      icon.style.display = 'flex';
    }
  })
}