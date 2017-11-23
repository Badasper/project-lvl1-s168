import readlineSync from 'readline-sync';

export const askAny = question => readlineSync.question(`${question}`);

export const getRandom = (min, max) => Math.floor(((max - min) + 1) * Math.random()) + min;

export const isEven = num => num % 2 === 0;

export const getRandomOperator = () => {
  const operator = getRandom(1, 3);
  switch (operator) {
    case 1: return '+';
    case 2: return '-';
    case 3: return '*';
    default:
      return console.log(`error operator ${operator}`);
  }
};

export const getResultExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default:
      return console.log(`error operator ${operator}`);
  }
};

export const greeting = (nameOfGame, rule) => {
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
