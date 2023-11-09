export default function checkboxPay() {
  const checkbox = document.querySelector('.payment-checkbox');
  const buttonPay = document.querySelector('.total__button');
  const totalAmount = document.querySelector('.total__amount span');
  const refinements = document.querySelector('.payment__refinements');

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      buttonPay.textContent = `Оплатить ${totalAmount.textContent} сом`;
      refinements.style.display = 'none';
    } else {
      buttonPay.textContent = 'Заказать';
      refinements.style.display = 'block';
    }
  })
}