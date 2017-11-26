import { car, cdr, cons } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

export { cons };

const consoleInput = question => readlineSync.question(`${question}`);

const sayWelcome = (rule) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rule}`);
  const name = consoleInput('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
const sayYouLoss = (name, answer, correctAnswer) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};

const sayYouWin = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const playGame = (rule, getGame) => {
  const name = sayWelcome(rule);

  const stopCount = 3;
  let count = 0;
  while (count < stopCount) {
    const game = getGame();
    const question = car(game);
    const correctAnswer = cdr(game);

    console.log(`${question}`);
    const answer = consoleInput('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      sayYouLoss(name, answer, correctAnswer);
      return 1;
    }
  }
  sayYouWin(name);
  return 0;
};

