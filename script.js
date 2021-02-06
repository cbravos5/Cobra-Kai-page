window.onload = () => {
  const cobra = document.querySelector('#cobra-img');
  const form = document.querySelector('#sign');

  cobra.addEventListener('click', () => {
    cobra.style.top = '-1000px';
    form.style.display = 'flex';
    setTimeout(() => {
      form.style.top = '50%';
    }, 1);
    setTimeout(() => {
      cobra.style.display = 'none';
    }, 1400);
  });
};
