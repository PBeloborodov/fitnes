const sendForm = (elemForm) => {
  let formMessage = document.getElementById('thanks'),
    errorMessage = 'Ошибка!',
    loadMessage = 'Загрузка',
    statusSendForm = document.createElement('div');


  elemForm.addEventListener('submit', (event) => {
    event.preventDefault();
    elemForm.appendChild(statusSendForm);
    statusSendForm.textContent = loadMessage;
    statusSendForm.setAttribute('style', 'color: white; font-size:22px; position:relative; top:10px;');

    const request = new XMLHttpRequest();
    request.open('POST', '../server.php');
    request.addEventListener('readystatechange', (event) => {
      let target = event.target;
      if (target.readyState !== 4) {
        return;
      }
      if (target.status == 200) {
        let click = new Event('click');
        if(elemForm.parentNode.previousElementSibling){
        elemForm.parentNode.previousElementSibling.dispatchEvent(click);
        }
        formMessage.style.display = 'block';
        statusSendForm.textContent = '';
      } else {
        formMessage.querySelector('p').textContent = errorMessage;
      }
    });
    request.setRequestHeader('Content-type', 'application/json');
    const elemFormData = new FormData(elemForm);
    let body = {};
    elemFormData.forEach((val, key) => {
      body[key] = val;
    });
    request.send(JSON.stringify(body));
  });
  formMessage.querySelector('button').addEventListener('click', () => { // обработчик на форму спасибо после отправки дан
    let click = new Event('click');
    formMessage.style.display = 'none';
  });
};

export default sendForm;