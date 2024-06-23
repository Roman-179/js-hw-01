const credits = 23580;
const pricePerDroid = 3000;
const count = prompt("Введіть кількість телевізорів?");
let totalPrice = count * pricePerDroid;

if (count === null) {
  console.log("Операцію скасовано!");
} else if (totalPrice > credits) {
  console.log("Недостатньо коштів на рахунку!");
} else {
  console.log(
    `Ви купили ${count} телевізорів, на рахунку залишилось ${
      credits - totalPrice
    } кредитів.`
  );
}
