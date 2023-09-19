const STORAGE_KEY = 'feedback-form-state';


const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSabmit);
refs.textarea.addEventListener('input', onTextareaInput);

populateTextarea();

// функція відправки форми
function onFormSabmit(event) {
  event.preventDefault();
  //   console.log(event);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

// функція запису localStorage
function onTextareaInput(event) {
  const message = event.target.value;
  localStorage.setItem(STORAGE_KEY, message);
//   console.log(value);
}

// функція отримуємо дані сховища
// якщо(if) буди ветаємо в DOM
function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

//   console.log(savedMessage);

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
