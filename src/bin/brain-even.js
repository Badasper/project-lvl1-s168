#!/usr/bin/env nodejs


import { askAny, getRandom, isEven } from '..';

console.log('Welcome to Bbrain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

const name = askAny('May I have your name? ');
console.log(`Hello, ${name}!`);

let count = 0;

while (count < 3) {
  const randomNumber = getRandom(1, 100);
  console.log(`Question: ${randomNumber}`);
  const ans = askAny('Your answer:  ');
  const correct = isEven(randomNumber);
  if (ans === correct) {
    console.log('Correct!');
  } else {
    console.log(`'${ans}' is wrong answer ;(. Correct answer was '${correct}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
  count += 1;
}
