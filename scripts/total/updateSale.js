export default function updateSale() {
  const totalSale = document.querySelector('.total__sale-sum');
  const salesProduct = document.querySelectorAll('.price__tooltip__sum span');
  let sum = 0;

  salesProduct.forEach(sale => {
    const parent = sale.closest('.list__item');

    if (parent.getAttribute('data-checked') == 'true') {
      sum += Math.round(+sale.textContent);
    }
  })

  sum == 0 ? totalSale.textContent = `${sum} сом` : totalSale.textContent = `−${sum} сом`;
}