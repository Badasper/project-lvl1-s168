import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const getRandom = (min, max) => Math.floor(((max - min) + 1) * Math.random()) + min;

const consoleInput = question => readlineSync.question(`${question}`);

export const playGame = (stopCount, getGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${getGame('rule')}`);
  const name = consoleInput('May I have your name? ');
  console.log(`Hello, ${name}!`);

  let count = 0;
  while (count < stopCount) {
    const request = getGame('QA');
    const question = car(request);
    const correct = cdr(request);

    console.log(`Question: ${question}`);
    const ans = consoleInput('Your answer: ');
    if (ans === correct) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${ans}' is wrong answer ;(. Correct answer was '${correct}'.`);
      console.log(`Let's try again, ${name}!`);
      return 1;
    }
  }
  if (count > 0) {
    console.log(`Congratulations, ${name}!`);
  }
  return 0;
};
