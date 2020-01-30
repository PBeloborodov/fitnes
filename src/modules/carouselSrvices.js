const carouselSrvices= ()=>{
  class SliderServices {
    constructor({
      main,
      wrap,
      next,
      prev,
      position = 0,
      slideToShow = 5
    }) {
      this.main = document.querySelector(main);
      this.wrap = document.querySelector(wrap);
      this.slide = document.querySelector(wrap).children;
      this.wrapper = this.main.querySelector('.wrapper');
      this.next = document.querySelector(next);
      this.prev = document.querySelector(prev);
      this.slideToShow = slideToShow;
      this.options = {
        position,
        widthSlide: Math.floor(100 / this.slideToShow)
      };
    }
    init() {
      this.addBpaClass();
      this.addBpaStyle();
      this.controlSlider();
    }
    addBpaClass() {
      this.main.classList.add('bpa-slide');
      this.wrap.classList.add('bpa-slide__wrap');
      this.wrapper.classList.add('bpa-wrapper');

      for (const item of this.slide) {
        item.classList.add('bpa-slide__item');
      }
    }
    addBpaStyle() {
      const style = document.createElement('style');
      style.id = 'sliderServices-style';
      style.textContent = `
        .bpa-slide__wrap{
          transition: transform 0.5s !important;
          will-change: transform !important;
        }
        .bpa-slide__item{
          flex: 0 0 ${this.options.widthSlide}% !important;
        }
        .bpa-wrapper{
          display: flex !important;
          overflow: hidden !important;
          flex-direction: column !important;
          justify-content: center !important;
        }
      `;
      document.head.appendChild(style);
    }
    controlSlider() {
      this.next.addEventListener('click', this.nextSlider.bind(this));
      this.prev.addEventListener('click', this.prevSlider.bind(this));
    }
    nextSlider() {

      if (this.options.position >= 0 && this.options.position < this.slide.length - this.slideToShow) {
        console.log(this.options.position);
        ++this.options.position;
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      }
    }
    prevSlider() {
      if (this.options.position < this.slide.length && this.options.position > 0) {
        console.log(this.options.position);
        --this.options.position;
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;

      }
    }
    addArrow() {

    }
  }
  const sliderServices = new SliderServices({
    main: '#services',
    wrap: '.services-slider',
    next: '#arrows-right-service',
    prev: '#arrows-left-service',
    slideToShow: 5
  });
  sliderServices.init();
};

export default carouselSrvices;