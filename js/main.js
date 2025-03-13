// Modal

const myModal = document.querySelector('#contactFormModal');
const myInput = document.querySelector('#floatingName');

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus();
});