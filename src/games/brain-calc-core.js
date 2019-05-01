import playGame from '..';
import { getRandom } from '../utilites';

const getOperator = (num) => {
  switch (num) {
    case 1: return '+';
    case 2: return '-';
    case 3: return '*';
    default: return 'error';
  }
};

const calcExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: return 'error';
  }
};

export default () => {
  const rule = 'What is the result of the expression?';
  return playGame(rule, () => {
    const num1 = getRandom(1, 50);
    const num2 = getRandom(1, 50);
    const operator = getOperator(getRandom(1, 3));
    const question = `${num1} ${operator} ${num2}`;
    const correctAnswer = calcExpression(num1, num2, operator).toString();
    return { question: `Qustion: ${question}`, correctAnswer };
  });
};
