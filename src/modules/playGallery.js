

const playGallery = () => { // слайдер галерии
  let gallerySlider = document.querySelector('.gallery-slider'),
    slide = gallerySlider.querySelectorAll('.slide'),
    galleryBg = document.querySelector('.gallery-bg'),
    arrowsLeft = document.getElementById('arrows-left-gallery'),
    arrowsRight = document.getElementById('arrows-right-gallery'),
    sliderMin = document.querySelector('.gallery-slider-min'),
    itemSliderMin = sliderMin.querySelectorAll('div');

  for (let i = 1; i < slide.length; i++) {
    slide[i].style.display = 'none';
  }
  let countGallery = 0;

  const autoPlaySlideGallry = () => {
    setInterval(() => {
      deActivSlide(countGallery);
      countGallery++;
      if (countGallery >= itemSliderMin.length - 1) {
        countGallery = 0;
      }
      activSlide(countGallery);
    }, 3000);
  };
  autoPlaySlideGallry();

  const activSlide = (key) => { //смена слайда, нижней полоски  - активация 
    slide[key].style.display = 'block';
    itemSliderMin[key].classList.add('gallery-slider-min__item-active');
  };
  const deActivSlide = (key) => { // //смена слайда, нижней полоски  - диактивация 
    slide[key].style.display = 'none';
    itemSliderMin[key].classList.remove('gallery-slider-min__item-active');
  };

  galleryBg.addEventListener('click', () => { // анимация стрелок
    let target = event.target;
    if (target == arrowsLeft) { // левая стрелка
      if (countGallery == 0) {
        deActivSlide(countGallery);
        slide[slide.length - 1].style.display = 'block';
        itemSliderMin[itemSliderMin.length - 1].classList.add('gallery-slider-min__item-active');
        countGallery = slide.length - 1;
      } else {
        deActivSlide(countGallery);
        countGallery--;
        activSlide(countGallery);
      }
    }
    if (target == arrowsRight) { // правая стрелка
      if (countGallery < slide.length - 1) {
        deActivSlide(countGallery);
        countGallery++;
        activSlide(countGallery);
      } else {
        deActivSlide(countGallery);
        countGallery = 0;
        activSlide(countGallery);
      }
    }
    if (target.matches('.gallery-slider-min__item-active')) { // нижний слайдер  - полоски
      return;
    } else {
      if (target.matches('.gallery-slider-min__item')) {
        itemSliderMin.forEach((elem, index) => {
          if (elem == target) {
            countGallery = index;
            activSlide(countGallery);
          } else {
            deActivSlide(index);
          }
        });
      }
    }

  });

};

export default playGallery;
