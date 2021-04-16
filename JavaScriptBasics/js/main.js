'use strict';

// #10
// console.log(typeof 'hello');
// console.log(typeof 5);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);

// #11
// console.log('5' - 3);
// console.log('5' - '3');

// console.log('5' + 3);
// console.log(parseInt('5', 10) + 3);
// console.log(parseInt('hello', 10));

// #12
// const price = 1200;

// console.log(price > 1000);
// console.log(price < 1000);
// console.log(price >= 1000);
// console.log(price <= 1000);
// console.log(price === 1000);
// console.log(price !== 1000);

// false <- 0, null, undefined, '', false
// true <- それ以外

// console.log(Boolean(0));
// console.log(Boolean('hello'));

// #13
// const score = 40;

// if (score >= 80) {
//   console.log('Great!');
// } else if (score >= 60) {
//   console.log('Good!');
// } else {
//   console.log('OK...');
// }

// #14
// const score = 85;

// if (score >= 80) {
//   console.log('Great!');
// } else {
//   console.log('OK...');
// }

// score >= 80 ? console.log('Great!') : console.log('OK...');

// #15
// const score = 60;
// const name = 'taguchi';

// if (score >= 50) {
//   if (name === 'taguchi') {
//     console.log('Good job!');
//   }
// }

// if (score >= 50 && name === 'taguchi') {
//   console.log('Good job!');
// }

// #16
// const signal = 'pink';
// if (signal === 'red') {
//   console.log('Stop!');
// } else if (signal === 'yellow') {
//   console.log('Caution!');
// } else if (signal === 'blue'){
//   console.log('Go!');
// }

// switch (signal) {
//   case 'red':
//     console.log('Stop!');
//     break;
//   case 'yellow':
//     console.log('Caution!');
//     break;
//   case 'blue':
//   case 'green':
//     console.log('Go!');
//     break;
//   default:
//     console.log('Wrong signal!');
//     break;
// }

// #17
// for (let i = 1; i <= 10; i++) {
//   // console.log('hello');
//   console.log(`hello ${i}`);
// }

// #18
// let hp = 100;

// while (hp > 0) {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// }

// let hp = -50;

// do {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// } while (hp > 0);

// #19
// for (let i = 1; i <= 10; i++) {
  // if (i === 4) {
  //   if (i % 3 === 0) {
  //   continue;
  // }
//   if (i === 4) {
//     break;
//   }
//   console.log(i);
// }

// #20
// function showAd() {
//   console.log('----------');
//   console.log('--- Ad ---');
//   console.log('----------');
// }

// showAd();
// console.log('Tom is great!');
// console.log('Bob is great!');
// showAd()
// console.log('Steve is great!');
// console.log('Richard is great!');
// showAd()

// #21
// function showAd(message = 'Ad') {
//   console.log('----------');
//   console.log(`--- ${message} ---`);
//   console.log('----------');
// }

// showAd('Header Ad');
// console.log('Tom is great!');
// console.log('Bob is great!');
// // showAd('Ad')
// showAd()
// console.log('Steve is great!');
// console.log('Richard is great!');
// showAd('Footer Ad')

// #22
// function sum(a, b, c) {
//   // console.log(a + b + c);
//   return a + b + c;
// }

// sum(1,2,3);
// sum(3,4,5);

// const total = sum(1,2,3) + sum(3,4,5);
// console.log(total);

// #23
// const sum = function(a, b, c) {
//   return a + b + c;
// };

// const total = sum(1,2,3) + sum(3,4,5);
// console.log(total);

// #24
// const sum = (a, b, c) => a + b + c;

// const total = sum(1,2,3) + sum(3,4,5);
// console.log(total);

// const double = a  => a * 2;

// console.log(double(12));

// #25
// const x = 2;

// function f() {
//   // const x = 1;
//   console.log(x);
// }

// f();
// console.log(x);

// #26
{
  const x = 100;
  console.log(x);
}