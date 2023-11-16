import deliveryCounter from "../delivery/deliveryCounter";
import totalUpdate from "../total/totalUpdate";
import checkStateSelection from "./checkStateSelection";

export default function selectedProduct() {
  const checkboxAll = document.querySelector('.list__checkbox');
  const checkboxesProduct = document.querySelectorAll('.item__checkbox');

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

    deliveryCounter();
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

      deliveryCounter();
      checkStateSelection();
      totalUpdate();
    })
  })
}