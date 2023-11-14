import totalUpdate from "../total/totalUpdate";

export default function deleteProduct() {
  const deleteIcons = document.querySelectorAll('.count__remove');

  deleteIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
      const product = e.target.closest('.list__item') || e.target.closest('.miss-list__item');

      product.remove();
      totalUpdate();
    })
  })

} 