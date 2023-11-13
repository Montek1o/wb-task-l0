import totalUpdate from "../total/totalUpdate";

export default function selectedProduct() {
  const checkboxAll = document.querySelector('.list__checkbox');
  const checkboxesProduct = document.querySelectorAll('.item__checkbox');
  const counterIcons = document.querySelectorAll('.basket-count');
  const counterDigits = document.querySelectorAll('.counter');

  function checkStateSelection() {
    let state = [];
    let counter = 0;

    checkboxesProduct.forEach(checkbox => {
      checkbox.checked === true ? state.push(true) : state.push(false);
    })

    // Включить общий чекбокс, если все продукты выбраны
    !state.includes(false) ? checkboxAll.checked = true : checkboxAll.checked = false;

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

  // Выбрать все
  checkboxAll.addEventListener('change', function() {
    if (this.checked) {
      checkboxesProduct.forEach(checkbox => {
        const parent = checkbox.closest('.list__item');

        parent.setAttribute('data-checked', true);
        checkbox.checked = true;
      })
    } else {
      checkboxesProduct.forEach(checkbox => {
        const parent = checkbox.closest('.list__item');

        parent.setAttribute('data-checked', false);
        checkbox.checked = false;
      })
    }

    checkStateSelection();
    totalUpdate();
  })

  // Выбрать один элемент
  checkboxesProduct.forEach(checkbox => {

    checkbox.addEventListener('change', function(e) {
      const parent = e.target.closest('.list__item');
      
      if (e.target.checked == true) {
        parent.setAttribute('data-checked', true);
      } else {
        parent.setAttribute('data-checked', false);
      }

      checkStateSelection();
      totalUpdate();
    })
  })
}