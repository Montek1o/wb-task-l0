export default function updateTotalAmount() {
  const totalAmount = document.querySelector('.total__amount span');
  const totalAmountAccordion = document.querySelector('.total-text__price');
  const prices = document.querySelectorAll('.price__main span');
  const checkboxPay = document.querySelector('.payment-checkbox');
  const buttonPay = document.querySelector('.total__button');
  let sum = 0;

  prices.forEach(price => {
    const parent = price.closest('.list__item');

    if (parent.getAttribute('data-checked') == 'true') {
      sum += Number(price.textContent.replaceAll(' ', ''));
    }
  })

  totalAmount.textContent = (sum / 2).toLocaleString();
  totalAmountAccordion.textContent = (sum / 2).toLocaleString();

  if (checkboxPay.checked == true) {
    buttonPay.textContent = `Оплатить ${(sum / 2).toLocaleString()} сом`;
  }
}