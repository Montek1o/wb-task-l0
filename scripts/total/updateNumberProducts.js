export default function updateNumberProducts() {
  const fullPrice = document.querySelector('.total__products-sum');
  const fullPricesProduct = document.querySelectorAll('.price__full-price span');
  const totalProducts = document.querySelector('.total__products');
  const countNumber = document.querySelectorAll('.count__number');
  let sumPrice = 0;
  let sumProducts = 0;

  fullPricesProduct.forEach(price => {
    const parent = price.closest('.list__item');

    if (parent.getAttribute('data-checked') == 'true') {
      sumPrice += Number(price.textContent.replaceAll(' ', ''));
    }
  })
  countNumber.forEach(number => {
    const parent = number.closest('.list__item');

    if (parent.getAttribute('data-checked') == 'true') {
      sumProducts += Number(number.textContent);
    }
  })

  fullPrice.textContent = `${sumPrice / 2} сом`;
  totalProducts.textContent = `${sumProducts} товара`;
}