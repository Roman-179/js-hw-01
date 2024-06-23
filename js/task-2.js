const total = 100;
const ordered = 150;
let result;

if (ordered <= total) {
  result = "Замовлення оформлено";
} else {
  result = "На складі недостатня кількість товару!";
}

console.log(result);
