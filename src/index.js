import { car, cdr, cons } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

export { cons };

export const getRandom = (min, max) => Math.floor(((max - min) + 1) * Math.random()) + min;

export const getBalanceNumber = (number) => {
  const strNum = number.toString().split('').sort().join('');
  const lastIndex = strNum.length - 1;
  let firstNum = Number(strNum[0]);
  let lastNum = Number(strNum[lastIndex]);

  if (lastNum - firstNum < 2) return Number(strNum);

  const sumOfNums = lastNum + firstNum;
  firstNum = Math.floor(sumOfNums / 2);
  lastNum = sumOfNums - firstNum;
  return getBalanceNumber(Number(`${firstNum}${strNum.substring(1, lastIndex)}${lastNum}`));
};

export const getOperator = (num) => {
  switch (num) {
    case 1: return '+';
    case 2: return '-';
    case 3: return '*';
    default: return 'error';
  }
};

export const calcExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: return 'error';
  }
};

export const gcd = (num1, num2) => {
  const maxNum = num1 > num2 ? num1 : num2;
  const minNum = num1 > num2 ? num2 : num1;
  if (minNum === 0) return maxNum;
  if (maxNum % minNum === 0) return minNum;
  return gcd(minNum, maxNum % minNum);
};

export const getProgression = (start, step, idx) => {
  let count = 0;
  let next;
  let sequence = '';
  while (count < 10) {
    next = idx === count ? '..' : (step * count) + start;
    sequence = `${sequence} ${next} `;
    count += 1;
  }
  return sequence;
};

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

    console.log(`Question: ${question}`);
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

