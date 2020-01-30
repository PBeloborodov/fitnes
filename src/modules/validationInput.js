const validationInput = () =>{
  let allInput = document.querySelectorAll('input');
  allInput.forEach((elem) => {
    if (elem.placeholder == 'Ваше имя...') {
      elem.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^А-Яа-я\ ]+/g, '');
      });
    }
    if (elem.placeholder == 'Ваш номер телефона...') {
      maskPhone(`#${elem.id}`);
    }
  });
};

export  default validationInput;