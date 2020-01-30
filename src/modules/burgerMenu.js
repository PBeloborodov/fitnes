const burgerMenu = () => {
  let topMenu = document.querySelector('.top-menu');
  let totop = document.getElementById('totop');
  let popupMenu = document.querySelector('.popup-menu');
  let burger = document.querySelector('#burger-menu');

  totop.style.display = 'none';
  if (screen.width) {
    topMenu.setAttribute('style', 'display:block;');
  }
  window.addEventListener('scroll', () => { // фиксед панели активация стрелки при скролинге 
    if (pageYOffset > 200) {
      topMenu.style.position = 'fixed';
      totop.style.display = 'block';
    } else {
      topMenu.style.position = '';
      totop.style.display = 'none';
    }
  });

  burger.addEventListener('click', ()=>{ // открыть меню 
    popupMenu.style.display = 'block';
  });
  popupMenu.addEventListener('click', (event)=>{ // закрыть меню 
    let target = event.target;
    if(target.tagName == 'A' || target.tagName == 'IMG'){
      popupMenu.style.display = 'none';
    }
  });
};
export default burgerMenu;