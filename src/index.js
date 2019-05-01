import readlineSync from 'readline-sync';

const consoleInput = question => readlineSync.question(`${question}`);

const sayWelcome = (rule) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rule}`);
  const name = consoleInput('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
const sayYouLose = (name, answer, correctAnswer) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};
const sayYouWin = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export default (rule, getGame) => {
  const name = sayWelcome(rule);

  const stopCount = 3;
  let count = 0;
  while (count < stopCount) {
    const { question, correctAnswer } = getGame();

    console.log(`${question}`);
    const answer = consoleInput('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      sayYouLose(name, answer, correctAnswer);
      return 1;
    }
  }
  sayYouWin(name);
  return 0;
};

