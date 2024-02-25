let number_1 = 12;
let number_2 = 34;
console.log(number_1 + number_2);
console.log(number_1 + number_2.toString());

let uid_dom = document.querySelector('#uid');
console.log(uid_dom);
uid_dom.innerHTML = 'UID update from javascript.';

let student_dom = document.querySelectorAll('.student');
console.log(student_dom);

let dom_password = document.querySelector('#password');
console.log(dom_password);
dom_password.value = 'hahahaha'
let currentValue = dom_password;
console.log(currentValue);