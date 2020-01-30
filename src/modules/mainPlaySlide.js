const mainPlaySlide = () => { // слайдер главного экрана
  let mainSlider = document.querySelector('.main-slider'),
    slide = mainSlider.querySelectorAll('.slide'),
    counterSlide = 0;
  setInterval(() => {
    slide[counterSlide].setAttribute('style', 'display:none');
    counterSlide++;
    if (counterSlide >= slide.length) {
      counterSlide = 0;
    }
    slide[counterSlide].setAttribute('style', 'display:flex');
  }, 3000);
};
export default mainPlaySlide;