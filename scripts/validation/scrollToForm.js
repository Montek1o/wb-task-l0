export default function scrollToForm(e) {
  const form = document.querySelector('.recipient__form');

  form.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}