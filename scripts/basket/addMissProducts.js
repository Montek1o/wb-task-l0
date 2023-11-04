import { products } from './products';

export default function addProducts() {
  const productList = document.querySelector('.miss-list__body');

  for (let i = 0; i < products.length; i++) {
    const product = document.createElement('div');
    product.className = 'miss-list__item';
    product.innerHTML = `
    <div style="display: flex;">
      <img class="item__photo" src="${products[i].darkPhoto}">
      <div class="item__description">
        <p class="description__title">${products[i].name}</p>
        ${products[i].color || products[i].size ? `
        <div class="description__additional">
          ${products[i].color ? `<p class="additional__color">Цвет: ${products[i].color}</p>` : ''}
          ${products[i].size ? `<p class="additional__size">Размер: ${products[i].size}</p>` : ''}
        </div>
        ` : ''}
      </div>
    </div>
    <div class="item__count">
      <div class="count__buttons">
        <img class="count__like" src="./assets/svg/like.svg" alt="like">
        <img class="count__remove" src="./assets/svg/trash.svg" alt="remove">
      </div>
    </div>`;  

    productList.append(product);
  }
}