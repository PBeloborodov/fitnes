const openPopup = () => {
  let head = document.querySelector('.head'),
    itemClubSelect = head.querySelector('ul');
  let clickItemClubSelect = 0; // счетчик кликов по "Выбрать клуб" 

  head.addEventListener('click', () => {
    let target = event.target;
    clickItemClubSelect++;
    if (target.className == 'club-select-btn') { // "Выбрать клуб"
      if (clickItemClubSelect % 2 !== 0) {
        itemClubSelect.setAttribute('style', 'display:block ');
      } else {
        itemClubSelect.setAttribute('style', 'display: none');
      }
      document.querySelector('.top-menu').addEventListener('mouseover', () => { // убираю список при наведении на меню(nav) 
        itemClubSelect.setAttribute('style', 'display: none');
        clickItemClubSelect = 0;
      });
    }
    if (target.className === 'open-popup') { // визит
      document.querySelector('#free_visit_form').setAttribute('style', 'display:block ');
    }
    if (target.className === 'btn callback-btn') { //  обратный звонок
      document.querySelector('#callback_form').setAttribute('style', 'display:block ');
    }
    if (target.parentElement.className === 'fixed-gift') {
      let gift = document.getElementById('gift');
      gift.setAttribute('style', 'display:block');
      target.setAttribute('style', 'display:none');
      gift.querySelector('.btn').addEventListener('click', () => {
        gift.style.display = 'none';
      });
    }
  });
};
export default openPopup;