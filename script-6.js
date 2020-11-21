// Напиши скрипт, который бы при потере фокуса на инпуте проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей используй CSS - классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const input = document.querySelector('#validation-input');

input.addEventListener('change', event => {
  if (event.target.value.length === 6) {
  input.style.borderColor = '#4caf50';
} else {
  input.style.borderColor = '#f44336';
  }
});
