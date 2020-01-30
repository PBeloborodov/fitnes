const activeСross = () => {
  let closeForm = document.querySelectorAll('.close-form'),
  overlay = document.querySelectorAll('.overlay');

  closeForm.forEach((elem) => {
    elem.addEventListener('click', () => {
      elem.parentElement.parentElement.setAttribute('style', 'display:none');
    });

  });
  overlay.forEach((elem)=>{
    elem.addEventListener('click', (event)=>{
      let target = event.target;
      target.parentNode.style.display= 'none';
    });
  });
};

export default activeСross;