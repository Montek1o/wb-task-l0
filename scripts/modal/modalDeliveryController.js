export default function modalDeliveryController() {
  const buttonsEdit = document.querySelectorAll('.edit-delivery');
  const modal = document.querySelector('.modal-delivery');
  const close = document.querySelector('.modal-delivery__close');
  const buttonsTypeDelivery = document.querySelectorAll('.way__item');
  const typeDeliveryCourier = document.querySelector('.addresses__courier');
  const typeDeliveryPoint = document.querySelector('.addresses__point');
  const typesDelivery = document.querySelectorAll('.type-delivery');
  const addressesDelivery = document.querySelectorAll('.edit-address');
  const deleteButtons = document.querySelectorAll('.address-delete');
  const score = document.querySelector('.point__score');
  const submit = document.querySelector('.modal-delivery__button');
  const body = document.body;
  
  function closeModal(event) {
    const addresses = document.querySelectorAll('.addresses__item');

    if (
      event.target === modal ||
      event.target === close ||
      event.target === submit ||
      event.code === 'Escape'
      ) {
      modal.style.display = 'none';
      body.style.overflow = 'visible';
      changeAddress();
    }

    window.removeEventListener('keydown', closeModal);
  }

  function openModal() {
    modal.style.display = 'flex';
    body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeModal);
  }

  function changeTypeDelivery() {
    const value = document.querySelector('input[name="way"]:checked').value;

    if (value == 'курьером') {
      typeDeliveryCourier.style.display = 'flex';
      typeDeliveryPoint.style.display = 'none';
    } else {
      typeDeliveryCourier.style.display = 'none';
      typeDeliveryPoint.style.display = 'flex';
    }
  }

  function changeAddress() {
    const valueType = document.querySelector('input[name="way"]:checked').value;

    function errorSelection() {
      addressesDelivery.forEach(elem => {
        elem.innerHTML = 'Выберите адрес доставки';
      })
      score.style.display = 'none';
    }

    if (valueType == 'курьером') {
      try {
        const valueAddress = document.querySelector('input[name="addresses-courier"]:checked').value;

        typesDelivery.forEach(elem => {
          elem.innerHTML = `Доставка курьером`;
        })
        addressesDelivery.forEach(elem => {
          elem.innerHTML = `${valueAddress}`;
        })
        score.style.display = 'block';
      } catch {
        errorSelection()
      }
    } else {
      try {
        const valueAddress = document.querySelector('input[name="addresses-point"]:checked').value;
  
        typesDelivery[0].innerHTML = `Пункт выдачи`;
        typesDelivery[1].innerHTML = `Доставка в пункт выдачи`;
        addressesDelivery.forEach(elem => {
          elem.innerHTML = `${valueAddress}`;
        })
        score.style.display = 'block';
      } catch {
        errorSelection()
      }
    } 
  }

  function deleteAddress(e) {
    const address = e.target.closest('.addresses__item');

    address.remove();
  }

  buttonsEdit.forEach((button) => {
    button.addEventListener('click', openModal);
  })
  buttonsTypeDelivery.forEach((button) => {
    button.addEventListener('click', changeTypeDelivery);
  })
  deleteButtons.forEach((button) => {
    button.addEventListener('click', deleteAddress);
  })
  modal.addEventListener('click', closeModal);
  submit.addEventListener('click', changeAddress);
}