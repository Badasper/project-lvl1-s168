import { askAny, getRandom, getRandomOperator, getResultExpression, playGame } from '..';

const tryCalcAnswer = (name) => {
  const num1 = getRandom(1, 50);
  const num2 = getRandom(1, 50);
  const operator = getRandomOperator();

  console.log(`Question: ${num1} ${operator} ${num2}`);
  const ans = askAny('Your answer:  ');
  const correct = getResultExpression(num1, num2, operator);
  if (Number(ans) === correct) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${ans}' is wrong answer ;(. Correct answer was '${correct}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

export default () => playGame('Brain Calc', 'What is the result of the expression?', 3, tryCalcAnswer);
