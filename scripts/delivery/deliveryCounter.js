export default function deliveryCounter() {
  const items = document.querySelectorAll('.list__item');
  const deliveryMain = document.querySelector('.delivery__date-main');
  const deliveryAdditional = document.querySelector('.delivery__date-additional');

  deliveryMain.querySelector('.point__photo__container').innerHTML = '';
  deliveryAdditional.querySelector('.point__photo__container').innerHTML = '';

  items.forEach(item => {
    if (item.getAttribute('data-checked') == 'true') {
      const element = (number) => `
      <div style="position: relative;">
        
        ${item.querySelector('.count__number').textContent == 1 ?
        `` :
        `<div class="point__product-count"><span class="large-count">${number}</span></div>`
        }
        <img class="point__photo" src="${item.querySelector('img').getAttribute('src')}" alt="product-photo">
      </div>
      `;
      
      if (+item.querySelector('.count__number').textContent > 184) {
        const numberAdditional = item.querySelector('.count__number').textContent - 184;
        deliveryAdditional.style.display = 'flex';
        deliveryAdditional.querySelector('.point__photo__container').innerHTML +=  element(numberAdditional);
        deliveryMain.querySelector('.point__photo__container').innerHTML += element(item.querySelector('.count__number').textContent - numberAdditional);
      } else {
        deliveryMain.querySelector('.point__photo__container').innerHTML += element(item.querySelector('.count__number').textContent);
      }
    }
  })
}