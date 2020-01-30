const calculatorPrice = ()=>{
  let cardOrder = document.getElementById('card_order');
  let priceTotal = cardOrder.querySelector('#price-total');
  let promocode = cardOrder.querySelector('#promocode');

  cardOrder.addEventListener('click', (event) => {
    let target = event.target;
    let input = cardOrder.querySelectorAll('input:checked'); // получаю инпуты на которых checked
    const percent = (numb) => {
      numb = numb - (numb * 0.3);

      priceTotal.textContent = numb;
    };
    const addpriceTotal = (one, sex, nine, twelve) => { // функция задания цены 
      if (input[0].value == 1) {
        priceTotal.textContent = one;
        if (promocode && promocode.value == 'ТЕЛО2019') {
          percent(one);
        }
      }
      if (input[0].value == 6) {
        priceTotal.textContent = sex;
        if (promocode && promocode.value == 'ТЕЛО2019') {
          percent(sex);
        }

      }
      if (input[0].value == 9) {
        priceTotal.textContent = nine;
        if (promocode && promocode.value == 'ТЕЛО2019') {
          percent(nine);
        }

      }
      if (input[0].value == 12) {
        priceTotal.textContent = twelve;
        if (promocode && promocode.value == 'ТЕЛО2019') {
          percent(twelve);
        }
      }
    };

    if (input[1] && input[1].value == 'mozaika') {
      addpriceTotal(1990, 9990, 13900, 19900);
    }
    if (input[1] && input[1].value == 'schelkovo') {
      addpriceTotal(2990, 14990, 21900, 24900);
    }

  });
if(promocode){
  promocode.addEventListener('input', () => {
    if (promocode.value == 'ТЕЛО2019') {
      priceTotal.textContent = Number(priceTotal.textContent) - (Number(priceTotal.textContent) * 0.3);
    }

  });
}
};
 export default calculatorPrice;