// console.log(localStorage);

// localStorage.setItem('key', JSON.stringify({ name: 'mango', egt: 2 }));

// const savedData = localStorage.getItem('key');
// console.log('savedData', savedData);

// const parsedData = JSON.parse(savedData);
// console.log('parsedData', parsedData);

// ===========================================
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

// const STORAGE_KEY = 'feedback-msg';

// const refs = {
//   form: document.querySelector('.js-feedback-form'),
//   textarea: document.querySelector('.js-feedback-form  textarea'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 200));

// populateTextarea();

// /*
//  * - Останавливаем поведение по умолчанию
//  * - Убираем сообщение из хранилища
//  * - Очищаем форму
//  */
// function onFormSubmit(evt) {
//   evt.preventDefault();

//   console.log('Отправляем форму');
//   evt.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// /*
//  * - Получаем значение поля
//  * - Сохраняем его в хранилище
//  * - Можно добавить throttle
//  */
// function onTextareaInput(evt) {
//   const message = evt.target.value;

//   localStorage.setItem(STORAGE_KEY, message);
// }

// /*
//  * - Получаем значение из хранилища
//  * - Если там что-то было, обновляем DOM
//  */
// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);

//   if (savedMessage) {
//     refs.textarea.value = savedMessage;
//   }
// }
