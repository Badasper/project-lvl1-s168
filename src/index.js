import readlineSync from 'readline-sync';

export const cons = (a, b) => (message) => {
  switch (message) {
    case 'car': return a;
    case 'cdr': return b;
    default: return '';
  }
};

export const car = pair => pair('car');
export const cdr = pair => pair('cdr');

export const getRandom = (min, max) => Math.floor(((max - min) + 1) * Math.random()) + min;
export const isEven = num => num % 2 === 0;
const consoleInput = question => readlineSync.question(`${question}`);

const getRule = game => car(car(game));
const getStopCount = game => cdr(car(game));
const getQuestion = game => car(cdr(game));
const getCorrectAnswer = game => cdr(cdr(game));

export const playGame = (getGame) => {
  let game = getGame();
  console.log('Welcome to the Brain Games!');
  console.log(`${getRule(game)}`);
  const name = consoleInput('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const stopCount = getStopCount(game);
  let count = 0;
  while (count < stopCount) {
    game = getGame();
    console.log(`Question: ${getQuestion(game)}`);
    const ans = consoleInput('Your answer: ');
    const correct = getCorrectAnswer(game);
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
