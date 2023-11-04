import { products } from './products';

export default function addProducts() {
  const productList = document.querySelector('.list__body');

  for (let i = 0; i < products.length; i++) {
    const product = document.createElement('div');
    product.className = 'list__item';
    product.innerHTML = `
    <div class="list__item__left-column">
      <label>
        <input class="item__checkbox checkbox" type="checkbox">
        <span class="item__custom-checkbox custom-checkbox"></span>
      </label>
      <img class="item__photo" src="${products[i].photo}">
      <div class="item__description">
        <p class="description__title">${products[i].name}</p>
        ${products[i].color || products[i].size ? `
        <div class="description__additional">
          ${products[i].color ? `<p class="additional__color">Цвет: ${products[i].color}</p>` : ''}
          ${products[i].size ? `<p class="additional__size">Размер: ${products[i].size}</p>` : ''}
        </div>
        ` : ''}
        <div class="description__company">
          <p class="company__address">Коледино WB</p>
          <p class="company__name">${products[i].company} <img class="company__info" src="./assets/svg/info.svg" alt="company-info"></p>
        </div>
      </div>
    </div>
    <div class="list__item__right-column">
      <div class="item__count">
        <div class="count__container">
          <span class="count__minus min">−</span>
          <span class="count__number">${products[i].count}</span>
          <span class="count__plus">+</span>
        </div>
        ${products[i].stock ? `<p class="count__stock">Осталось ${products[i].stock} шт.</p>` : ''}
        <div class="count__buttons">
          <img class="count__like" src="./assets/svg/like.svg" alt="like">
          <img class="count__remove" src="./assets/svg/trash.svg" alt="remove">
        </div>
      </div>
      <div class="item__price">
        ${products[i].price.length > 6 ? 
        `<p class="price__main"><span class="small-number">${products[i].price}</span> сом</p>` : 
        `<p class="price__main"><span class="large-number">${products[i].price}</span> сом</p>`}
        <p class="price__sale">${products[i].sale} сом</p>
      </div> 
    </div>`;  

    productList.append(product);
  }
}