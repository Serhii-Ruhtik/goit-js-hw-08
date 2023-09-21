import throttle from "lodash.throttle";
const STORAGE_KEY = 'feedback-form-state';


const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSabmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));


let objInputValue = {};
populateTextarea();

// функція відправки форми
function onFormSabmit(event) {
  event.preventDefault();

const formElements = event.currentTarget.elements;
// console.log(formElements);
const email = formElements.email.value;
const message = formElements.message.value;
if (!email || !message ) {
  alert("Enter email and message")
}
console.log(objInputValue);
  //   console.log(event);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

// функція запису localStorage
function onTextareaInput(event) {
  const message = event.target.value;
  console.log(message);
  objInputValue[event.target.name] = event.target.value;
  

  localStorage.setItem(STORAGE_KEY, JSON.stringify(objInputValue));
//   console.log(value);
}

// функція отримуємо дані сховища
// якщо(if) буди ветаємо в DOM
function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

//   console.log(savedMessage);

  if (savedMessage) {
    objInputValue = JSON.parse(savedMessage);
    console.log(objInputValue);

    
    refs.input.value = objInputValue.email;
    refs.textarea.value = objInputValue.message;
  }

}
// const STORAGE_KEY = 'feedback-form-state';

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   input: document.querySelector('.feedback-form input'),
//   textarea: document.querySelector('.feedback-form textarea'),
// };
// // console.log(refs.form);
// // console.log(refs.input);
// // console.log(refs.textarea);

// refs.form.addEventListener('submit', onFormSabmit);
// refs.input.addEventListener('input', onInput);
// refs.textarea.addEventListener('input', onTextareaInput);

// // populateTextarea();

// // функція відправки форми
// function onFormSabmit(event) {
//   console.log(event);
//   // event.preventDefault();
  
//   // event.currentTarget.reset();
//   // localStorage.removeItem(STORAGE_KEY);
// }
// console.log(onFormSabmit(""))
// function onInput(event) {
//   // console.log(event);
  
//   // console.log(event.data());
//   const messageInput = event.target.value;
//   console.log("messageInput ---", messageInput);
//   // localStorage.setItem(STORAGE_KEY, message);

// }

// // функція запису localStorage
// function onTextareaInput(event) {
//   // console.log(event);
//   const messageTextarea = event.target.value;
//   console.log("messageTextarea ---", messageTextarea);
//   // localStorage.setItem(STORAGE_KEY, message);

// }

// // // функція отримуємо дані сховища
// // // якщо(if) буди ветаємо в DOM
// // function populateTextarea() {
// //   const savedMessage = localStorage.getItem(STORAGE_KEY);

// // //   console.log(savedMessage);

// //   if (savedMessage) {
// //     refs.textarea.value = savedMessage;
// //   }
// // }