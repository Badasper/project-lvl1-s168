import readlineSync from 'readline-sync';

export const askAny = question => readlineSync.question(`${question}`);

const getRandom = (min, max) => Math.floor(((max - min) + 1) * Math.random()) + min;

const isEven = num => num % 2 === 0;

export const tryEvenAnswer = (name) => {
  const randomNumber = getRandom(1, 100);
  console.log(`Question: ${randomNumber}`);
  const ans = askAny('Your answer:  ');
  const correct = isEven(randomNumber) ? 'yes' : 'no';
  if (ans === correct) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${ans}' is wrong answer ;(. Correct answer was '${correct}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

const greeting = (nameOfGame, rule) => {
  console.log(`Welcome to ${nameOfGame}!`);
  console.log(rule);
  const name = askAny('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const playGame = (nameOfGame, rule, countStop, tryAnswer) => {
  const name = greeting(nameOfGame, rule);
  let count = 0;
  while (count < countStop) {
    if (tryAnswer(name)) {
      count += 1;
    } else {
      return 0;
    }
  }
  console.log(`Congratulation, ${name}`);
  return 1;
};
