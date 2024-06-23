let input;
let total = 0;
let message;

while (true) {
  input = prompt("Введіть число");
  if (input === null) {
    break;
  }
  let result = parseInt(input);
  if (result === NaN) {
    message = "Було введено не число, спробуйте ще раз";
    break;
  } else {
    total += result;
  }
}

if (message.length === 0) {
  message = `Загальна сума чисел дорівнює ${total}`;
}

alert(message);
