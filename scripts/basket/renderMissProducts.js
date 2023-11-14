import { products } from './products';

export default function renderProducts() {
  const productList = document.querySelector('.miss-list__body');

  for (let i = 0; i < products.length; i++) {
    const product = document.createElement('div');
    product.className = 'miss-list__item';
    product.innerHTML = `
    <div class="list__item__left-column">
      <div style="display: flex;">
        ${products[i].size ? `<div class="additional__size-mobile">${products[i].size}</div>` : ''}
        <img class="item__photo" src="${products[i].darkPhoto}">
        <div class="item__description">
          <p class="description__title-mobile">${products[i].nameMobile ? products[i].nameMobile : products[i].name}</p>
          <p class="description__title">${products[i].name}</p>
          ${products[i].color || products[i].size ? `
          <div class="description__additional">
            ${products[i].color ? `<p class="additional__color">Цвет: ${products[i].color}</p>` : ''}
            ${products[i].size ? `<p class="additional__size">Размер: ${products[i].size}</p>` : ''}
          </div>
          ` : ''}
        </div>
      </div>
    </div>
    <div class="list__item__right-column">
      <div class="item__count">
        <div class="count__buttons">
        <div class="count__like" src="./assets/svg/like.svg" alt="like"></div>
        <div class="count__remove" src="./assets/svg/trash.svg" alt="remove"></div>
        </div>
      </div>
    </div>`;  

    productList.append(product);
  }
}