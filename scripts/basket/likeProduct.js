export default function likeProduct() {
  const likeIcons = document.querySelectorAll('.count__like');

  likeIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      icon.classList.toggle('count__like-active');
    })
  })
}