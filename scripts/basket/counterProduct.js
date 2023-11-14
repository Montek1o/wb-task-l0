import totalUpdate from "../total/totalUpdate";

export default function counterProduct() {
  const plus = document.querySelectorAll('.count__plus');
  const minus = document.querySelectorAll('.count__minus');

  plus.forEach(elem => {
    const parent = elem.closest('.list__item');
    const count = parent.querySelector('.count__number');
    const minus = parent.querySelector('.count__minus');
    const stock = parent.querySelector('.count__stock span');
    const pricePerUnit = +count.getAttribute('data-price-per-unit');
    
    function plusItem() {
      const fullPrice = parent.querySelectorAll('.price__full-price span');
      const saleOne = parent.querySelector('.sale-one');
      const saleTwo = parent.querySelector('.sale-two');
      const mainPrice = parent.querySelectorAll('.price__main span');
      let full;

      count.textContent = +count.textContent + 1;
      fullPrice.forEach(elem => {
        elem.textContent = +elem.textContent.replaceAll(' ', '') + pricePerUnit;
        full = +elem.textContent;
      })
      saleOne.textContent = Math.round(full * 0.55);
      saleTwo.textContent = Math.round(full * 0.1);
      mainPrice.forEach(elem => {
        elem.textContent = Math.round(full - +saleOne.textContent - +saleTwo.textContent);
      })

      if (+count.textContent > 1) {
        minus.style.color = 'rgba(0, 0, 0, 1)';
        minus.style.pointerEvents = 'auto';
      }
      if (stock && +count.textContent == +stock.textContent) {
        elem.style.pointerEvents = 'none';
        elem.style.color = 'rgba(0, 0, 0, 0.2)';
      }
      totalUpdate();
    }

    elem.addEventListener('click', () => plusItem());
  })

  minus.forEach(elem => {
    const parent = elem.closest('.list__item');
    const count = parent.querySelector('.count__number');
    const plus = parent.querySelector('.count__plus');
    const stock = parent.querySelector('.count__stock span');
    const pricePerUnit = +count.getAttribute('data-price-per-unit');

    function minusItem() {
      const fullPrice = parent.querySelectorAll('.price__full-price span');
      const saleOne = parent.querySelector('.sale-one');
      const saleTwo = parent.querySelector('.sale-two');
      const mainPrice = parent.querySelectorAll('.price__main span');
      let full;

      count.textContent -= 1;
      fullPrice.forEach(elem => {
        elem.textContent = +elem.textContent.replaceAll(' ', '') - pricePerUnit;
        full = +elem.textContent;
      })
      saleOne.textContent = Math.round(full * 0.55);
      saleTwo.textContent = Math.round(full * 0.1);
      mainPrice.forEach(elem => {
        elem.textContent = Math.round(full - +saleOne.textContent - +saleTwo.textContent);
      })

      if (+count.textContent < 2) {
        elem.style.color = 'rgba(0, 0, 0, 0.2)';
        elem.style.pointerEvents = 'none';
      }
      if (stock && +count.textContent != +stock.textContent) {
        plus.style.pointerEvents = 'auto';
        plus.style.color = 'rgba(0, 0, 0, 1)';
      }
      totalUpdate();
    }

    elem.addEventListener('click', () => minusItem());
  })
}

/* rgba(0, 0, 0, 0.2) */