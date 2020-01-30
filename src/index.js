import openPopup from './modules/openPopup';
import activeСross from './modules/activeCross';
import mainPlaySlide from './modules/mainPlaySlide';
import playGallery from './modules/playGallery';
import carouselSrvices from './modules/carouselSrvices';
import sendForm from './modules/sendForm';
import validationInput from './modules/validationInput';
import calculatorPrice from './modules/calculatorPrice';
import burgerMenu from './modules/burgerMenu';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  // событие на модальные окна header - перезвонить, список клубов, визит 
  openPopup();

  // крастик на моальных окнах 
  activeСross();

  // sliders 
  mainPlaySlide();
  playGallery();

  //слайдер карусель 
  carouselSrvices();

  // отправка формы 
  let callbackForm = document.getElementById('form1');
  let freeVisitForm = document.getElementById('form2');
  let bannerForm = document.getElementById('banner-form');
  let footerForm = document.getElementById('footer_form');
  let card = document.getElementById('card_order');
  sendForm(callbackForm);
  sendForm(freeVisitForm);
  sendForm(bannerForm);
  sendForm(footerForm);
  sendForm(card);

  // валидация полей ввода 
  validationInput();

  //  калькулятор 
  calculatorPrice();

  // появление бургера 
  burgerMenu();
});
