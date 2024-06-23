const ADMIN_PASSWORD = "jqueryismyjam";
let message = prompt("Введіть пароль");

if (message === null) {
  console.log("Операцію скасовано!");
} else if (message === ADMIN_PASSWORD) {
  console.log("Ласкаво просимо!");
} else {
  console.log("Доступ заборонено, невірний пароль!");
}
