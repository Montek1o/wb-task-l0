import createError from "./createError";
import removeError from "./removeError";
import scrollToForm from "./scrollToForm";

export default function validationForm() {
  const form = document.querySelector('.recipient__form');

  function validationSingleField(input) {
    let result = true;

    removeError(input);

    if (input.classList.contains('telephone__input')) {
      let regex = /^(\+[0-9])?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
      if (!regex.test(input.value)) {
        result = false;
        createError(input, 'Формат: +9 999 999 99 99');
      }
    }

    if (input.type == 'email') {
      if (input.value.includes('@') === false || input.value.includes('.') === false) {
        result = false;
        createError(input, 'Проверьте адрес электронной почты');
      }
    }
    
    if (input.dataset.numberDigits) {
      if (input.value.length != input.dataset.numberDigits) {
        result = false;
        createError(input, 'Проверьте ИНН (Должно быть 14 цифр)');
      }
    }

    if (input.value == '') {
      result = false;
      createError(input, input.getAttribute('data-empty-string'));
    }

    return result;
  }

  function validationAllField(form) {
    let stateInput = [];

    form.querySelectorAll('input').forEach(input => {
      stateInput.push(validationSingleField(input));
    });

    if (stateInput.includes(false)) {
      return false;
    } 
    return true;
  }

  // Валидация всех полей формы по кнопке
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (validationAllField(this)) {
      alert('Заказ успешно оформлен')
    } else {
      scrollToForm();
    }
  });

  // Валидация конкретных полей
  form.querySelectorAll('input').forEach(input => {
    const tag = input.nextElementSibling;
    const parent = input.parentNode;

    // События для смены позиции плейсхолдера
    input.addEventListener('focus', () => {
      tag.style.color = 'rgba(151, 151, 175, 1)';
    })
    input.addEventListener('blur', () => {
      if (input.value == '') {
        tag.style.color = 'transparent';
      }
    })

    // Валидация инпута при введённом значении и потери фокуса
    input.addEventListener('change', () => {
      validationSingleField(input);
    })
    // Валидация инпута при вводе значения в поле с ошибкой
    input.addEventListener('input', (e) => {
      if (parent.classList.contains('form__item-error')) {
        validationSingleField(input);
      }
    })
  });
}