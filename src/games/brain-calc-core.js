import { getRandom, playGame, cons } from '..';

const getBrainCalc = () => {
  const num1 = getRandom(1, 50);
  const num2 = getRandom(1, 50);
  let operator;
  switch (getRandom(1, 3)) {
    case 1: operator = '+';
      break;
    case 2: operator = '-';
      break;
    case 3: operator = '*';
      break;
    default: operator = 'error';
  }

  const question = `${num1} ${operator} ${num2}`;
  let correctAnswer;
  switch (operator) {
    case '+': correctAnswer = num1 + num2;
      break;
    case '-': correctAnswer = num1 - num2;
      break;
    case '*': correctAnswer = num1 * num2;
      break;
    default: correctAnswer = 'error';
  }

  const stopCount = 3;
  const head = cons('What is the result of the expression?', stopCount);
  const body = cons(question, correctAnswer.toString());
  return cons(head, body);
};

export default () => playGame(getBrainCalc);
