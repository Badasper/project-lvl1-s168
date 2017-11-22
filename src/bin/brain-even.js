#!/usr/bin/env nodejs


import { askAny, getRandom } from '..';

const correctAns = (num) => {
  const qry = (num % 2 === 0);
  return qry ? 'yes' : 'no';
};

console.log('Welcome to Bbrain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

const name = askAny('May I have your name? ');
console.log(`Hello, ${name}!`);

let ans;
let count = 0;
let randomNumber;
let correct;

while (count < 3) {
  randomNumber = getRandom(1, 100);
  console.log(`Question: ${randomNumber}`);
  ans = askAny('Your answer:  ');
  correct = correctAns(randomNumber);

  if (ans === correct) {
    console.log('Correct!');
  } else {
    console.log(`'${ans}' is wrong answer ;(. Correct answer was '${correct}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
  count += 1;
}
