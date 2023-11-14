import { products } from './products';

export default function renderProducts() {
  const productList = document.querySelector('.list__body');

  for (let i = 0; i < products.length; i++) {
    const product = document.createElement('div');
    product.className = 'list__item';
    product.setAttribute('data-checked', true);
    product.innerHTML = `
    <div class="list__item__left-column">
      <label>
        <input class="item__checkbox checkbox" type="checkbox" checked>
        <span class="item__custom-checkbox custom-checkbox"></span>
      </label>
      ${products[i].size ? `<div class="additional__size-mobile">${products[i].size}</div>` : ''}
      <img class="item__photo" src="${products[i].photo}">
      <div class="item__description">
        <div class="item__price-mobile">
          <p class="price__main"><span>${products[i].price}</span> сом</p>
          <p class="price__full-price"><span>${products[i].fullPrice}</span> сом</p>
        </div>
        <p class="description__title-mobile">${products[i].nameMobile ? products[i].nameMobile : products[i].name}</p>
        <p class="description__title">${products[i].name}</p>
        ${products[i].color || products[i].size ? `
        <div class="description__additional">
          ${products[i].color ? `<p class="additional__color">Цвет: ${products[i].color}</p>` : ''}
          ${products[i].size ? `<p class="additional__size">Размер: ${products[i].size}</p>` : ''}
        </div>
        ` : ''}
        <div class="description__company">
          <p class="company__address">Коледино WB</p>
          <div class="company__container">
            <p class="company__name">${products[i].company} </p>
            <img class="company__info" src="./assets/svg/info.svg" alt="company-info">
            <div class="info__content">
              <p class="info__title">${products[i].tooltip.title}</p>
              <p class="info__tax">${products[i].tooltip.tax}</p>
              <p class="info__address">${products[i].tooltip.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list__item__right-column">
      <div class="item__count">
        <div class="count__container">
          ${products[i].count < 2 ? 
            `<span class="count__minus" style="color: rgba(0, 0, 0, 0.2); pointer-events: none;">−</span>` : 
            `<span class="count__minus">−</span>`
          }
          <span class="count__number" data-price-per-unit=${products[i].pricePerUnit}>${products[i].count}</span>
          ${products[i].count == products[i].stock ? 
            `<span class="count__plus" style="color: rgba(0, 0, 0, 0.2); pointer-events: none;">+</span>` : 
            `<span class="count__plus">+</span>`
          }
        </div>
        ${products[i].stock ? `<p class="count__stock">Осталось <span>${products[i].stock}</span> шт.</p>` : ''}
        <div class="count__buttons">
          <div class="count__like" src="./assets/svg/like.svg" alt="like"></div>
          <div class="count__remove" src="./assets/svg/trash.svg" alt="remove"></div>
        </div>
      </div>
      <div class="item__price">
        <p class="price__main"><span class="large-number">${products[i].price}</span> сом</p>
        <p class="price__full-price"><span>${products[i].fullPrice}</span> сом</p>
        <div class="price__tooltip">
          <div class="price__tooltip__container">
            <p class="price__tooltip__title">${products[i].tooltipSale[0].name}</p>
            <p class="price__tooltip__sum">−<span class="sale-one">${Math.round(products[i].tooltipSale[0].value * +products[i].fullPrice.replaceAll(' ', ''))}</span> сом</p>
          </div>
          <div class="price__tooltip__container">
            <p class="price__tooltip__title" style="color: rgba(151, 151, 175, 1);">${products[i].tooltipSale[1].name}</p>
            <p class="price__tooltip__sum">−<span class="sale-two">${Math.round(products[i].tooltipSale[1].value * +products[i].fullPrice.replaceAll(' ', ''))}</span> сом</p>
          </div>
        </div>
      </div>
    </div>`;  

    productList.append(product);
  }
}