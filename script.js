window.onload = () => {
  const cobra = document.querySelector('#cobra-img');
  const form = document.querySelector('#sign');
  const hissing = document.querySelector('#audio');

  const moveCobra = async () => {
    cobra.style.top = '-1000px';
    setTimeout(() => {
      cobra.style.display = 'none';
    }, 1400);
  };

  const moveSign = async () => {
    form.style.display = 'flex';
    setTimeout(() => {
      form.style.top = '50%';
    }, 10);
  };

  cobra.addEventListener('click', () => {
    hissing.play();
    setTimeout(() => {
      moveCobra();
      moveSign();
    }, 900);
  });
};
